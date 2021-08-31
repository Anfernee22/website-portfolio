import { Link } from "react-router-dom";
import '../Styles/NavBar.css'
import {useState} from 'react'

const NavBar = () => {
    const [clicked, setClicked] = useState({clicked: false})
    const iconClicked = () => setClicked({clicked: !clicked.clicked})

    return(
        <div className="navbar-wrapper">
            <div className="navbar-container">
                <div className="navbar-header">
                 <h1><span>L</span>A</h1>
                </div>
                <h3>Luis Arias</h3>
                <h4>Front End Developer</h4>
            </div>
            
            <div className="burger-icon" onClick={iconClicked}>
                <i className={clicked.clicked ? 'fas fa-times' : 'fas fa-hamburger'}></i>
            </div>
                
            <div className={clicked.clicked ? 'nav-link-wrapper active' : 'nav-link-wrapper'}>
                <nav className="nav-links-container">
                    <ul  onClick={() => setClicked(!clicked)}>
                        <Link className="nav-link" to="/"><li >About</li></Link>
                        <Link className="nav-link" to="/my-skills"><li>My Skills</li></Link>
                        <Link className="nav-link" to='/projects'><li>Projects</li></Link>
                        <Link className="nav-link" to="/contact-me"><li>Contact Me</li></Link>
                        
                        <div className="account-links">
                            <Link to='/'  className="git-icon"><i className="fab fa-github"></i><span>GitHub</span></Link>
                            <Link to="/" className="linkedIn-icon"><i className="fab fa-linkedin"></i><span>Linked In</span></Link>
                        </div>
                    </ul>
                </nav>
                <div className="copy-right">
                    <p>&copy; Luis Dev.</p>
                </div>
            </div>
        </div>
    )
}
export default NavBar;