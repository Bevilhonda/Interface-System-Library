
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideMenu from "./Pages/SideMenu";
import Title from './Components/Title';

function App() {
  
  return (

    <Router>
      <div className="App">
       
        <Title />
        
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route path="/systemLibrary/" element={<SideMenu />} />
          
          

        </Routes>

      </div>
    </Router>
  );
}

export default App;
