import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Drink from './pages/Drink';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/drink' element={<Drink />} />
      </Routes>
    </Router>
  );
}

export default App;
