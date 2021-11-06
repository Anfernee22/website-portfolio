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
            <div className="burger-icon" >
                <i className={clicked.clicked ? 'fas fa-times' : 'fas fa-hamburger'} onClick={iconClicked}></i>
            </div>
            <div className={clicked.clicked ? 'nav-link-wrapper active' : 'nav-link-wrapper'}>
                <nav className="nav-links-container" >
                    <div className="links">
                        <Link to="/" className="nav-link" onClick={() => setClicked(!clicked)}>About</Link>
                        <Link to="/my-skills" className="nav-link" onClick={() => setClicked(!clicked)}>My Skills</Link>
                        <Link to="/projects" className="nav-link" onClick={() => setClicked(!clicked)}>Projects</Link>
                        <Link to="/contact-me" className="nav-link" onClick={() => setClicked(!clicked)}>Contact me</Link>
                    </div>
                    <div className="account-links">
                        <Link to='/github'  className="git-icon" onClick={() => setClicked(!clicked)}><i className="fab fa-github"></i><span>GitHub</span></Link>
                        <Link to="/linked-in" className="linkedIn-icon" onClick={() => setClicked(!clicked)}><i className="fab fa-linkedin"></i><span>Linked In</span></Link>
                    </div>
                </nav>
                <div className="copy-right">
                    <p>&copy; Luis Dev.</p>
                </div>
            </div>
        </div>
    )
}
export default NavBar;