import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { findAllInRenderedTree } from "react-dom/test-utils";


function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [serchValue, setSerchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)


  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://64849cf8ee799e321626dcfe.mockapi.io/cart')
      const itemsResponse = await axios.get('https://64849cf8ee799e321626dcfe.mockapi.io/items')

      setCartItems(cartResponse.data)
      setItems(itemsResponse.data)
      
    }
    fetchData()
  },[])

  const onAddToCard = (obj) => {
    
    if(cartItems.find(item=>item.id === obj.id)){
      axios.delete(`https://64849cf8ee799e321626dcfe.mockapi.io/cart/${obj.id}`)
      setCartItems(prev=> prev.filter(item=>item.id!==obj.id))

      
    } else {
      axios.post('https://64849cf8ee799e321626dcfe.mockapi.io/cart',obj)
      setCartItems([...cartItems, obj])
    }
    
  }

  const onRemoveItems = (id) => {
    axios.delete(`https://64849cf8ee799e321626dcfe.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const serchInput = (event) => {
    setSerchValue(event.target.value)
  }
  

  return (
    <div className="wrapper">
      {cartOpened && <Drawer 
        items={cartItems} 
        onClose = {()=>setCartOpened(false)}
        onRemove={onRemoveItems} 
      /> }

      <Header 
        onClickCart = {()=>setCartOpened(true)} 
      />
      
      <div className="content">
        <div className="title">
          <h1>{serchValue ? `Ищешь по "${serchValue}"` : 'Tea'}</h1>
          <div className="search">
            <img src="/img/search.svg"/>
            <input onChange={serchInput} value={serchValue} placeholder="Поиск"/>
          </div>
        </div>

        <div className="cards">
          {items.
          filter((item) => item.title.toLowerCase().includes(serchValue.toLowerCase()))
          .map((item)=>(
            <Card 
              key={item.id} 
              added={cartItems.some((obj) => obj.id===item.id)}
              onPlus = {(obj)=> onAddToCard(obj)}
              {...item}
            />
          ))} 
        </div>

      </div>
    </div>
  );
}

export default App;
