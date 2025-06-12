import React from 'react';

const Voiture = ({ marque, annee, couleur, nombrePortes }) => {
  const afficherDetails = () => {
    return `Voiture - ${marque} (${annee}) - Couleur: ${couleur} - Portes: ${nombrePortes}`;
  };

  const klaxonner = () => {
    // Jouer le son
    const audio = new Audio('/src/assets/klaxon.wav');
    audio.play().catch(err => console.log('Erreur audio:', err));
    return "Tut tut !";
  };

  return (
    <tr>
      <td>Voiture</td>
      <td>{marque}</td>
      <td>{annee}</td>
      <td>{couleur}</td>
      <td>{nombrePortes} portes</td>
      <td>
        <button 
            onClick={() => alert(klaxonner())}
            style={{ marginRight: '10px' }}
            >
          🚗 Klaxonner
        </button>
        <button onClick={() => alert(afficherDetails())}>
          📋 Détails
        </button>
      </td>
    </tr>
  );
};

export default Voiture;
