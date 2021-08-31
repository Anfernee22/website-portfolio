import './/Styles/NavBar.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './Components/NavBar';
import About from './Components/About';
import MySkills from './Components/MySkills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';





function App() {
  const URL = "https://github.com/"

  return (
    <Router>
      <div className='app-wrapper'>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={About}></Route>
          <Route path='/my-skills' component={MySkills}></Route>
          <Route path='/projects' component={Projects}></Route>
          <Route path="/contact-me" component={Contact}></Route>
          <Route component={URL}></Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
