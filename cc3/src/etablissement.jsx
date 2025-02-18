import React from 'react';
import ReactDOM from 'react-dom';
import Etablissement from "./Components/Etablissement/etablissement.jsx"; // Chemin vers votre composant Inscription
import Navbar from './Components/Navbar/Navbar';
import './index.css';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Etablissement />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
