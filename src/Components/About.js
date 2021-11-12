import { Link } from "react-router-dom";
import '../Styles/About.css'
const Home = () => {
    return(
        <div className="about-wrapper">
            <div className="about-container">
                <div className="about">
                    <ul>
                        <li>Hello,</li>
                        <li>My name is</li>
                        <li>Luis Arias</li>
                        <li>I'm a self-taught developer</li>
                    </ul>
                </div>
                <div className="profile-container">
                    <div className="profile">
                        <div className="image">
                            <img src="portfolioimg.jpg" alt="portfolio" />
                        </div>
                        <span className="role">Front End Developer</span>
                        <div className="additional-info">
                            <p>I am here to help <span>designers</span>, <span>businesses</span> bring their <span>ideas and goals</span> to life. I am a good problem solver so don't wait and click on the button below to contact me!</p>
                        </div>
                        <div className="contact-btn">
                            <Link to='/contact-me' className="btn">Contact me</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Home;