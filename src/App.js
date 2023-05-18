
function App() {
  return (
    <div className="wrapper">

      <div className="overlay">
        <div className="drawer">
          <h3>Корзина</h3>
          <div className="items">
          <div className="cartItem">
            <img width={70} height={70} src="./img/icon-tea.png" alt="Tea" />
            <div>
              <p>Фруктовый чай - Бора Бора</p>
              <b>150 руб</b>
            </div>
            <img className="removeBtn"  src="/img/btn-close.svg" alt="Remove" />
          </div>

          <div className="cartItem">
            <img width={70} height={70} src="./img/icon-tea.png" alt="Tea" />
            <div>
              <p>Фруктовый чай - Бора Бора</p>
              <b>150 руб</b>
            </div>
            <img className="removeBtn"  src="/img/btn-close.svg" alt="Remove" />
          </div>
          </div>
          <div className="cartTotal">
            <ul>
              <li>
                <span>Цена без скидки</span>
                <div></div>
                <b>300 руб.</b>
              </li>
              <li>
                <span>Скидка 5%</span>
                <div></div>
                <b>15 руб</b>
              </li>
              <li>
                <span>Итого</span>
                <div></div>
                <b>285,00 руб</b>
              </li>
              
            </ul>
            <button>Заказать</button>
          </div>
        </div>
      </div>

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
