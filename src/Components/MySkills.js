import '../Styles/MySkills.css'
import { useState } from 'react'
const MySkills = () => {
    const [skillsSummary] = useState([
        {
            one: 'Since the first step i took towards becoming a web developer, I\'ve become more passionate about it. I am a problem solver and love to help other achieve their goals.',
            two: 'I am proficient in front-end development, HTML5, CSS3, JavaScript and ReactJS, creating succesful responsive websites which are fast and easy to use.',
            three: 'Visit my LinkedIn profile for more details or just contact me.'
        }
    ]);
    const [mySkills] = useState([
        {
            HTML: 'HTML5',
            CSS3: 'CSS3',
            JavaScript: 'JavaScript',
            React: 'ReactJS'
        }
    ]);
    const [otherSkills] = useState([
        {
            otherSkillHeader: 'Additional Skills',
            one: 'Problem solving/decision making',
            two: 'Willingness to learn',
            three: 'Positive attitude',
            four: 'Communication',
            five: 'Responsible',
            six: 'TeamWork'
        }
    ]);
    return(
        <div className="skills-wrapper">
            <div className="skills-container">
                <div className="skills-header">
                    <h1>My skills: </h1>
                </div>
                {skillsSummary.map(el => (
                    <div className="skills-summary">
                        <p>{el.one}</p>
                        <p>{el.two}</p>
                        <p>{el.three}</p>
                    </div>
                ))}
                {mySkills.map(el => (
                    <div className="my-skills">
                        <ul>
                            <li>{el.HTML}</li>
                            <li>{el.CSS3}</li>
                            <li>{el.JavaScript}</li>
                            <li>{el.React}</li>
                        </ul>
                    </div>
                ))}
            </div>
            {otherSkills.map(el => (
                <div className="other-skills">
                    <div className="other-skills-header">
                        <h2>{el.otherSkillHeader}</h2>
                    </div>
                    <ul>
                        <li>{el.one}</li>
                        <li>{el.two}</li>
                        <li>{el.three}</li>
                        <li>{el.four}</li>
                        <li>{el.five}</li>
                        <li>{el.six}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}
export default  MySkills