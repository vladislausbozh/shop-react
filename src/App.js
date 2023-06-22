import React, { useEffect, useState } from "react";
import { Route, Routes} from 'react-router-dom';
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

  useEffect(() => {
    axios.get('https://64849cf8ee799e321626dcfe.mockapi.io/items').then(res=>{
      setItems(res.data)
    }) 
    axios.get('https://64849cf8ee799e321626dcfe.mockapi.io/cart').then(res=>{
      setCartItems(res.data)
    })
  },[])

  const onAddToCart = (obj) => {
    console.log(obj)
    try{
      if(cartItems.some(item=>item.id===obj.id)){
        axios.delete(`https://64849cf8ee799e321626dcfe.mockapi.io/cart/${obj.id}`)
        setCartItems(prev=> prev.filter(item=>item.id!==obj.id))
        
      } else {
        axios.post('https://64849cf8ee799e321626dcfe.mockapi.io/cart',obj)
        setCartItems(prev=>[...prev,obj])
      }
    }catch(error) {
      console.log()
    }
  }
  
  const onRemoveCart = (id) => {
    axios.delete(`https://64849cf8ee799e321626dcfe.mockapi.io/cart/${id}`)
    setCartItems(prev=>prev.filter(item=>item.id!==id))
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
            />
          }
        />
      </Routes>
      
    </div>
  );
}



export default App;
