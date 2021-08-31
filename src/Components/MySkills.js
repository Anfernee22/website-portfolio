import '../Styles/MySkills.css'

const MySkills = () => {
    return(
        <div className="skills-wrapper">
            <div className="skills-container">
                <div className="skills-header">
                    <h1>My skills: </h1>
                 </div>

                <div className="skills-summary">
                    <p>Since the first step i took towards becoming a web developer, I've become more passionate about it. I am a problem solver and love to help other achieve their goals.</p>
                    <p>I am proficient in front-end development, HTML5, CSS3, JavaScript and ReactJS, creating succesful responsive websites which are fast and easy to use.</p>
                    <p>Visit my (LinkedIn) profile for more details or just (contact me).</p>
                </div>

                <div className="my-skills">
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                    </ul>
                </div>
            </div>

            
            <div className="other-skills">
                <div className="other-skills-header">
                    <h2>Additional Skills</h2>
                </div>
                <ul>
                    <li>Problem solving/decision making</li>
                    <li>Willingness to learn</li>
                    <li>Positive attitude</li>
                    <li>Communication</li>
                    <li>Responsible</li>
                    <li>Teamwork</li>
                </ul>
            </div>
        </div>
    )
}
export default  MySkills