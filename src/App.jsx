import React from 'react'
import Garage from './components/Garage'
import './App.css'

function App() {
  return (
    <div className="app">
      <header>
        <h1>🚗 Système de Gestion de Véhicules</h1>
        <p>Gérez votre collection de voitures, camions et motos</p>
      </header>
      <main>
        <Garage />
      </main>
    </div>
  )
}

export default App
