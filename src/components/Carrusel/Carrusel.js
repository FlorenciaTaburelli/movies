
import './Carrusel.css'
import Carousel from 'react-bootstrap/Carousel'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {  getMoviesCarousel } from "../../actions/index"
import { Link } from 'react-router-dom';

function Carrusel(){
    const dispatch = useDispatch();
    const moviesCarousel = useSelector(state => state.moviesCarousel)

    const [idMovie, setIdMovie] = useState(0)
  
    // function handleLink(id){
    //   //https://api.themoviedb.org/3/movie/667739?api_key=5ddf4151e30a898c2392c112846b42d2
    //   fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5ddf4151e30a898c2392c112846b42d2`)
    //       .then(response => response.json())
    //       .then(data => {
    //         console.log(data.imdb_id)
    //         setIdMovie(data.imdb_id)
    //       });
    // }
    
    useEffect(() =>{
      dispatch(getMoviesCarousel()) 
    },[]);

    return(
    <div className="container-carousel">
        <Carousel>
          <Carousel.Item >
          <div className="img-container" >
            {moviesCarousel  && moviesCarousel.slice(0, 5).map(movie => {
                return (
                  <Link key={movie.id} to={`/movie/${movie.id}`} className="w-100" >
                            <img
                            className="d-block w-100"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt="First slide"
                            />
                  </Link>
                )
            })}
            </div>
         </Carousel.Item>
        <Carousel.Item>
        <div className="img-container">
        {moviesCarousel  && moviesCarousel.slice(5, 10).map(movie => {
                return (
                  <Link key={movie.id} to={`/movie/${movie.id}`} className="w-100" >
                            <img
                            key={movie.id}
                            className="d-block w-100"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt="First slide"
                            />
                  </Link>
                )
            })}
        </div>
          
        </Carousel.Item>
        <Carousel.Item>
        <div className="img-container">
        {moviesCarousel  && moviesCarousel.slice(10, 15).map(movie => {
                return (
                  <Link key={movie.id} to={`/movie/${movie.id}`} className="w-100" >
                            <img
                            key={movie.id}
                            className="d-block w-100"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt="First slide"
                            />
                  </Link>
                )
            })}
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="img-container">
        {moviesCarousel  && moviesCarousel.slice(15, 20).map(movie => {
                return (
                  <Link key={movie.id} to={`/movie/${movie.id}`} className="w-100" >
                            <img
                            key={movie.id}
                            className="d-block w-100"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt="First slide"
                            />
                  </Link>
                )
            })}
        </div>
        </Carousel.Item>
      </Carousel>
    </div>
        
    )
}

export default Carrusel;