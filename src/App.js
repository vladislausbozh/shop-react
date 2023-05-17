
function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" />
          <div className="headerInfo">
            <h3>Tea Hous</h3>
            <p>Чай, оптом и в розницу</p>
          </div>
        </div>
        <div className="headerRight">
          <img src="/img/cart.svg" />
          <span>Корзина</span>
        </div>
      </header>
      <div className="content">
        <h1>Tea</h1>

        <div className="cards">
          <div className="card">
            <div className="cardImg">
              <img width={80} src="/img/icon-tea.png" alt="Tea" />
            </div>
            <p>Фруктовый чай - Бора Бора</p>
            <div className="cardButton">
              <b>150 руб</b>
              <button className="button">+</button>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img width={80} src="/img/icon-tea.png" alt="Tea" />
            </div>
            <p>Фруктовый чай - Бора Бора</p>
            <div className="cardButton">
              <b>150 руб</b>
              <button className="button">+</button>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img width={80} src="/img/icon-tea.png" alt="Tea" />
            </div>
            <p>Фруктовый чай - Бора Бора</p>
            <div className="cardButton">
              <b>150 руб</b>
              <button className="button">+</button>
            </div>
          </div>

          <div className="card">
            <div className="cardImg">
              <img width={80} src="/img/icon-tea.png" alt="Tea" />
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
