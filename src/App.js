// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import Main from './views/main'
import About from './views/about'
import Skills from './views/skills'
import Projects from './views/projects'
import Contact from './views/contact'
//Styling
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path ="/" component={Main} />
      <Route exact path ="/about" component={About} />
      <Route exact path ="/skills" component={Skills} />
      <Route exact path ="/projects" component={Projects} />
      <Route exact path ="/contact" component={Contact} />
    </Router>
  );
}

export default App;
