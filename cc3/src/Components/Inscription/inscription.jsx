import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js';
import { createUserWithEmailAndPassword, getAuth } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js';

import React, { useState } from 'react';

// Initialize Firebase app with your Firebase project configuration
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
const database = getDatabase(app);

const Inscription = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userId = user.uid;
        const userRef = ref(database, 'users/' + userId);
        const userData = {
          name: name,
          lastName: lastName,
          etablissement:'rien',
          is_pro:false
        };

        set(userRef, userData)
          .then(() => {
            alert("User created successfully!");
            window.location.href = "espace_personnel.html?name=" + encodeURIComponent(userData.name) + "&last_name=" + encodeURIComponent(userData.lastName);
          })
          .catch((error) => {
            alert("Error saving data: " + error.message);
          });
      })
      .catch((error) => {
        alert("Error creating user: " + error.message);
      });
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-14 text-center align-self-center py-10">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Crée un compte</h4>
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-style"
                            placeholder="Votre nom"
                            id="last_name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <i className="input-icon uil uil-user"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="text"
                            name="prenom"
                            className="form-style"
                            placeholder="Votre prénom"
                            id="name"
                            autoComplete="off"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="email"
                            name="email"
                            className="form-style"
                            placeholder="Your Email"
                            id="email"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            name="logpass"
                            className="form-style"
                            placeholder="Your Password"
                            id="password"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <button className="btn mt-4" onClick={handleSubmit}>Submit</button>
                        <p className="mb-0 mt-4 text-center"><a href="connexion.html" className="link">Vous avez déjà un compte?</a></p>
                        <p className="mb-0 mt-4 text-center"><a href="inscriptionPro.html" className="link">Vous êtes professionel dans la culture?</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
