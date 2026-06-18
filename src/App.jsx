import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import CyberBackground from './Components/CyberBackground';


function App() {

  

  return (
    <Router basename="/Portfolio-Yann-Monory>" >
        <CyberBackground/>
        <Routes>
          <Route path="/" element={<Projects />} />    
        </Routes>
      </Router>
  );
}

export default App;