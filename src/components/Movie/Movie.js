import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail, removeMovie, addMovieFavorite, removeMovieFavorite } from '../../actions/index';
import img from '../../img/imdb-logo.png'
import './Movie.css';
import heart from '../../img/heart.png'


class Movie extends React.Component {


    

    componentDidMount(){
        this.props.removeMovie()
        const id = this.props.match.params.id
        this.props.getMovieDetail(id)
    }
 
    render() {

       
    
            return (
            
                    <div className="movie-detail">
                    
                        <div className='left'>
                        <img src={`https://image.tmdb.org/t/p/w400${this.props.pelicula.poster_path}`} alt={this.props.pelicula.title}/> 
                        </div>

                        <div className='right'>
                          {this.props.favorites.find(movie => movie.id === this.props.pelicula.id) ? 
                            <button 
                            
                            className='btn bottom-like'
                            onClick={() => this.props.removeMovieFavorite(this.props.pelicula.id) }
                            >Remove  <img className='heart-img' src={heart} alt='heart' /></button>
                          : <button 
                            className='btn bottom-like'
                            onClick={() => this.props.addMovieFavorite({title: this.props.pelicula.title, id: this.props.pelicula.id, img: `https://image.tmdb.org/t/p/w400${this.props.pelicula.poster_path}`})}
                            >Add to fav <img className='heart-img' src={heart} alt='heart' /></button>}
                            
                            <h2>{this.props.pelicula.title}</h2>
                            <img src={img} alt='imdb-logo'className='logoImdb mr-2'/><span><b>Popularity : </b>{this.props.pelicula.popularity}</span>
                            <hr></hr>
                            <p><b>Date release: </b>{this.props.pelicula.release_date}</p>
                            {/* <p><b>Genre: </b>{this.props.pelicula.genres[0].name}</p> */}
                            <p>{this.props.pelicula.overview}</p>
                            {/* <p><b>Actors: </b>{this.props.pelicula.Actors}</p>
                            <p><b>Director: </b>{this.props.pelicula.Director}</p> */}

                            
                        </div>

                    </div>    
            )
        
    }
}

function mapStateToProps(state){
    return{
      pelicula: state.movieDetail,
      favorites: state.moviesFavourites
    }
  }

function mapDispatchToProps(dispatch){
    return {
        addMovieFavorite: (title, id, img) => dispatch(addMovieFavorite(title, id, img)),
        getMovieDetail: id => dispatch(getMovieDetail(id)),
        removeMovie: () => dispatch(removeMovie()),
        removeMovieFavorite: (id) => dispatch(removeMovieFavorite(id))
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Movie)