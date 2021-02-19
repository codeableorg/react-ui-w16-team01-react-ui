import "../stylesheets/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <i className="ri-search-line"></i>
      <input placeholder="Buscar" />
    </div>
  );
};

export default SearchBar;