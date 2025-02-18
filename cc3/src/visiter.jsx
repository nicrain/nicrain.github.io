import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import BoutonFiltre from './Components/boutonfiltre/BoutonFiltre'; // Importer l'élément BoutonFiltre correctement
import './index.css';

const Visiter = () => {
    return (
        <div className='container'>
            <BoutonFiltre /> {/* Utiliser BoutonFiltre ici */}
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render( // Rendre l'application ici
    <React.StrictMode>
        <App />
        <Visiter />
    </React.StrictMode>
);
