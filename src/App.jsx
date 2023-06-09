import { useState } from 'react'
import PropTypes from 'prop-types';
import CharacterCard from './Componentes/CharacterCard';
import data from "./assets/data.json";
import './App.css'

function App() {

  const charters=data;
  
  return (
  
      <div className="app">
        <h1>Rick and Morty Characters</h1>
        <h2>Your code here</h2>  
        <div className="container">
          {charters.map((charter,index)=>{
            return <CharacterCard
            charter={charters}
            key={index}
            />
          })

          }
     </div>
      </div>
    )
};

export default App
