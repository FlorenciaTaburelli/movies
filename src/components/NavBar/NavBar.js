import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../img/logoHenry.png'
import { getMovies, resetMovies } from '../../actions';
import './Navbar.css';
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom';

export default function NavBar() {
   
    const [title, setTitle] = useState('')

    const dispatch = useDispatch()

  function handleReset(){
    console.log('reset')
    
    dispatch(resetMovies())
  }

  function  handleChange(e) {
        setTitle(e.target.value)
      }
     
  function  handleSubmit(e) {
        e.preventDefault()
        dispatch(getMovies(title))
        setTitle('')
      }

      
    return (
         
     <nav className="navbar navbar-expand-sm navbar-light">
        <Link to='/' onClick={handleReset}>
        <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
        </Link>

    <div className="navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <NavLink exact to="/"  onClick={handleReset} className="nav-link ">Home <span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/favs" className="nav-link">Favorites</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        </ul>

        <Route exact path='/'>
        <form className="form-inline my-2 my-lg-0" onSubmit={(e) => handleSubmit(e)}>
            <input
              className='form-control mr-sm-2 searchInput'
              placeholder="Titanic..."
              aria-label="Search"
              type="search"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => handleChange(e)}
            />
          <button 
          className='btn my-2 my-sm-0 boton'
          type="submit"
          >SEARCH</button>
        </form>
        </Route>
    </div>
</nav>
       
    )
}
