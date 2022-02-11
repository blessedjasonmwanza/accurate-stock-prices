import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import StockDetails from './pages/StockDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/:company" element={<StockDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
