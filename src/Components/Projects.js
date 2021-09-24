import '../Styles/Projects.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [projectsSummary] = useState([
        {
            title: 'To-do App',
            listOne: 'Create own list',
            listTwo: 'List tracker',
            listThree: 'Remove list by clicking the delete button'
        },
        {
            title: 'Shopping Cart',
            listOne: 'Add items to the cart',
            listTwo: 'Increase or decrease items quantity',
            listThree: 'Remove items from cart'
        },
        {
            title: 'Piggy Bank',
            listOne: 'Create a new account',
            listTwo: 'Receive a $10 dollar reward after joining us',
            listThree: 'Get easy access to online banking'
        }
    ])

    console.log(projectsSummary)
return (
    <div className="summary-wrapper">
        <div className="summary-container">
            <div className="summary-header">
                <h2>Projects Summary:</h2>
            </div>

            {projectsSummary.map((one, index) => (
                <div className="projects-summary" key={index}>
                    <h3>{one.title}</h3>
                    <ul>
                        <li>{one.listOne}</li>
                        <li>{one.listTwo}</li>
                        <li>{one.listThree}</li>
                    </ul>
                    
                </div>
            ))}
        </div>
        <div className="break-line"></div>
        <div className="projects-container">
            <div className="projects-header">
                <h2>Projects:</h2>
            </div>

            <div className="todo-list-img images">
                <img src="todo-img.jpeg" alt="" />
                <div className="todo-button-container view-btn-container">
                    <Link to="/todo" className="view-code-btn">View Code</Link>
                </div>
            </div>

            <div className="shop-cart-img images">
                <img src="Shop-cart-img.jpeg" alt="" />
                <div className="cart-button-container view-btn-container">
                    <Link to="shopping-cart" className="view-code-btn">View Code</Link>
                </div>
            </div>

            <div className="piggy-bank-img images">
                <img src="piggy-bank-img.jpeg" alt="" />
                <div className="bank-button-container view-btn-container">
                    <Link className="view-code-btn">View Code</Link>
                </div>
            </div>

        </div>
    </div>

    )
}
export default Projects;