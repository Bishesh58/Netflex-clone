
const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";
const baseURL = "https://api.themoviedb.org/3"


window.onload = () => {
  getOriginals();
  getTrendingNow();
  getTopRated();
  getAction();
  getHorror();
  getSiFi();
  getRomance();
  getComedies();
  getDocumentaries();
  getFantasy();
  getThriller();
  getWestern();
  getDrama();
  getMistery();
  getCrime();
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
    `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`;
  fetchMovies(url, ".original__movies", "poster_path");
}

function getTrendingNow() {
  var url =
    `${baseURL}/trending/movie/week?api_key=${API_KEY}`;
  fetchMovies(url, ".movies__containerTrending", "backdrop_path");
}
function getTopRated() {
  var url =
    `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  fetchMovies(url, ".movies__containerRated", "backdrop_path");
}



function getAction() {
  var url = `${baseURL}/discover/tv?api_key=${API_KEY}&with_genres=28`;
  fetchMovies(url, ".movies__containerAction", "backdrop_path");
}

function getHorror() {
  var url = `${baseURL}/discover/tv?api_key=${API_KEY}&with_genres=27`;
  fetchMovies(url, ".movies__containerHorror", "backdrop_path");
}

function getSiFi() {
  var url = `${baseURL}/discover/tv?api_key=${API_KEY}&with_genres=878`;
  fetchMovies(url, ".movies__containerSiFi", "backdrop_path");
}

function getRomance() {
  var url = `${baseURL}/discover/tv?api_key=${API_KEY}&with_genres=10749`;
  fetchMovies(url, ".movies__containerRomance", "backdrop_path");
}

function getComedies() {
  var url = `${baseURL}/discover/tv?api_key=${API_KEY}&with_genres=35`;
  fetchMovies(url, ".movies__containerComedies", "backdrop_path");
}

function getAnimation() {
  var url = `${baseURL}/discover/tv?api_key=${API_KEY}&with_genres=16`;
  fetchMovies(url, ".movies__containerAnimation", "backdrop_path");
}

function getMistery() {
  var url = `${baseURL}/discover/tv?api_key=${API_KEY}&with_genres=9648`;
  fetchMovies(url, ".movies__containerMistery", "backdrop_path");
}

function getDocumentaries() {
  var url =`${baseURL}/discover/tv?api_key=${API_KEY}&with_genres=99`;
  fetchMovies(url, ".movies__containerDocumentaries", "backdrop_path");
}

function getFantasy() {
  var url = `${baseURL}/discover/tv?api_key=${API_KEY}&with_genres=14`;
  fetchMovies(url, ".movies__containerFantasy", "backdrop_path");
}

function getThriller() {
  var url = `${baseURL}/discover/tv?api_key=${API_KEY}&with_genres=53`;
  fetchMovies(url, ".movies__containerThriller", "backdrop_path");
}

function getDrama() {
  var url = `${baseURL}/discover/tv?api_key=${API_KEY}&with_genres=18`;
  fetchMovies(url, ".movies__containerDrama", "backdrop_path");
}

function getWestern() {
  var url = `${baseURL}/discover/tv?api_key=${API_KEY}&with_genres=37`;
  fetchMovies(url, ".movies__containerWestern", "backdrop_path");
}

function getCrime() {
  var url = `${baseURL}/discover/tv?api_key=${API_KEY}&with_genres=80`;
  fetchMovies(url, ".movies__containerCrime", "backdrop_path");
}
