const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=e83decef47fa422b5956db99c6c1f2d9&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=e83decef47fa422b5956db99c6c1f2d9&query='";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

getMovie(API_URL);

async function getMovie(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `     
          <img src="${IMG_PATH + poster_path}" alt="${title}" />
          <div class="movie_info">
            <h3>${title}</h3>
            <span class="${getClassByRating(
              vote_average
            )}">${vote_average}</span>
          </div>
          <div class="overview">
            <h3>Overview</h3>
            ${overview}
          </div>
       `;
    main.appendChild(movieEl);
  });
}
function getClassByRating(vote) {
  if (vote > 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
form.addEventListener("submit", (element) => {
  element.preventDefault();
  const searchItem = search.value;
  if (searchItem && searchItem !== "") {
    getMovie(SEARCH_API + searchItem);
    search.value = "";
  }
});
