import React from 'react';

import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Shop from './components/Shop'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    //everything that uses route functionality need to be put under this tag
    //what switch does is as soon as it matches first url it stops
    <Router>
      <div className="App">

      <Nav></Nav>
      
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/shop" exact component={Shop}/>

      </Switch>
      
    </div>

    </Router>
    
  );
}

function Home(){
  return(
    <div className="home">Home Page</div>
  )
}
export default App;
