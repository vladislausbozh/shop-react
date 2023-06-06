import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";


function App() {
  const arr = [
    { id:1, title:'Фруктовый чай - Бора Бора',price:'150руб'},
    { id:2, title:'Черный чай - Лисма',price:'110руб'},
    { id:3, title:'Зеленый чай - Кабусэтя',price:'150руб'},
    { id:4, title:'Белый чай - Байхао Иньчжэнь',price:'150руб'},
  ]

  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      
      <div className="content">
        <div className="title">
          <h1>Tea</h1>
          <div className="search">
            <img src="/img/search.svg"/>
            <input placeholder="Поиск"/>
          </div>
        </div>

        <div className="cards">
          {arr.map((obj)=>(
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
