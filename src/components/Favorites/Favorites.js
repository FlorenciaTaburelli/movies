import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {


      
  render() {

    return (
      <div className="container-favourites">
        <h2 className="display-4 h2-favourites">Favorites Movies</h2>
        <ul>
          {console.log(this.props.movies)}
            <main className="page-content">
              {this.props.movies && this.props.movies.map(movie => {
        
                  return(
                    <div className="card"  key={movie.id} style={{backgroundImage: `url(${movie.img})`}}>
                      
                        <div className="content">
                            <h4 className="title">{movie.title}</h4>

                            <Link to={`/movie/${movie.id}`}>
                            <button className="btn">+info</button>
                            </Link>

                            <button className="btnRemove" onClick={(e) => this.props.removeMovie(movie.id)}>Remove</button>
                    
                        </div>
                    </div>
                  )
                })}
            </main>
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state){
  return{
    movies: state.moviesFavourites
  }
}

function mapDispatchToProps(dispatch){
  return{
    removeMovie: id => dispatch(removeMovieFavorite(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList)


