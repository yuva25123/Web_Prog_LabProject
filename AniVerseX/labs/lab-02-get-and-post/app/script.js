const getForm = document.getElementById("getForm");
const postForm = document.getElementById("postForm");

const getPreview = document.getElementById("getPreview");
const postPreview = document.getElementById("postPreview");

function setError(id, message) {
  const errorNode = document.getElementById(id);
  errorNode.textContent = message;
}

function clearErrors(ids) {
  ids.forEach((id) => {
    document.getElementById(id).textContent = "";
  });
}

function showMessage(id, message, type) {
  const node = document.getElementById(id);
  node.textContent = message;
  node.className = `form-message ${type}`;
}

function clearMessage(id) {
  const node = document.getElementById(id);
  node.textContent = "";
  node.className = "form-message";
}

getForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("searchTitle").value.trim();
  const genre = document.getElementById("searchGenre").value.trim();

  clearErrors(["searchTitleError", "searchGenreError"]);
  clearMessage("getMessage");

  let isValid = true;
  if (!title) {
    setError("searchTitleError", "Please enter an anime title.");
    isValid = false;
  }
  if (!genre) {
    setError("searchGenreError", "Please enter a genre.");
    isValid = false;
  }

  if (!isValid) {
    showMessage("getMessage", "Please correct the highlighted fields.", "error");
    return;
  }

  const params = new URLSearchParams({ title, genre });
  const getUrl = `search.html?${params.toString()}`;
  getPreview.textContent = `GET ${getUrl}`;

  showMessage("getMessage", "GET request URL generated.", "success");
});

postForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("reviewerName").value.trim();
  const anime = document.getElementById("reviewAnime").value.trim();
  const rating = document.getElementById("reviewRating").value.trim();
  const review = document.getElementById("reviewText").value.trim();

  clearErrors(["reviewerNameError", "reviewAnimeError", "reviewRatingError", "reviewTextError"]);
  clearMessage("postMessage");

  let isValid = true;

  if (!name) {
    setError("reviewerNameError", "Reviewer name is required.");
    isValid = false;
  }
  if (!anime) {
    setError("reviewAnimeError", "Anime title is required.");
    isValid = false;
  }
  if (!rating) {
    setError("reviewRatingError", "Rating is required.");
    isValid = false;
  } else if (Number(rating) < 1 || Number(rating) > 5) {
    setError("reviewRatingError", "Rating must be between 1 and 5.");
    isValid = false;
  }
  if (!review) {
    setError("reviewTextError", "Review text cannot be empty.");
    isValid = false;
  }

  if (!isValid) {
    showMessage("postMessage", "Please correct the highlighted fields.", "error");
    return;
  }

  const postBody = {
    reviewerName: name,
    animeTitle: anime,
    rating: Number(rating),
    reviewText: review
  };

  postPreview.textContent = `POST /reviews\n${JSON.stringify(postBody, null, 2)}`;
  showMessage("postMessage", "POST request body generated.", "success");
});
