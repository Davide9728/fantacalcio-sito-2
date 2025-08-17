import React from 'react';
import './rank.css';
import { Link } from 'react-router-dom';
import datiRanking from './datiranking';

const RankingGenerale = () => {
  return (
    <div className="ranking-generale-container">
      <h1>🏅 Ranking Generale</h1>

      <h2>Classifica Attuale</h2>
      <table className="ranking-tabella">
        <thead>
          <tr>
            <th>#</th>
            <th>Allenatore</th>
            <th>Punti Totali</th>
          </tr>
        </thead>
        <tbody>
          {datiRanking
            .sort((a, b) => b.punti - a.punti)
            .map((giocatore, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                    <Link to={`/allenatori/${index}`}>{giocatore.nome}</Link>
                </td>
                <td>{giocatore.punti}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <h2>Sistema Punteggio</h2>
      <ul className="sistema-punteggio">
        <li>1° posto campionato: 100 pt</li>
        <li>2° posto: 70 pt</li>
        <li>3° posto: 50 pt</li>
        <li>4° posto: 30 pt</li>
        <li>5° posto: 20 pt</li>
        <li>Dal 6° in poi: 10 pt</li>
        <li>Vittoria Coppa: 50 pt</li>
        <li>Finalista Coppa: 30 pt</li>
        <li>Miglior giornata: 10 pt</li>
        <li>Supercoppa: 20 pt</li>
        <li>MVP: 10 pt</li>
      </ul>
    </div>
  );
};

export default RankingGenerale;


