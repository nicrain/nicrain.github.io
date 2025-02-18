import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js';
import { get, getDatabase, ref, update } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js';
import { get_uid } from '../../userdata';

import React, { useEffect, useState } from 'react';

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

function App() {
    const [etablissement, setEtablissement] = useState('');
    const [description, setDescription] = useState('');
    const uid =get_uid();

    useEffect(() => {
        const etablissementRef = ref(database, 'users/' + uid + '/etablissement/nom');
console.log("1/ " +etablissementRef);

get(etablissementRef)
  .then((snapshot) => {
    setEtablissement(snapshot.val());
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });


  
    }, []);
    const handleFormSubmit = () => {
        let code_id;
        const CodeRef = ref(database, 'users/' + uid + '/etablissement/ban_id');
        get(CodeRef)
            .then((snapshot) => {
                code_id = snapshot.val();
                // Ajouter le code_id dans l'emplacement général 'etablissement/'
                const lieuxRef1 = ref(database, 'etablissement/');
                return update(lieuxRef1, {
                    [code_id]: { code_id: code_id } // Utilisez le code_id comme clé pour éviter de remplacer les données existantes
                });
            })
            .then(() => {
                // Récupérer les établissements de l'utilisateur
                const etablissementRef = ref(database, 'users/' + uid + '/etablissement');
                return get(etablissementRef);
            })
            .then((snapshot) => {
                // Ajouter les établissements à l'emplacement spécifique 'etablissement/<code_id>'
                const etablissements = snapshot.val();
                const lieuxRef2 = ref(database, 'etablissement/' + code_id);
                return update(lieuxRef2, {
                    etablissements: etablissements,
                    description: description
                });
            })
            .then(() => {
                console.log("Etablissements ajoutés avec succès !");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    
    
    return (
        <div className="App">
            <h1>Nom de l'établissement : {etablissement}</h1>
            <label>
                Description:
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <button className="btn mt-4" onClick={handleFormSubmit}>Soumettre</button>

        </div>
    );
}
export default App;
