import React, {useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import Home from "./pages/Home";
import AppContext from "./context";

function App() {

  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  
  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://64849cf8ee799e321626dcfe.mockapi.io/cart')
      const itemsResponse = await axios.get('https://64849cf8ee799e321626dcfe.mockapi.io/items')

      setIsLoading(false)
      setCartItems(cartResponse.data)
      setItems(itemsResponse.data)
      
      
    }
    fetchData()
  }, [])

 
  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(item => item.perentId === obj.id)
      if (findItem) {
        setCartItems(prev => prev.filter(item => item.perentId !== obj.id))
        await axios.delete(`https://64849cf8ee799e321626dcfe.mockapi.io/cart/${findItem.id}`)
        

      } else {
        setCartItems(prev => [...prev, obj])
        const { data } = await axios.post('https://64849cf8ee799e321626dcfe.mockapi.io/cart', obj)
        setCartItems(prev =>prev.map(item=>{
          if(item.perentId===data.perentId){
            return{
              ...item,
              id: data.id
            }
          }
          return item
        }) )
      }
    } catch (error) {
      console.log()
    }
  }

  const onRemoveCart = (id) => {
    axios.delete(`https://64849cf8ee799e321626dcfe.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) =>obj.perentId ===id);
  };


  return (
    <AppContext.Provider value={{items,cartItems,setCartItems,isItemAdded,setCartOpened}}>
      <div className="wrapper">
        {cartOpened && <Drawer
          items={cartItems}
          onRemove={onRemoveCart}
          onClose={() => setCartOpened(false)}
        />}
        <Header
          onClickCart={() => setCartOpened(true)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onSearchInput={onSearchInput}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />
        </Routes>

      </div>
    </AppContext.Provider>
  );
}



export default App;
// 6 . /2.22MIN