window.onload = () => {
  getOriginals();
  getTrendingNow();
  getTopRated();
  getAction();
};

function showMovies(movies, element_selector, path_type) {
  var moviesEl = document.querySelector(element_selector);
  for (var movie of movies.results) {
    var image = `
            <img src="https://image.tmdb.org/t/p/original${movie[path_type]}"></img>
        `;
    moviesEl.innerHTML += image;
  }
}

function fetchMovies(url, element_selector, path_type) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("something went wrong");
      }
    })
    .then((data) => {
      showMovies(data, element_selector, path_type);
    })
    .catch((error_data) => {
      console.log(error_data);
    });
}

function getOriginals() {
  var url =
    "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213";
  fetchMovies(url, ".original__movies", "poster_path");
}

function getTrendingNow() {
  var url =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045";
  fetchMovies(url, ".movies__containerTrending", "backdrop_path");
}
function getTopRated() {
  var url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1";
  fetchMovies(url, ".movies__containerRated", "backdrop_path");
}

function getAction() {
  var url = "";
  fetchMovies(url, ".movies__containerAction", "backdrop_path");
}

function getHorror() {
  var url = "";
  fetchMovies(url, ".movies__containerHorror", "backdrop_path");
}

function getSiFi() {
  var url = "";
  fetchMovies(url, ".movies__containerScienceFiction", "backdrop_path");
}

function getRomance() {
  var url = "";
  fetchMovies(url, ".movies__containerRomance", "backdrop_path");
}

function getComedies() {
  var url = "";
  fetchMovies(url, ".movies__containerComedies", "backdrop_path");
}

function getAnimation() {
  var url = "";
  fetchMovies(url, ".movies__containerAnimation", "backdrop_path");
}

function getDocumentaries() {
  var url = "";
  fetchMovies(url, ".movies__containerDocumentaries", "backdrop_path");
}

function getFantasy() {
  var url = "";
  fetchMovies(url, ".movies__containerFantasy", "backdrop_path");
}

function getThriller() {
  var url = "";
  fetchMovies(url, ".movies__containerThriller", "backdrop_path");
}
