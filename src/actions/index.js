
//// para traer todas las pelis del buscador , el payload es la lista de peliculas

export function getMovies(titulo){
     console.log(titulo)
    return function(dispatch) {
        //https://api.themoviedb.org/3/search/movie?api_key=5ddf4151e30a898c2392c112846b42d2&query=${titulo}
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=5ddf4151e30a898c2392c112846b42d2&query=${titulo}`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            dispatch({ type: "GET_MOVIES", payload: data.results });
          });
      };
}

// para traer la pelicula especifica que clickeamos, el peyload  son los detalles de la pelicula

export function getMovieDetail(id){
  console.log(id)
    return function(dispatch) {
        // return fetch(`http://www.omdbapi.com/?apikey=4d76b99f&i=${id}`)
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5ddf4151e30a898c2392c112846b42d2`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            dispatch({ type: "GET_MOVIE_DETAILS", payload: data});
          });
      };
}

export function getMoviesCarousel(id){
  //http://img.omdbapi.com/?apikey=f66cface&&i=${id}

    return function(dispatch) {
        return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=5ddf4151e30a898c2392c112846b42d2`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            dispatch({ type: "GET_MOVIES_CAROUSEL", payload: data.results});
          });
      };
}

// agrega la pelicula a favoritos a traves de un boton, el payload es el nombre de la pelicula
export function addMovieFavorite(payload){

    return { 
        type: "ADD_MOVIE_FAVORITE", 
        payload 
    }
}

/// elimina la pelicula a traves de un boton , el payload sera la pelicula a eliminar

export function removeMovieFavorite(id){
  console.log(id, 'actions')
    return { 
        type: "REMOVE_MOVIE_FAVORITE", 
        payload: id 
    }
}


export function removeMovie(){
    return{
        type: 'REMOVE_MOVIE'
    }
}

export function resetMovies(){
    console.log('actions reset')
    return{
        type: 'RESET_MOVIES'
    }
}