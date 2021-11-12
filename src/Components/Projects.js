import '../Styles/Projects.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Projects = () => {
    const [projectsSummary] = useState([
        {
            title: 'To-do App',
            img: 'todo-img.jpeg',
            listOne: 'Create own list',
            listTwo: 'List tracker',
            listThree: 'Remove list by clicking the delete button'
        },
        {
            title: 'Shopping Cart',
            img: 'Shop-cart-img.jpeg',
            listOne: 'Add items to the cart',
            listTwo: 'Increase or decrease items quantity',
            listThree: 'Remove items from cart'
        },
        {
            title: 'Information Card',
            img: 'info-card.jpeg',
            listOne: 'Enter full information about yourself',
            listTwo: 'Choose a picture from your computer file',
            listThree: 'View your information when click on your name'
        },
    ])
    return (
        <div className="summary-wrapper">
            <div className="summary-container">
                <div className="projects-header">
                    <h2>Projects:</h2>
                </div>
                <div className="projects-container">
                    <div className="main-box todo-wrapper">
                        <span className="pop-up">To-do List</span>
                        <div className="box todo-container">
                            <div className="projects-img list-img">
                                <img src={projectsSummary[0].img} alt={projectsSummary[0].title} />
                            </div>
                            <div className="projects-summary list-summary ">
                                <ul>
                                    <span>To-do List</span>
                                    <li>{projectsSummary[0].listOne}</li>
                                    <li>{projectsSummary[0].listTwo}</li>
                                    <li>{projectsSummary[0].listThree}</li>
                                </ul>
                                <div className="btn-container">
                                    <Link to="/todo"className="code-btn">View Code</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-wrapper main-box">
                        <span className="pop-up">Shopping Cart</span>
                        <div className="cart-container box">
                            <div className="list-img projects-img">
                                <img src={projectsSummary[1].img} alt={projectsSummary[1].title}  />
                            </div>
                            <div className="projects-summary list-summary">
                                <ul>
                                    <span>Shopping Cart</span>
                                    <li>{projectsSummary[1].listOne}</li>
                                    <li>{projectsSummary[1].listTwo}</li>
                                    <li>{projectsSummary[1].listThree}</li>
                                </ul>
                                <div className="btn-container">
                                    <Link to="/shopping-cart" className="code-btn">View Code</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info-card-wrapper main-box">
                        <span className="pop-up">Information Card</span>
                        <div className="info-card-container box">
                            <div className="list-img projects-img">
                                <img src={projectsSummary[2].img} alt={projectsSummary[2].title}  />
                            </div>
                            <div className="projects-summary list-summary">
                                <ul>
                                    <span>Infomation Card</span>
                                    <li>{projectsSummary[2].listOne}</li>
                                    <li>{projectsSummary[2].listTwo}</li>
                                    <li>{projectsSummary[2].listThree}</li>
                                </ul>
                                <div className="btn-container">
                                    <Link to="/info-card" className="code-btn">View Code</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;