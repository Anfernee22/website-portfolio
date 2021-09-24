import './/Styles/NavBar.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './Components/NavBar';
import About from './Components/About';
import MySkills from './Components/MySkills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Github from './Components/Github';
import LinkedIn from './Components/LinkedIn';
import Todo from './Components/Todo';
import ShoppingCart from './Components/ShoppingCart'
function App() {
  return (
    <Router>
      <div className='app-wrapper'>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={About}></Route>
          <Route path='/my-skills' component={MySkills}></Route>
          <Route path='/projects' component={Projects}></Route>
          <Route path="/contact-me" component={Contact}></Route>
          <Route path="/github" component={Github}></Route>
          <Route path="/linked-in" component={LinkedIn}></Route>
          <Route path="/todo" component={Todo}></Route>
          <Route path="/shopping-cart" component={ShoppingCart}></Route>
          <Route pah="/shopping-cart"></Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
