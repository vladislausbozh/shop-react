import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";
import axios from "axios";
import Home from "./pages/Home";


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

  const onAddToCart = (obj) => {
    try {
      if (cartItems.some(item => item.id === obj.id)) {
        axios.delete(`https://64849cf8ee799e321626dcfe.mockapi.io/cart/${obj.id}`)
        setCartItems(prev => prev.filter(item => item.id !== obj.id))

      } else {
        axios.post('https://64849cf8ee799e321626dcfe.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, obj])
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



  return (
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
  );
}



export default App;
