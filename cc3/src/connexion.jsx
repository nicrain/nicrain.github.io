import React from 'react';
import ReactDOM from 'react-dom';
import Connection from './Components/Connection/Connection'; // Importer l'élément BoutonFiltre correctement
import Navbar from './Components/Navbar/Navbar';
import './index.css';

const Connexion = () => {
    return (
      <div className='container'>
  
        <Navbar />
        <Connection />
      </div>
    )
  }


export default Connexion
ReactDOM.createRoot(document.getElementById('root')).render( // Rendre l'application ici
    <React.StrictMode>
        <Connexion />
    </React.StrictMode>
);
