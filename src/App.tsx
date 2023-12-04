import React from 'react';
import Titulo from './Componentes/Titulo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page2 from "./Paginas/Page2";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Titulo />} />
          <Route path="/outraPagina" element={<Page2 />} />
          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
