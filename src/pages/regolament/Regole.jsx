import React from 'react';
import './Regole.css';

function Regolamento() {
  return (
    <div className="regolamento-container">
      <h1>Regolamento Ufficiale</h1>

      <div className="indice">
        <h2>Indice</h2>
        <ul>
          <li><a href="#iscrizione">1. Iscrizione</a></li>
          <li><a href="#formazioni">2. Formazioni</a></li>
          <li><a href="#punteggi">3. Sistema di punteggio</a></li>
          <li><a href="#mercato">4. Mercato</a></li>
          <li><a href="#altro">5. Norme aggiuntive</a></li>
        </ul>
      </div>

      <section id="iscrizione">
        <h2>1. Iscrizione</h2>
        <p>
          Ogni partecipante dovrà registrarsi prima della prima giornata.
          Il numero massimo di partecipanti è stabilito a inizio stagione.
        </p>
      </section>

      <section id="formazioni">
        <h2>2. Formazioni</h2>
        <p>
          Le formazioni devono essere inserite entro l’orario di inizio della prima partita della giornata.
          Se non viene inserita una formazione, verrà schierata l’ultima formazione valida.
        </p>
      </section>

      <section id="punteggi">
        <h2>3. Sistema di punteggio</h2>
        <p>
          Il punteggio totale deriva dalla somma dei voti dei titolari, modificatori e bonus/malus.
          In caso di parità, il risultato sarà un pareggio.
        </p>
      </section>

      <section id="mercato">
        <h2>4. Mercato</h2>
        <p>
          Il mercato si svolge in due fasi: iniziale (asta) e intermedia (scambi e svincoli).
          Gli scambi devono essere approvati da un amministratore.
        </p>
      </section>

      <section id="altro">
        <h2>5. Norme aggiuntive</h2>
        <p>
          In caso di partite sospese, si farà riferimento ai voti ufficiali comunicati entro 24h.
          Ogni altra situazione non prevista verrà valutata dagli amministratori.
        </p>
      </section>
    </div>
  );
}

export default Regolamento;
