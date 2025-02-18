import React from 'react';
import ReactDOM from 'react-dom';
import ChatRoom from "./Components/Messagerie/Messagerie.jsx"; // Chemin vers votre composant Inscription
import Navbar from './Components/Navbar/Navbar';
import './index.css';

function App() {
    return (
      <div className="App">
        <Navbar />
        <h1>Simple Firebase Messaging App</h1>
        <ChatRoom />
      </div>
    );
  }

  

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
