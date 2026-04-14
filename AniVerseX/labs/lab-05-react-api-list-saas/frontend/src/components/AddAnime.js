import { useState } from "react";
import axios from "axios";

function AddAnime() {
  const [anime, setAnime] = useState({
    title: "",
    genre: "",
    description: "",
    image: "",
    year: "",
    rating: "",
    review: ""
  });

  const handleChange = (e) => {
    setAnime({ ...anime, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!anime.title || !anime.genre || !anime.year) {
    alert("Please fill required fields!");
    return;
  }

  if (anime.rating < 1 || anime.rating > 5) {
    alert("Rating must be between 1 and 5");
    return;
  }

  await axios.post("http://localhost:5000/api/anime", anime);

  alert("Anime added successfully!");

  setAnime({
    title: "",
    genre: "",
    description: "",
    image: "",
    year: "",
    rating: "",
    review: ""

  });

  window.location.reload();
};
    

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Anime</h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={anime.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={anime.genre}
        onChange={handleChange}
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={anime.description}
        onChange={handleChange}
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={anime.image}
        onChange={handleChange}
      />

      <input
        type="number"
        name="year"
        placeholder="Year"
        value={anime.year}
        onChange={handleChange}
      />

      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={anime.rating}
        onChange={handleChange}

      />
      <input
        type="text"
        name="review"
        placeholder="Review"
        value={anime.review}
        onChange={handleChange}
      />

      <button type="submit">Add Anime</button>
    </form>
  );
}

export default AddAnime;