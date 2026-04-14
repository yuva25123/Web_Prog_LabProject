const animeData = [
  { id: 1, title: "Attack on Titan", genre: "Action", rating: 4.8 },
  { id: 2, title: "Demon Slayer", genre: "Adventure", rating: 4.6 },
  { id: 3, title: "Death Note", genre: "Thriller", rating: 4.9 },
  { id: 4, title: "Naruto", genre: "Shonen", rating: 4.4 },
  { id: 5, title: "One Punch Man", genre: "Comedy", rating: 4.3 }
];

function renderGenreOptions() {
  const genres = ["all", ...new Set(animeData.map((anime) => anime.genre))];
  const options = genres.map((genre) => `<option value="${genre}">${genre}</option>`);
  $("#genreFilter").html(options.join(""));
}

function renderAnimeCards(filteredList) {
  const cards = filteredList.map(
    (anime) => `
      <article class="anime-card" data-id="${anime.id}">
        <h3>${anime.title}</h3>
        <p class="anime-meta">${anime.genre} • ⭐ ${anime.rating}</p>
      </article>
    `
  );
  $("#animeGrid").html(cards.join(""));
}

function filterAnime() {
  const searchText = $("#searchInput").val().trim().toLowerCase();
  const genre = $("#genreFilter").val();

  const filtered = animeData.filter((anime) => {
    const matchesTitle = anime.title.toLowerCase().includes(searchText);
    const matchesGenre = genre === "all" || anime.genre === genre;
    return matchesTitle && matchesGenre;
  });

  renderAnimeCards(filtered);
}

function showMessage(selector, message, type) {
  $(selector).text(message).removeClass("success error").addClass(type);
}

$(document).ready(function () {
  renderGenreOptions();
  renderAnimeCards(animeData);

  // jQuery events: search, filter, show/hide.
  $("#searchInput").on("keyup", filterAnime);
  $("#genreFilter").on("change", filterAnime);
  $("#toggleTips").on("click", function () {
    $("#tipsBox").slideToggle(200);
    const label = $(this).text().includes("Show") ? "Hide Tips" : "Show Tips";
    $(this).text(label);
  });

  // jQuery effects on cards.
  $("#animeGrid").on("mouseenter", ".anime-card", function () {
    $(this).css("border-color", "rgba(34, 211, 238, 0.8)");
  });

  $("#animeGrid").on("mouseleave", ".anime-card", function () {
    $(this).css("border-color", "rgba(148, 163, 184, 0.25)");
  });

  // Click and double-click events.
  $("#animeGrid").on("click", ".anime-card", function () {
    $(".anime-card").removeClass("selected");
    $(this).addClass("selected");
  });

  $("#animeGrid").on("dblclick", ".anime-card", function () {
    $(this).toggleClass("favorite");
  });

  // Ajax: load anime list from local JSON file.
  $("#loadAnimeBtn").on("click", function () {
    showMessage("#ajaxMessage", "Loading anime via Ajax...", "success");
    $.getJSON("data/anime.json")
      .done(function (data) {
        const listItems = data.map(
          (anime) => `<li><strong>${anime.title}</strong> — ${anime.genre} (${anime.year})</li>`
        );
        $("#ajaxList").hide().html(listItems.join("")).fadeIn(200);
        showMessage("#ajaxMessage", "Anime loaded successfully.", "success");
      })
      .fail(function () {
        showMessage("#ajaxMessage", "Failed to load anime data.", "error");
      });
  });

  $("#clearAnimeBtn").on("click", function () {
    $("#ajaxList").fadeOut(150, function () {
      $(this).empty().show();
    });
    showMessage("#ajaxMessage", "Anime list cleared.", "success");
  });

  // Ajax simulation: submit review without page reload.
  $("#reviewForm").on("submit", function (event) {
    event.preventDefault();

    const name = $("#reviewerName").val().trim();
    const anime = $("#reviewAnime").val().trim();
    const review = $("#reviewText").val().trim();

    if (!name || !anime || !review) {
      showMessage("#reviewMessage", "Please fill all review fields.", "error");
      return;
    }

    showMessage("#reviewMessage", "Submitting review...", "success");

    // Simulated Ajax delay.
    setTimeout(function () {
      showMessage("#reviewMessage", "Review submitted successfully.", "success");
      $("#reviewForm")[0].reset();
    }, 600);
  });
});
