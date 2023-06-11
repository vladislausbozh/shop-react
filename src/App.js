import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import React from "react";


function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [serchValue, setSerchValue] = React.useState('')
  const [cartOpened, setCartOpened] = useState(false)

  // React.useEffect(()=> {
  //   fetch('https://64849cf8ee799e321626dcfe.mockapi.io/items')
  //     .then(res=> {
  //       return res.json()
  //     })
  //     .then(json=>{
  //       setItems(json)
  //     })
  // },[])

  useEffect(() => {
    async function getCard(){
      const res = await fetch('https://64849cf8ee799e321626dcfe.mockapi.io/items')
      const data = await res.json().then(items => {
        setItems(items)
      })
    }
    getCard()
  },[])

  const onAddToCard = (obj) => {
    setCartItems([...cartItems,obj])
  }

  const serchInput = (event) => {
    setSerchValue(event.target.value)
  }
  

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose = {()=>setCartOpened(false)} /> }
      <Header onClickCart = {()=>setCartOpened(true)} />
      
      <div className="content">
        <div className="title">
          <h1>{serchValue ? `Ищешь по "${serchValue}"` : 'Tea'}</h1>
          <div className="search">
            <img src="/img/search.svg"/>
            <input onChange={serchInput} value={serchValue} placeholder="Поиск"/>
          </div>
        </div>

        <div className="cards">
          {items.filter(item => item.title.toLowerCase().includes(serchValue.toLowerCase())).map((obj)=>(
            <Card 
            key={obj.id} 
            title={obj.title} 
            price ={obj.price}
            onPlus = {(obj)=> onAddToCard(obj)}
            />
          ))} 
        </div>

      </div>
    </div>
  );
}

export default App;
