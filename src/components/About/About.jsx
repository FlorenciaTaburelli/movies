import './About.css'
import {Link} from 'react-router-dom'
import javascript from '../../img/javascript.png'
import logoMovies from '../../img/logoHenry.png'
import reactLogo from '../../img/react.png'
import reduxLogo from '../../img/redux.png'
import htmlLogo from '../../img/html.png'
import cssLogo from '../../img/css.png'
import linkedin from '../../img/linkedin.png'
import githubLogo from '../../img/github.png'


function About() {
 
      return (
          <div className="about">
            <div className="header-about">
            <img src={logoMovies} alt='movies Logo' className='logo-movies'/>
              <div className='social'>
                <a className='social-lin' href='https://www.linkedin.com/in/florencia-taburelli/' target='_blank'><img src={linkedin} className='logos' alt='linkedin'/></a>
                <a className='social-git' href='https://github.com/FlorenciaTaburelli' target='_blank'><img src={githubLogo} className='logos' alt='Github'/></a>
              </div>
            </div>
            
            <div className='description'>
              <p> This project is part of a homework of the bootcamp <a href='https://twitter.com/soyhenry_ok?s=20&t=apgsMUtmxxKVPiwDgFXpKQ' target="_blank">@Henry</a>  based on movies. It's a catalog, that retrives data from API TheMovieDb. You can access to the details of each one, see the last releases, add movies to favourites, or search them by name. I used class components and for the styles a combination of CSS and Bootstrap. 
              </p>

            </div>
            

            <p> - Tecnologies -</p>
            <div className='front-end'>
            <div className='tecnologies'>
                <img className='logos'  src={javascript} alt='Javascript'/>
                <p className="textTool">Javascript</p>
              </div>
            
            <hr className='hr-tecnologies'/>
              
              <div className='tecnologies'>
                <img className='logos' src={reactLogo} alt='React'/>
                <p className="textTool">React</p>
              </div>
              
              <div className='tecnologies'>
                <img className='logos' src={reduxLogo} alt='Redux'/>
                <p className="textTool">Redux</p>
              </div>
              
              <div className='tecnologies'>
                <img className='logos' src={htmlLogo} alt='HTML'/>
                <p className="textTool">html</p>
              </div>
              
              <div className='tecnologies'>
                <img className='logos' src={cssLogo} alt='CSSmodules'/>
                <p className="textTool">css modules</p>
              </div>
              
             </div>

             <p className='dev-text'>Developed by Florencia Taburelli</p>
             
          </div>
        );
  
 

}

export default  About