import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Blank } from 'pages/Blank.js';
import { Home } from 'pages/Home.js';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Blank/> } />
        <Route path="/home" element={ <Home/> } />
      </Routes>
    </Router>
  );
};

export default App;
