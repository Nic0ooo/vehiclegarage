import React from 'react';

const Moto = ({ marque, annee, couleur, cylindree }) => {
  const afficherDetails = () => {
    return `Moto - ${marque} (${annee}) - Couleur: ${couleur} - Cylindrée: ${cylindree}cc`;
  };

  const klaxonner = () => {
    // Jouer le son
    const audio = new Audio('/src/assets/klaxon.wav');
    audio.play().catch(err => console.log('Erreur audio:', err));
    return "Beep beep !";
  };

  return (
    <tr>
      <td>Moto</td>
      <td>{marque}</td>
      <td>{annee}</td>
      <td>{couleur}</td>
      <td>{cylindree}cc</td>
      <td>
        <button 
            onClick={() => alert(klaxonner())}
            style={{ marginRight: '10px' }}
            >
          🏍️ Klaxonner
          
        </button>
        <button onClick={() => alert(afficherDetails())}>
          📋 Détails
        </button>
      </td>
    </tr>
  );
};

export default Moto;
