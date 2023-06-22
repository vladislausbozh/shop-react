import Card from "../components/Card";

const Home = ({
   items,
   cartItems,
   searchValue,
   setSearchValue,
   onSearchInput,onAddToCart
}) => {
   return(
      <div className="content">
        <div className="title">
          <h1>{searchValue ? `поиск по ${searchValue}`: "поиск по tea"}</h1>
          <div className="search">
            <img src="/img/search.svg" alt="search" />
            <input onChange={onSearchInput} value={searchValue} placeholder="Поиск" />
          </div>
        </div>

        <div className="cards">
          {items.filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
            <Card
              key={item.id}
              added={cartItems.some(obj=>obj.id===item.id)}
              onPlus={(obj)=>onAddToCart(obj)}
              {...item}
            />
          ))}
        </div>

      </div>
   )
}

export default Home;