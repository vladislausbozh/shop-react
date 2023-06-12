import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [serchValue, setSerchValue] = useState('')
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
    axios.get('https://64849cf8ee799e321626dcfe.mockapi.io/items').then(res => {
      setItems(res.data)
    })
    axios.get('https://64849cf8ee799e321626dcfe.mockapi.io/cart').then(res => {
      setCartItems(res.data)
    })
    
  },[])

  const onAddToCard = (obj) => {
    axios.post('https://64849cf8ee799e321626dcfe.mockapi.io/cart')
    setCartItems([...cartItems,obj])
  }

  const onRemoveItems = (id) => {
    
    axios.delete(`https://64849cf8ee799e321626dcfe.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item)=>item.id !== id))
  }

  const serchInput = (event) => {
    setSerchValue(event.target.value)
  }
  

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose = {()=>setCartOpened(false)} onRemove={onRemoveItems} /> }
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
