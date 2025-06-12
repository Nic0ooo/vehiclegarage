# 🚗 Système de Gestion de Véhicules

Application React développée avec Vite pour gérer une collection de véhicules (voitures, camions, motos).

## 🎯 Fonctionnalités

- **Gestion de véhicules** : Voitures, camions et motos
- **Affichage en tableau** : Liste claire et organisée des véhicules
- **Formulaire d'ajout** : Ajouter dynamiquement de nouveaux véhicules
- **Actions interactives** : Boutons pour tester le klaxon de chaque véhicule
- **Rendu conditionnel** : Message affiché quand le garage est vide

## 🛠️ Architecture

### Composants principaux

1. **App.jsx** - Composant principal de l'application
2. **Garage.jsx** - Gère la collection de véhicules
3. **Vehicule.jsx** - Composant de base (peu utilisé directement)
4. **Voiture.jsx** - Composant spécialisé pour les voitures
5. **Camion.jsx** - Composant spécialisé pour les camions
6. **Moto.jsx** - Composant spécialisé pour les motos
7. **FormulaireVehicule.jsx** - Formulaire pour ajouter des véhicules

### Propriétés des véhicules

- **Communes** : marque, année, couleur
- **Spécifiques** :
  - Voiture : nombre de portes
  - Camion : capacité de chargement (tonnes)
  - Moto : cylindrée (cc)

## 🚀 Installation et lancement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build
```

## 📱 Utilisation

1. **Visualiser les véhicules** : Les véhicules existants s'affichent dans un tableau
2. **Ajouter un véhicule** : Utiliser le formulaire en bas de page
3. **Tester le klaxon** : Cliquer sur les boutons "Klaxonner" dans le tableau
4. **Voir tous les détails** : Utiliser le bouton "Afficher tous les détails"

## 🎨 Technologies utilisées

- **React 19** avec hooks (useState)
- **Vite** pour la configuration et le build
- **CSS3** pour le styling responsive
- **JavaScript ES6+**

## 📋 Bonnes pratiques mises en œuvre

- Composants fonctionnels avec hooks
- Props et state management
- Rendu conditionnel
- Gestion d'événements
- Formulaires contrôlés
- CSS modulaire et responsive+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
