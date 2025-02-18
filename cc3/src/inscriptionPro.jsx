import React from 'react';
import ReactDOM from 'react-dom';
import InscriptionPro from "./Components/Inscription/inscriptionPro.jsx"; // Chemin vers votre composant Inscription
import Navbar from './Components/Navbar/Navbar';
import './index.css';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <InscriptionPro />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
