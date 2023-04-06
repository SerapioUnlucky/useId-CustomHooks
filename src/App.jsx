import React from 'react'
import './App.css'
import { Componente } from './components/Componente'
import { PruebasCustom } from './components/PruebasCustom'
import { Formulario } from './components/Formulario'
import { Usuario } from './components/Usuario'

function App() {
  return (
    <div className="App">
      
      {/* Hook de useId */}
      {/*
      <Componente/>
      */}
      
      {/* Custom hook de texto en mayusculas y minusculas */}
      {/*
      <PruebasCustom/>
      */}

      {/* Custom hook de formulario */}
      {/*
      <Formulario/>
      */}

      {/* Custom hook de peticiones */}
      <Usuario/>

    </div>
  )
}

export default App
