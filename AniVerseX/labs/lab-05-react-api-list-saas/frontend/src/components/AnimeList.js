import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

function AnimeList() {
  const [anime, setAnime] = useState([]);
  const [search, setSearch] = useState("");

  const fetchAnime = () => {
    axios.get("http://localhost:5000/api/anime")
      .then((res) => setAnime(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAnime();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/anime/${id}`);
      fetchAnime();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="anime-container">
      <h1>AniVerseX 🎬</h1>

      <SearchBar setSearch={setSearch} />

      <div className="anime-grid">
        {anime
          .filter(
            (item) =>
              item.title.toLowerCase().includes(search.toLowerCase()) ||
              item.genre.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <div className="anime-card" key={item._id}>
              <img
                src={item.image}
                alt={item.title}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/200";
                }}
              />
              <h2>{item.title}</h2>
              <p><b>Genre:</b> {item.genre}</p>
              <p><b>Year:</b> {item.year}</p>
              <p><b>Rating:</b> ⭐ {item.rating}</p>
              <p>{item.description}</p>
              <p><b>Review:</b> {item.review}</p>

              <button onClick={() => handleDelete(item._id)}>
                Delete This Anime
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AnimeList;