import React from 'react';
import HomePage from './Pages/PageInitial';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from "./Pages/PageAction";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/systemLibrary" element={<Services />} />
          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
