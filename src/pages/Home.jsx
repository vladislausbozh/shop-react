import Card from "../components/Card";

const Home = ({
  items,
  isLoading,
  cartItems,
  searchValue,
  setSearchValue,
  onSearchInput,
  onAddToCart, }) => {

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item) => (
      <Card
        key={items.id}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };
  
  return (
    <div className="content">
      <div className="title">
        <h1>{searchValue ? `поиск по ${searchValue}` : "поиск по tea"}</h1>
        <div className="search">
          <img src="/img/search.svg" alt="search" />
          <input onChange={onSearchInput} value={searchValue} placeholder="Поиск" />
        </div>
      </div>

      <div className="cards">
        {renderItems()}
      </div>

    </div>
  )
}

export default Home;