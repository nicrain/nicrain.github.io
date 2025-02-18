import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js';
import { get, getDatabase, ref } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js';
import BrickLayout from '../BrickLayout/BrickLayout';


import React, { useEffect, useState } from 'react';
import { setLoggedInStatus } from '../../authUtils';
import { setUserData } from '../../userdata';


import './Connection.css';

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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null); // Ajout du state pour stocker l'utilisateur
 
  useEffect(() => {
    // Chargement du script Bootstrap
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    script.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const getUserData = async (user) => {
    const database = getDatabase(app); // 'app' est votre instance Firebase initialisée

    const { uid } = user;

    try {
        const nameRef = ref(database, 'users/' + uid + '/name');
        const lastNameRef = ref(database, 'users/' + uid + '/lastName');
        const isProRef = ref(database, 'users/' + uid + '/is_pro');
        const etablissementRef = ref(database, 'users/' + uid + '/etablissement');

        const nameSnapshot = await get(nameRef);
        const lastNameSnapshot = await get(lastNameRef);
        const isProSnapshot = await get(isProRef);
        const etablissementSnapshot = await get(etablissementRef);

        const nom = nameSnapshot.val();
        const last_name = lastNameSnapshot.val();
        const is_pro = isProSnapshot.val();
        const etablissement = etablissementSnapshot.val();

        console.log('Nom:', nom);
        console.log('Last Name:', last_name);
        console.log('Is Pro:', is_pro);
        console.log('Etablissement:', etablissement);

        setUserData(nom, last_name, is_pro, etablissement,uid);
    } catch (error) {
        console.error('Error getting user data:', error);
    }
};

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const loggedInUser = userCredential.user;
      setUser(loggedInUser); // Mettre à jour l'utilisateur connecté
      setLoggedInStatus(true);
      getUserData(user);
      
      setMessage(`Bonjour ${loggedInUser.email}, vous êtes connecté.`);
    } catch (error) {
      setMessage('Mot de passe incorrect.');
    }
  };

  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">

            <div className="px-5 ms-xl-4">
              {/* <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style="color: #709085;"></i> */}
              <span className="h1 fw-bold mb-0">Logo</span>
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

              <form className="form">
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    name="mail"
                    className="form-control form-control-lg"
                    placeholder="Your Email"
                    id="mail"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                  <label className="form-label" for="form2Example18">Email address</label>
                </div>
                {/* <i classNameName="input-icon uil uil-at"></i> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="password"
                    name="logpass"
                    className="form-control form-control-lg"
                    placeholder="Your Password"
                    id="logpass"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                  {/* <i classNameName="input-icon uil uil-lock-alt"></i> */}
                  <label className="form-label" for="form2Example28">Password</label>
                </div>
                <div className="pt-1 mb-4">
                  <button data-mdb-button-init data-mdb-ripple-init className="btn btn-info btn-lg btn-block" onClick={signIn}>Submit</button>
                </div>
                <p className="message">{message}</p>
                <p className="small mb-5 pb-lg-2"><a href="" className="link">Forgot your password?</a></p>
                <p className="mb-0 mt-4 text-center"><a href="inscription.html" className="link-info">Create an account</a></p>
              </form>
            </div>
          </div>
        </div>
        <div className="col-sm-6 px-0 d-none d-sm-block">
          <BrickLayout />
        </div>
      </div>

    </section>
    
  );
}

export default Login;
