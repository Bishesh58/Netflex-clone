
const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";
const baseURL = "https://api.themoviedb.org/3"


window.onload = () => {
  getOriginals();
  getTrendingNow();
  getTopRated();
  fetchgenres();
};


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

function showMovies(movies, element_selector, path_type) {
  var moviesEl = document.querySelector(element_selector);
  for (var movie of movies.results) {
    var image = `
            <img src="https://image.tmdb.org/t/p/original${movie[path_type]}"></img>
        `;
    moviesEl.innerHTML += image;
  }
}


function getOriginals() {
  var url =
    `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`;
  fetchMovies(url, ".original__movies", "poster_path");
}

function getTrendingNow() {
  var url =
    `${baseURL}/trending/movie/week?api_key=${API_KEY}`;
  fetchMovies(url, ".movies__containerTrending", "poster_path");
}
function getTopRated() {
  var url =
    `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  fetchMovies(url, ".movies__containerRated", "poster_path");
}


fetchgenres =()=>{
  url = `${baseURL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  fetch(url)
  .then((response) =>{
    
    console.log(response.clone().json());
    return response.json();
  })
  .then((data) =>{
    showGenres(data);
  })
  .catch((err) =>{
    console.log(err);
  })
}

showGenres =(movies)=>{
movies.genres.map((genre) =>{
  let url = `${baseURL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre.id}`
  let movieName = genre.name.replace(/\s+/g, "");
  fetchMovies(url, `.movies__container${movieName}`, "poster_path")
 })
}
