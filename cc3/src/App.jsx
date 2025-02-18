import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js';
import Acceuil1 from './Components/Acceuil1/Acceuil1';
import AcceuilConnectedUser from './Components/AcceuilConnectedUser/AcceuilConnectedUser';
import Navbar from './Components/Navbar/Navbar';
import { getLoggedInStatus } from './authUtils';

import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js';
import React from 'react';
// import { isUserPro } from "../../gettypeuser";
//import { getUserData } from "../Connection/Connection";

const firebaseConfig = { 
  apiKey: "AIzaSyDrUZ7SdmGYarxvIN7ikrUr5AzKeDIScW8",
  authDomain: "cultureapp-a1c9c.firebaseapp.com",
  databaseURL: "https://cultureapp-a1c9c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cultureapp-a1c9c",
  storageBucket: "cultureapp-a1c9c.appspot.com",
  messagingSenderId: "885088600367",
  appId: "1:885088600367:web:2b5d6f33e92435849fe1da",
  measurementId: "G-PQ7DPJJJFT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const App = () => {
  const isUserLoggedIn = getLoggedInStatus();
  return (
    <div className='container'>

      <Navbar/>
      {isUserLoggedIn?
      <AcceuilConnectedUser />:
      <Acceuil1 />
      

      }
    </div>
  )
}
export default App