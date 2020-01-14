import React from 'react';

import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Shop from './components/Shop'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <About></About>
      <Shop></Shop>
    </div>
  );
}

export default App;
