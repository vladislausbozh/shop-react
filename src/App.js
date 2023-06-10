import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";
import { useEffect, useState } from "react";


function App() {
  const [items, setItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(()=> {
    fetch('https://64849cf8ee799e321626dcfe.mockapi.io/items')
      .then((res) => {
        return res.json()
    
      .then((json) => {
        setItems(json)
      })
    })
  },[])

  return (
    <div className="wrapper">
      {cartOpened && <Drawer onClose = {()=>setCartOpened(false)} /> }
      <Header onClickCart = {()=>setCartOpened(true)} />
      
      <div className="content">
        <div className="title">
          <h1>Tea</h1>
          <div className="search">
            <img src="/img/search.svg"/>
            <input placeholder="Поиск"/>
          </div>
        </div>

        <div className="cards">
          {items.map((obj)=>(
            <Card 
            key={obj.id} 
            title={obj.title} 
            price ={obj.price}
            
            onClickPlus = {()=> console.log('нажали плюс')}
            />
          ))} 
        </div>

      </div>
    </div>
  );
}

export default App;
