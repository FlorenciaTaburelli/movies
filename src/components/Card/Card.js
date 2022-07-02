import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addMovieFavorite } from '../../actions/index'
import './Card.css'

function Card({id, poster, title }){

    const dispatch = useDispatch()

    return(

        <div className="card" style={{backgroundImage: `url(${poster})`}}>

            <div className="content">

                <h4 className="title">{title}</h4>

                <Link to={`/movie/${id}`}>
                <button className="btn">+info</button>
                </Link>

                <button className="btnRemove" 
                onClick={() => dispatch(addMovieFavorite({title, id, img: poster}))}>FAV</button>

            </div>

        </div>
    )
}

export default Card;