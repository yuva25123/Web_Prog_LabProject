"use strict";

// JavaScript objects: each anime is a simple object with properties.
const animeList = [
  {
    id: 1,
    title: "Attack on Titan",
    genre: "Action",
    rating: 4.8,
    description: "Humanity fights Titans while uncovering hidden truths.",
    image: "images/aot.jpg",
    favorite: false,
    reviews: []
  },
  {
    id: 2,
    title: "Demon Slayer",
    genre: "Adventure",
    rating: 4.6,
    description: "A boy joins the Demon Slayer Corps to save his sister.",
    image: "images/demon_slayer.jpg",
    favorite: false,
    reviews: []
  },
  {
    id: 3,
    title: "Death Note",
    genre: "Thriller",
    rating: 4.9,
    description: "A student finds a notebook with deadly power.",
    image: "images/deathnote.jpg",
    favorite: false,
    reviews: []
  },
  {
    id: 4,
    title: "Naruto",
    genre: "Shonen",
    rating: 4.4,
    description: "A young ninja trains to protect his village.",
    image: "images/naruto.jpg",
    favorite: false,
    reviews: []
  },
  {
    id: 5,
    title: "One Punch Man",
    genre: "Comedy",
    rating: 4.3,
    description: "A hero defeats any enemy with a single punch.",
    image: "images/one_punch_man.jpg",
    favorite: false,
    reviews: []
  }
];

// DOM references.
const animeGrid = document.getElementById("animeGrid");
const hoverStatus = document.getElementById("hoverStatus");
const animeDetails = document.getElementById("animeDetails");
const reviewsList = document.getElementById("reviewsList");
const reviewsHeading = document.getElementById("reviewsHeading");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");

const reviewForm = document.getElementById("reviewForm");
const animeSelect = document.getElementById("animeSelect");
const ratingRange = document.getElementById("ratingRange");
const ratingValue = document.getElementById("ratingValue");
const reviewerName = document.getElementById("reviewerName");
const reviewText = document.getElementById("reviewText");
const resetBtn = document.getElementById("resetBtn");

let selectedAnimeId = animeList[0].id;

const renderGenreOptions = () => {
  const genres = ["all", ...new Set(animeList.map((anime) => anime.genre))];
  genreFilter.innerHTML = genres
    .map((genre) => `<option value="${genre}">${genre}</option>`)
    .join("");
};

const renderAnimeOptions = () => {
  animeSelect.innerHTML = animeList
    .map((anime) => `<option value="${anime.id}">${anime.title}</option>`)
    .join("");
};

const getFilteredAnime = () => {
  const searchValue = searchInput.value.trim().toLowerCase();
  const selectedGenre = genreFilter.value;

  return animeList.filter((anime) => {
    const matchesSearch = anime.title.toLowerCase().includes(searchValue);
    const matchesGenre = selectedGenre === "all" || anime.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });
};

const renderAnimeGrid = () => {
  const filteredAnime = getFilteredAnime();

  animeGrid.innerHTML = filteredAnime
    .map(
      (anime) => `
        <article class="anime-card ${anime.favorite ? "favorite" : ""}" data-id="${anime.id}">
          <img class="anime-poster" src="${anime.image}" alt="${anime.title}">
          <h3 class="anime-title">${anime.title}</h3>
          <p class="anime-meta">${anime.genre} • ⭐ ${anime.rating}</p>
        </article>
      `
    )
    .join("");
};

const getAnimeById = (id) => animeList.find((anime) => anime.id === id);

const renderAnimeDetails = () => {
  const anime = getAnimeById(selectedAnimeId);
  if (!anime) return;

  animeDetails.innerHTML = `
    <h2>${anime.title}</h2>
    <p><strong>Genre:</strong> ${anime.genre}</p>
    <p><strong>Rating:</strong> ⭐ ${anime.rating}</p>
    <p><strong>Description:</strong> ${anime.description}</p>
  `;

  renderReviews();
};

const renderReviews = () => {
  const anime = getAnimeById(selectedAnimeId);
  if (!anime) return;

  reviewsHeading.textContent = `Reviews (${anime.reviews.length})`;
  reviewsList.innerHTML = anime.reviews.length
    ? anime.reviews
        .map(
          (review) => `
            <article class="review-card">
              <p><strong>${review.name}</strong> rated <strong>${review.rating}/5</strong></p>
              <p>${review.text}</p>
            </article>
          `
        )
        .join("")
    : '<p class="empty-state">No reviews yet. Add the first one below.</p>';
};

const addReview = () => {
  const name = reviewerName.value.trim();
  const text = reviewText.value.trim();
  const rating = Number(ratingRange.value);

  if (!name || !text) {
    alert("Reviewer name and review text are required.");
    return;
  }

  const anime = getAnimeById(selectedAnimeId);
  if (!anime) return;

  anime.reviews.push({ name, text, rating });
  reviewText.value = "";
  renderReviews();
};

const resetForm = () => {
  reviewerName.value = "";
  reviewText.value = "";
  ratingRange.value = "3";
  ratingValue.textContent = "3";
};

// Events: keyup for search.
searchInput.addEventListener("keyup", renderAnimeGrid);

// Events: change for genre filter and select dropdown.
genreFilter.addEventListener("change", renderAnimeGrid);
animeSelect.addEventListener("change", (event) => {
  selectedAnimeId = Number(event.target.value);
  renderAnimeDetails();
});

// Events: click, dblclick, mouseover, mouseout on cards.
animeGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".anime-card");
  if (!card) return;
  selectedAnimeId = Number(card.dataset.id);
  renderAnimeDetails();
});

animeGrid.addEventListener("dblclick", (event) => {
  const card = event.target.closest(".anime-card");
  if (!card) return;
  const anime = getAnimeById(Number(card.dataset.id));
  anime.favorite = !anime.favorite;
  renderAnimeGrid();
});

animeGrid.addEventListener("mouseover", (event) => {
  const card = event.target.closest(".anime-card");
  if (!card) return;
  const anime = getAnimeById(Number(card.dataset.id));
  hoverStatus.textContent = `Hovering: ${anime.title} (${anime.genre})`;
});

animeGrid.addEventListener("mouseout", (event) => {
  const card = event.target.closest(".anime-card");
  if (!card) return;
  hoverStatus.textContent = "Hover over a card to see details";
});

// Event: submit for review form.
reviewForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addReview();
});

ratingRange.addEventListener("input", () => {
  ratingValue.textContent = ratingRange.value;
});

resetBtn.addEventListener("click", resetForm);

const init = () => {
  renderGenreOptions();
  renderAnimeOptions();
  animeSelect.value = String(selectedAnimeId);
  renderAnimeGrid();
  renderAnimeDetails();
};

init();
