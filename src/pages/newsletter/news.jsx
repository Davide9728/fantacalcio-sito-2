import React, { useState } from 'react';
import './news.css';

const Newsletter = () => {
  const [newsletterPosts, setNewsletterPosts] = useState([
    {
      date: '28 luglio 2025',
      text: 'Giornata intensa: sorprese in classifica, il mister dei Lupetti in polemica sul voto di Lukaku...',
    },
    {
      date: '21 luglio 2025',
      text: 'Partite equilibrate e punteggi bassi. Il mercato si è già riaperto per alcuni? Indagini in corso.',
    },
  ]);

  return (
    <div className="newsletter-container">
      <h1>📰 Newsletter Settimanale</h1>
      {newsletterPosts.map((post, index) => (
        <div key={index} className="newsletter-post">
          <h3>{post.date}</h3>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Newsletter;
