import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './allenatori.css';
import datiRanking from '../Ranking/datiranking';

const Allenatore = () => {
  const { id } = useParams();
  const dati = datiRanking[parseInt(id)];

  if (!dati) {
    return <h2>Allenatore non trovato</h2>;
  }

  return (
    <div className="allenatore-container">
      <h1>{dati.nome}</h1>
      <h2>{dati.squadra}</h2>
      <h2>Punteggio Totale: {dati.punti} pt</h2>

      <section>
        <h3>🏁 Campionati</h3>
        <table>
          <thead>
            <tr>
              <th>Anno</th>
              <th>Posizione</th>
              <th>Punti</th>
            </tr>
          </thead>
          <tbody>
            {dati.campionati.map((c, i) => (
              <tr key={i}>
                <td>{c.anno}</td>
                <td>{c.posizione}</td>
                <td>{c.punti}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h3>🏆 Coppe & Premi</h3>
        {dati.coppe.length > 0 ? (
          <ul>
            {dati.coppe.map((c, i) => (
              <li key={i}>{c.anno}: {c.evento} – {c.punti} pt</li>
            ))}
          </ul>
        ) : (
          <p>Nessun premio registrato.</p>
        )}
      </section>

      <div style={{ marginTop: '20px' }}>
        <Link to="/ranking">← Torna alla classifica</Link>
      </div>
    </div>
  );
};

export default Allenatore;
