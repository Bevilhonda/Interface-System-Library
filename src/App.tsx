import React from 'react';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideMenu from "./Pages/SideMenu";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/systemLibrary/" element={<SideMenu />} />
          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
