

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {},
    moviesCarousel1: []
  };


  function rootReducer(state = initialState, action){
  
      switch (action.type){
       
            case "GET_MOVIES":
                return{
                    ...state,
                    moviesLoaded: action.payload
                }
            case "GET_MOVIE_DETAILS": 
                return{
                    ...state,
                    movieDetail: action.payload
                }
            case 'GET_MOVIES_CAROUSEL':
            return{
                ...state,
                moviesCarousel: action.payload
            }
            case "ADD_MOVIE_FAVORITE":
                return{
                    ...state,
                    moviesFavourites: [...state.moviesFavourites, action.payload]
                }
            case "REMOVE_MOVIE_FAVORITE" :
                return{
                    ...state,
                    moviesFavourites: state.moviesFavourites.filter(movie => movie.id !== action.payload)
                }
            
            case 'REMOVE_MOVIE':
                return{
                    ...state,
                    movieDetail: {}
                }
            case 'RESET_MOVIES':
                return{
                    ...state,
                    moviesLoaded: []
                }

            default: return {...state}
      
     }
  }
 //       if (action.type === "ADD_MOVIE_FAVORITE") {
    //         return {
    //           ...state,
    //           moviesFavourites: state.moviesFavourites.concat(action.payload)
    //         }
    //     }
    //     if (action.type === "GET_MOVIES") {
    //         return {
    //           ...state,
    //           moviesLoaded: action.payload.Search
    //         };
    //     }
    //     return state;
    //   }
  export default rootReducer;