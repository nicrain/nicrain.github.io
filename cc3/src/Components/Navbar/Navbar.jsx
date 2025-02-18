import React, { useState } from 'react';
import logo from '../../assets/192.png';
import loupe from '../../assets/loupe.png';
import { getLoggedInStatus, setLoggedInStatus } from '../../authUtils';
import { is_pro, setUserData } from '../../userdata';
import './Navbar.css';

const signOut = async () => {
    
      setLoggedInStatus(false);
      var nom=null;
      var last_name=null;
      var is_pro=null;
      var etablissement=null;
      setUserData(nom, last_name, is_pro, etablissement);
      window.location.reload(); // Mettre à jour l'état de connexion de l'utilisateur
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isUserLoggedIn = getLoggedInStatus(); // Correction ici
    const isPro = is_pro();
    console.log("c'est pro " + isPro + " "+ isUserLoggedIn);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        navbar(); // Appel de la fonction navbar() lorsque le menu est ouvert ou fermé
    };

    return (
        <div className={menuOpen ? 'navbarresponsive' : 'navbar'} id='myTopnav'>
            <img src={logo} alt='logo' className='logo'/>
            
            <ul>
                <li><a href='index.html'>Acceuil</a></li>
                <li><a href='visiter.html'>Visiter</a></li>
                <li><a href='whoweare.html'>A propos</a></li>
            </ul>
            <div className='search-box'>
                <input type="text" placeholder='Search'/>
                <img src={loupe} alt="loupe" className='loupe'/>
            </div>
            {isUserLoggedIn ? (
    isPro ? (
        <div className="dropdown">
            <button className="dropbtn">Mon Compte</button>
            <div className="dropdown-content">
                <a href="etablissement.html">Mon etablissement</a>
                <a href="">Mes évènements</a>
                <a href="#">Parametre</a>
                <a href="#" className="Deconnection" onClick={signOut}>Déconnexion</a>
            </div>
        </div>
    ) : (
        <div className="dropdown">
            <button className="dropbtn">Mon Compte</button>
            <div className="dropdown-content">
                <a href="messagerie.html">Messagerie</a>
                <a href="#">Favoris</a>
                <a href="#">Parametre</a>
                <a href="#" className="Deconnection" onClick={signOut}>Déconnexion</a>
            </div>
        </div>
    )
) : (
    <ul>
        <li className="connection">
            <a href="connexion.html">Se connecter</a>
        </li>
    </ul>
)}
            <a href="#" className="icon" onClick={toggleMenu}>
                <div className='menu-icon'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>
        </div>
    );
}

export default Navbar;
