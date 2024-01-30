/*

- getOriginals()
  * URL : 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'

- getTrendingNow()
  * URL : 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'

- getTopRated()
  * URL : 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'

*/

window.onload = () => {
  getOriginals()
  getTrendingNow()
  getTopRated()
}

// Helper function that makes dynamic API calls 
function fetchMovies(url, dom_element, path_type) {  

  // Use Fetch with the url passed down 
  fetch(url)
  //do this after the promise is resolved
  .then(response => {
    //if status==200 i.e. ok=true
    if(response.ok){
      return response.json()
    }
    else{
      throw new Error('Something went wrong')
    }
  })
  .then(data =>{
    //objects or array of objects
    showMovies(data, dom_element, path_type)  
  })
  .catch(error => {
    console.log(error)
  })
}


// fetchMovies('https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213',
// '.original__movies', 'poster_path')

//Function that displays the movies to the DOM
showMovies = (movies, dom_element, path_type) => {
  
  // Create a variable 
  var movieElement = document.querySelector(dom_element)   //querySElector grabs the first instance of dom_element fro  html

  for(let movie of movies.results){

    let imageElement = document.createElement('img')

    imageElement.setAttribute('data-id', movie.id)

    //goes into the current movie object and sets source value as the path of specified type (dynamic)
    imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`

    //This will add each movie to the "original__movies" div and others
    movieElement.appendChild(imageElement)
  }

  }


//Function that fetches Netflix Originals
function getOriginals() {
  let url = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
  
  fetchMovies(url,'.original__movies', 'poster_path')
}

//Function that fetches Trending Movies
function getTrendingNow() {
  let url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'

  fetchMovies(url, '#trending', 'backdrop_path')
}
// Function that fetches Top Rated Movies 
function getTopRated() {
  let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'

  fetchMovies(url, '#top_rated', 'backdrop_path')
}

// ** BONUS **

// ** Fetches URL provided and returns response.json()
async function getMovieTrailer(id) {
  //URL: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`

}

// ** Function that adds movie data to the DOM
// const setTrailer = trailers => {
//   // Set up iframe variable to hold id of the movieTrailer Element
//   const iframe
//   // Set up variable to select .movieNotFound element
//   const movieNotFound

//   // If there is a trailer add the src for it
//   if (trailers.length > 0) {
//     // add d-none class to movieNotFound and remove it from iframe

//     // add youtube link with trailers key to iframe.src
//   } else {
//     // Else remove d-none class to movieNotfound and ADD it to iframe

//   }
// }




