
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Title from './Components/Title';

function App() {
  

  return (

    <Router>
      <div className="App">
       
        <Title />
        
        <Routes>
          
          <Route element={<HomePage />} path="/" />
          
          
          
        </Routes>

      </div>
    </Router>
  );
}

export default App;
