import React from 'react';

const Camion = ({ marque, annee, couleur, capaciteChargement }) => {
  const afficherDetails = () => {
    return `Camion - ${marque} (${annee}) - Couleur: ${couleur} - Capacité: ${capaciteChargement}t`;
  };

  const klaxonner = () => {
    // Jouer le son
    const audio = new Audio('/src/assets/klaxon.wav');
    audio.play().catch(err => console.log('Erreur audio:', err));
    return "HOOOONK !";
  };

return (
    <tr>
        <td>Camion</td>
        <td>{marque}</td>
        <td>{annee}</td>
        <td>{couleur}</td>
        <td>{capaciteChargement}t de charge</td>
        <td>
            <button 
                onClick={() => alert(klaxonner())}
                style={{ marginRight: '10px' }}
            >
                🚛 Klaxonner
            </button>
            <button onClick={() => alert(afficherDetails())}>
                📋 Détails
            </button>
        </td>
    </tr>
);
};

export default Camion;
