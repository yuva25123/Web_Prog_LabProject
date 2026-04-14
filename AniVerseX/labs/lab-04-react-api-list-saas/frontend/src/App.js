import "./App.css";
import { useState } from "react";
import AnimeList from "./components/AnimeList";
import AddAnime from "./components/AddAnime";
import SearchBar from "./components/SearchBar";

const initialAnime = [
  {
    id: 1,
    title: "Attack on Titan",
    genre: "Action",
    rating: 4.8,
    description: "Humanity fights Titans while uncovering secrets.",
    image: "/images/aot.jpg"
  },
  {
    id: 2,
    title: "Demon Slayer",
    genre: "Adventure",
    rating: 4.6,
    description: "A boy joins the Demon Slayer Corps to save his sister.",
    image: "/images/demon_slayer.jpg"
  },
  {
    id: 3,
    title: "Death Note",
    genre: "Thriller",
    rating: 4.9,
    description: "A student discovers a notebook with deadly power.",
    image: "/images/deathnote.jpg"
  }
];

function App() {
  const [animeList, setAnimeList] = useState(initialAnime);
  const [search, setSearch] = useState("");

  const addAnime = (newAnime) => {
    setAnimeList((prev) => [{ ...newAnime, id: Date.now() }, ...prev]);
  };

  const deleteAnime = (id) => {
    setAnimeList((prev) => prev.filter((anime) => anime.id !== id));
  };

  const filteredAnime = animeList.filter((item) => {
    const text = `${item.title} ${item.genre}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });

  return (
    <div className="page">
      <header className="hero">
        <div className="corner-meta">
          <p className="eyebrow">AniVerseX Lab 4</p>
          <p className="project-tag">Anime Recommendations and Reviews</p>
        </div>
        <h1>React Anime Recommendations</h1>
        <p className="hero-text">
          Add new anime, validate inputs, and render cards with React state.
        </p>
      </header>

      <section className="panel">
        <SearchBar search={search} setSearch={setSearch} />
      </section>

      <section className="panel">
        <AddAnime addAnime={addAnime} />
      </section>

      <section className="panel">
        <AnimeList anime={filteredAnime} onDelete={deleteAnime} />
      </section>
    </div>
  );
}

export default App;
