import React from 'react';
import HomePage from './Componentes/PageInitial';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page2 from "./Paginas/Page2";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/outraPagina" element={<Page2 />} />
          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
