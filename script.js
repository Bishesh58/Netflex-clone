
const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";
const baseURL = "https://api.themoviedb.org/3"


window.onload = () => {
  getOriginals();
  getTrendingNow();
  getTopRated();
  fetchgenres();
};


 fetchMovies =(url, element_selector, path_type)=> {
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

 showMovies =(movies, element_selector, path_type)=> {
  var moviesEl = document.querySelector(element_selector);
  for (var movie of movies.results) {
    var imageElement = document.createElement('img');
    imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`
    imageElement.setAttribute('data-id', movie.id);
    
    imageElement.addEventListener('click', (e) =>{
      handleMovieSelection(e)
    })

    moviesEl.appendChild(imageElement);
  }
}

 const handleMovieSelection =(e)=>{
   
  const id = e.target.getAttribute('data-id');
  const iframe = document.getElementById('movieTrailer');
  
  getMovieTrailer(id).then((data)=>{
   const results = data.results;
   
   const youtubeTrailers = results.filter((result)=>{
     if(result.site == "YouTube" && result.type == "Trailer"){
       return true;
     } else{
       return false;
     }
   })
   setTrailer(youtubeTrailers);
   
  })

  $('#trailer').modal('show');

  const closeButton = document.getElementById("close__button");
  closeButton.addEventListener("click", ()=>{
    iframe.src = iframe.src;
  })

  getMovieTrailer(id);
 }

async function getMovieTrailer(id){
  var url = `${baseURL}/movie/${id}/videos?api_key=${API_KEY}`

  return await fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("something went wrong");
    }
  })
  .catch((error_data) => {
    console.log(error_data);
  });
}

const setTrailer = (trailers)=>{
  const iframe = document.getElementById('movieTrailer');
  const movieNotFound = document.querySelector(".hide");
  if(trailers.length > 0 ){
    movieNotFound.classList.add('d-none')
    iframe.classList.remove('d-none');
    iframe.src = `https://www.youtube.com/embed/${trailers[0].key}`
  } else{
    iframe.classList.toggle('d-none');
    movieNotFound.classList.remove('d-none')
  }

}

 getOriginals =()=> {
  var url =
    `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`;
  fetchMovies(url, ".original__movies", "poster_path");
}

getTrendingNow =()=> {
  var url =
    `${baseURL}/trending/movie/week?api_key=${API_KEY}`;
  fetchMovies(url, ".trending__movies", "poster_path");
}

getTopRated =()=> {
  var url =
    `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  fetchMovies(url, ".topRated__movies", "poster_path");
}


fetchgenres =()=>{
  url = `${baseURL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  
  fetch(url)
  .then((response) =>{
    return response.json();
  })
  .then((data) =>{
    showGenres(data);
  })
  .catch((err) =>{
    console.log(err);
  })
}

showGenres =(data) =>{
 data.genres.map((genre) =>{

  let movies = fetchMoviesBasedOnGenres(genre.id)
    movies.then((movie)=>{
      showMoviesBasedOnGenres(genre.name, movie);
    })
 })
}

fetchMoviesBasedOnGenres =(genreId)=>{

  let url = `${baseURL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
  return fetch(url)
  .then((res)=>{
    return res.json();
  })
 }

 const showMoviesBasedOnGenres = (genreName, movie)=>{

  let moviesContainer = document.querySelector(".movies__container");
  
  let genreEl = document.createElement('div');
  genreEl.classList.add('movies__title');
  genreEl.innerHTML = `
    <h2>${genreName}</h2>
    `;
  let movieEl = document.createElement('div');
  movieEl.classList.add('genre__movies','scroll');
  movieEl.setAttribute('id', genreName);

  for (var movie of movie.results) {
    var imageElement = document.createElement('img');
    imageElement.src = `https://image.tmdb.org/t/p/original${movie["poster_path"]}`
    imageElement.setAttribute('data-id', movie.id);
    
    imageElement.addEventListener('click', (e) =>{
      handleMovieSelection(e)
    })

    movieEl.appendChild(imageElement);
  }

  moviesContainer.appendChild(genreEl);
  moviesContainer.appendChild(movieEl);

 }
