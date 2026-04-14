function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by title or genre..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;