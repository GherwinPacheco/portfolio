import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './pages/Homepage';

const App = () => {

  return (
    
    <Router>
      <Routes>
        <Route element={ <Layout/> }>
          <Route path="/" element={ <Homepage/> } />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
