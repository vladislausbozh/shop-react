import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
  return (
    <div className="wrapper">

      <div className="overlay">
        <Drawer />
      </div>
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
          <div className="card">
            <div className="cardImg">
              <img width={120} src="/img/icon-tea.png" alt="Tea" />
            </div>
            <p>Фруктовый чай - Бора Бора</p>
            <div className="cardButton">
              <b>150 руб</b>
              <button className="button">+</button>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img width={120} src="/img/icon-tea.png" alt="Tea" />
            </div>
            <p>Фруктовый чай - Бора Бора</p>
            <div className="cardButton">
              <b>150 руб</b>
              <button className="button">+</button>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img width={120} src="/img/icon-tea.png" alt="Tea" />
            </div>
            <p>Фруктовый чай - Бора Бора</p>
            <div className="cardButton">
              <b>150 руб</b>
              <button className="button">+</button>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img width={120} src="/img/icon-tea.png" alt="Tea" />
            </div>
            <p>Фруктовый чай - Бора Бора</p>
            <div className="cardButton">
              <b>150 руб</b>
              <button className="button">+</button>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img width={120} src="/img/icon-tea.png" alt="Tea" />
            </div>
            <p>Фруктовый чай - Бора Бора</p>
            <div className="cardButton">
              <b>150 руб</b>
              <button className="button">+</button>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img width={120} src="/img/icon-tea.png" alt="Tea" />
            </div>
            <p>Фруктовый чай - Бора Бора</p>
            <div className="cardButton">
              <b>150 руб</b>
              <button className="button">+</button>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img width={120} src="/img/icon-tea.png" alt="Tea" />
            </div>
            <p>Фруктовый чай - Бора Бора</p>
            <div className="cardButton">
              <b>150 руб</b>
              <button className="button">+</button>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img width={120} src="/img/icon-tea.png" alt="Tea" />
            </div>
            <p>Фруктовый чай - Бора Бора</p>
            <div className="cardButton">
              <b>150 руб</b>
              <button className="button">+</button>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default App;
