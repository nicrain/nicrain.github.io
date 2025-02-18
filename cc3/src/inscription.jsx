import React from 'react';
import ReactDOM from 'react-dom';
import Inscription from "./Components/Inscription/inscription.jsx"; // Chemin vers votre composant Inscription
import Navbar from './Components/Navbar/Navbar';
import './index.css';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Inscription />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
