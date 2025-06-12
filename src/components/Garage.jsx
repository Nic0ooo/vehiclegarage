import React, { useState } from 'react';
import Voiture from './Voiture';
import Camion from './Camion';
import Moto from './Moto';
import FormulaireVehicule from './FormulaireVehicule';

const Garage = () => {
  const [vehicules, setVehicules] = useState([
    {
      id: 1,
      type: 'voiture',
      marque: 'Toyota',
      annee: 2020,
      couleur: 'Rouge',
      nombrePortes: 4
    },
    {
      id: 2,
      type: 'camion',
      marque: 'Mercedes',
      annee: 2019,
      couleur: 'Bleu',
      capaciteChargement: 15
    },
    {
      id: 3,
      type: 'moto',
      marque: 'Yamaha',
      annee: 2021,
      couleur: 'Noir',
      cylindree: 600
    }
  ]);

  const ajouterVehicule = (nouveauVehicule) => {
    setVehicules([...vehicules, nouveauVehicule]);
  };

  const renderVehicule = (vehicule) => {
    const props = {
      marque: vehicule.marque,
      annee: vehicule.annee,
      couleur: vehicule.couleur
    };

    switch (vehicule.type) {
      case 'voiture':
        return <Voiture key={vehicule.id} {...props} nombrePortes={vehicule.nombrePortes} />;
      case 'camion':
        return <Camion key={vehicule.id} {...props} capaciteChargement={vehicule.capaciteChargement} />;
      case 'moto':
        return <Moto key={vehicule.id} {...props} cylindree={vehicule.cylindree} />;
      default:
        return null;
    }
  };

  return (
    <div className="garage">
      <h2>🏠 Mon Garage ({vehicules.length} véhicules)</h2>

      {vehicules.length === 0 ? (
        <p className="garage-vide">Le garage est vide. Ajoutez votre premier véhicule !</p>
      ) : (
        <div className="liste-vehicules">
          <h3>Véhicules dans le garage</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Marque</th>
                <th>Année</th>
                <th>Couleur</th>
                <th>Caractéristique</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {vehicules.map(renderVehicule)}
            </tbody>
          </table>
        </div>
      )}

      <FormulaireVehicule onAjouterVehicule={ajouterVehicule} />
    </div>
  );
};

export default Garage;
