import { useState } from "react";

const initialForm = {
  title: "",
  genre: "",
  rating: "",
  description: "",
  image: ""
};

function AddAnime({ addAnime }) {
  const [anime, setAnime] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setAnime({ ...anime, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!anime.title.trim()) newErrors.title = "Title is required.";
    if (!anime.genre.trim()) newErrors.genre = "Genre is required.";
    if (!anime.description.trim()) newErrors.description = "Description is required.";
    if (!anime.rating) newErrors.rating = "Rating is required.";
    if (anime.rating && (Number(anime.rating) < 1 || Number(anime.rating) > 5)) {
      newErrors.rating = "Rating must be between 1 and 5.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("");

    if (!validateForm()) return;

    addAnime({
      title: anime.title.trim(),
      genre: anime.genre.trim(),
      rating: Number(anime.rating),
      description: anime.description.trim(),
      image: anime.image.trim() || "/images/one_punch_man.jpg"
    });

    setAnime(initialForm);
    setErrors({});
    setMessage("Anime added successfully.");
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <h2>Add Anime</h2>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        name="title"
        placeholder="Eg: Jujutsu Kaisen"
        value={anime.title}
        onChange={handleChange}
      />
      {errors.title && <p className="error">{errors.title}</p>}

      <label htmlFor="genre">Genre</label>
      <input
        id="genre"
        type="text"
        name="genre"
        placeholder="Eg: Action"
        value={anime.genre}
        onChange={handleChange}
      />
      {errors.genre && <p className="error">{errors.genre}</p>}

      <label htmlFor="rating">Rating (1 to 5)</label>
      <input
        id="rating"
        type="number"
        name="rating"
        placeholder="4.5"
        value={anime.rating}
        onChange={handleChange}
      />
      {errors.rating && <p className="error">{errors.rating}</p>}

      <label htmlFor="description">Short Description</label>
      <textarea
        id="description"
        name="description"
        rows="3"
        placeholder="Write a spoiler-free summary"
        value={anime.description}
        onChange={handleChange}
      />
      {errors.description && <p className="error">{errors.description}</p>}

      <label htmlFor="image">Image URL (optional)</label>
      <input
        id="image"
        type="text"
        name="image"
        placeholder="https://..."
        value={anime.image}
        onChange={handleChange}
      />

      <button type="submit" className="btn">Add Anime</button>
      {message && <p className="success">{message}</p>}
    </form>
  );
}

export default AddAnime;
