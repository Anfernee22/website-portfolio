import { Link } from "react-router-dom";
import '../Styles/About.css'

const Home = () => {
    return(
        <div className="about-wrapper">
            <div className="left-pattern">
                <p>Code can't lie, Comments can</p>
                <p>Talk is cheap, show me the code</p>
                <p>Things aren't always #000 and #FFF</p>
            </div>
            <div className="about-container">
               <h1>My name is <span>Luis Arias</span></h1>
               <h4>Front End Developer</h4>
               <p>I am here to help <span>designers</span>, <span>businesses</span> bring their <span>ideas and goals</span> to life. I am a good problem solver so don't wait and click on the button below to contact me!</p>
               <i className="fas fa-arrow-down"></i>
                <button><Link className="contact-me" to="/contact-me">Contact me</Link></button>
            </div>
            <div className="right-pattern">
                <p>Think twice code once.</p>
                <p>First solve the problem</p>
                <p>Then, write the code.</p>
                   
            </div>
        </div>
    )
}
export default Home;