import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Regolamento from './pages/regolament/Regole';
import Newsletter from './pages/newsletter/news';
import RankingGenerale from './pages/Ranking/rank';
import Home from './pages/home/homepage';
import Allenatore from './pages/membri/allenatori';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fanta boh</h1>
        <p>Benvenuto nella tua lega privata!</p>

      <nav>
        <ul>
          <li><Link to="/ranking">Ranking</Link></li>
          <li><Link to="/newsletter">Newsletter</Link></li>
          <li><Link to="/regolamento">Regolamento</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      </header>

      <main>
        <Routes>
          <Route path="/regolamento" element={<Regolamento />} />
          <Route path="/newsletter" element={<Newsletter />} /> 
          <Route path="/ranking" element={<RankingGenerale />} />
          <Route path="/" element={<Home />} /> 
          <Route path="/allenatori/:id" element={<Allenatore />} />
        </Routes>
    </main>


      <footer>
        <p>&copy; {new Date().getFullYear()} Lega Fantacalcio | FantaItA</p>
      </footer>
    </div>
  );
}

export default App;
