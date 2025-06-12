import React, { useState } from 'react';

const FormulaireVehicule = ({ onAjouterVehicule }) => {
  const [type, setType] = useState('voiture');
  const [marque, setMarque] = useState('');
  const [annee, setAnnee] = useState('');
  const [couleur, setCouleur] = useState('');
  const [caracteristique, setCaracteristique] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!marque || !annee || !couleur || !caracteristique) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    const nouveauVehicule = {
      id: Date.now(),
      type,
      marque,
      annee: parseInt(annee),
      couleur,
    };

    // Ajouter la caractéristique spécifique selon le type
    if (type === 'voiture') {
      nouveauVehicule.nombrePortes = parseInt(caracteristique);
    } else if (type === 'camion') {
      nouveauVehicule.capaciteChargement = parseInt(caracteristique);
    } else if (type === 'moto') {
      nouveauVehicule.cylindree = parseInt(caracteristique);
    }

    onAjouterVehicule(nouveauVehicule);
    
    // Réinitialiser le formulaire
    setMarque('');
    setAnnee('');
    setCouleur('');
    setCaracteristique('');
    
    alert('Véhicule ajouté avec succès !');
  };

  const getCaracteristiqueLabel = () => {
    switch (type) {
      case 'voiture':
        return 'Nombre de portes';
      case 'camion':
        return 'Capacité de chargement (tonnes)';
      case 'moto':
        return 'Cylindrée (cc)';
      default:
        return 'Caractéristique';
    }
  };

  return (
    <div className="formulaire">
      <h3>Ajouter un véhicule</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Type de véhicule :</label>
          <select 
            value={type} 
            onChange={(e) => setType(e.target.value)}
          >
            <option value="voiture">Voiture</option>
            <option value="camion">Camion</option>
            <option value="moto">Moto</option>
          </select>
        </div>

        <div>
          <label>Marque :</label>
          <input
            type="text"
            value={marque}
            onChange={(e) => setMarque(e.target.value)}
            placeholder="Ex: Toyota"
          />
        </div>

        <div>
          <label>Année :</label>
          <input
            type="number"
            value={annee}
            onChange={(e) => setAnnee(e.target.value)}
            placeholder="Ex: 2020"
            min="1900"
            max="2025"
          />
        </div>

        <div>
          <label>Couleur :</label>
          <input
            type="text"
            value={couleur}
            onChange={(e) => setCouleur(e.target.value)}
            placeholder="Ex: Rouge"
          />
        </div>

        <div>
          <label>{getCaracteristiqueLabel()} :</label>
          <input
            type="number"
            value={caracteristique}
            onChange={(e) => setCaracteristique(e.target.value)}
            placeholder={type === 'voiture' ? '4' : type === 'camion' ? '10' : '600'}
          />
        </div>

        <button type="submit">Ajouter le véhicule</button>
      </form>
    </div>
  );
};

export default FormulaireVehicule;
