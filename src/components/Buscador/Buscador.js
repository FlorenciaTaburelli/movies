import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies, addMovieFavorite } from '../../actions'
import '../Favorites/Favorites.css';
import arrow from '../../img/arrow.gif'
import Carrusel from "../Carrusel/Carrusel";
import Card from "../Card/Card";


class Buscador extends Component {

  handleClick(event){
    event.preventDefault()
    this.props.addMovieFavorite({title: this.props.peliculas.title, id: this.props.peliculas.id})
  }
  
  render() {
    
   if(this.props.peliculas.length === 0){
    return(
      <div className='no-movies'>
        {/* <img className="arrow" src={arrow}/> */}
        <h3 className='display-3'>Let's go find a movie!</h3>
        <Carrusel />
      </div>
      
    )
   }
    return (
      <div className="muestra">
        
          <ul>
            <main className="page-content">
              {this.props.peliculas && this.props.peliculas.map( pelicula => (
                <Card 
                key={pelicula.id}
                id={pelicula.id}
                poster={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                title={pelicula.title}
                />
                
              ))}
            </main>
          </ul>

      </div>
    );
  }
}
function mapStateToProps(state){
  console.log(state.moviesLoaded)
  return{
    peliculas: state.moviesLoaded,
    favoritas : state.moviesFavourites
  }
}

// function mapDispatchToProps(dispatch){  // el parametro dispatch es una funcion --> dispatch(...)  por parametro le pasamos que funcion quiere despachar(en este caso es getMovies(title), a la que le tenemos que pasar un titulo)
//   return {
//     getMovies: title => dispatch(getMovies(title))    /// la funcion mapDispatchToProps devuelve un objeto con las acciones que queremos despachar al store
//   }
// }


export default connect(mapStateToProps, { getMovies, addMovieFavorite })(Buscador)


