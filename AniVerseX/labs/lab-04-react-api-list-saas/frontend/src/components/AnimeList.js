function AnimeList({ anime, onDelete }) {
  return (
    <div className="anime-container">
      <h2>Anime List</h2>
      <div className="anime-grid">
        {anime.map((item) => (
          <article className="anime-card" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              onError={(event) => {
                event.target.src = "/images/one_punch_man.jpg";
              }}
            />
            <h3>{item.title}</h3>
            <p><strong>Genre:</strong> {item.genre}</p>
            <p><strong>Rating:</strong> ⭐ {item.rating}</p>
            <p className="description">{item.description}</p>
            <button className="btn ghost" onClick={() => onDelete(item.id)}>
              Remove
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default AnimeList;
