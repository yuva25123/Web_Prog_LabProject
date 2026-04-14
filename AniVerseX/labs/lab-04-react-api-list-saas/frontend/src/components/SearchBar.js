function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <label htmlFor="searchInput">Search by title or genre</label>
      <input
        id="searchInput"
        type="text"
        placeholder="Type to filter anime cards..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
