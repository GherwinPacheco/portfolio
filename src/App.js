import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Blank } from './pages/Blank';
import { Homepage } from './pages/Homepage';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Blank/> } />
        <Route path="/home" element={ <Homepage/> } />
      </Routes>
    </Router>
  );
};

export default App;
