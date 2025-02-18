import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js';
import { createUserWithEmailAndPassword, getAuth } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js';
import React, { useEffect, useState } from 'react';

const apiKey = "rdpM6zH4.WAhwx4zoVvrI3ICXwg1eudkxslwVNWI9";

// Initialisation de Firebase
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
  const [secteurs, setSecteurs] = useState([]);
  const [etablissements, setEtablissements] = useState([]);
  const [codePostal, setCodePostal] = useState('');
  const [ville, setVille] = useState('');
  const [nom, setNom] = useState('');
  const [selectedActivite, setSelectedActivite] = useState('');
  const [nextUrl, setNextUrl] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [URLapi, setUrlAPI] = useState('');
  const [selectedEtablissement, setSelectedEtablissement] = useState(null);



  useEffect(() => {
    fetchSecteurs();
  }, []);

  useEffect(() => {
    handleSubmit();
  }, [codePostal, ville, nom, selectedActivite]);

  const fetchSecteurs = () => {
    // API call to fetch secteurs here
    // Example:
    // fetch('https://example.com/secteurs')
    //   .then(response => response.json())
    //   .then(data => setSecteurs(data))
    //   .catch(error => console.error("Error fetching secteurs:", error));
    // For this example, I'll use mock data
    const mockSecteurs = ["musée","stade","monument","lieu de visite","salle de spectacle"];
    setSecteurs(mockSecteurs);
  };
  
  const handleSubmit = () => {
    let complementUrl = "";

    if (codePostal !== "") {
      complementUrl += "code_postal=" + codePostal;
    }

    if (ville !== "") {
      complementUrl += "&commune=" + ville;
    }

    if (selectedActivite !== "") {
      complementUrl += "&q=" + selectedActivite;
    }

    if (nom !== "") {
      complementUrl += "&q=" + nom;
    }

    const apiUrl = "https://acceslibre.beta.gouv.fr/api/erps/?" + complementUrl;
    console.log(apiUrl);

    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setNextUrl(data.next);
        setEtablissements(data.results);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };
  
  const handleNext = (e) => {
    e.preventDefault();
    if (nextUrl !== "") {
      fetch(nextUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          setNextUrl(data.next);
          setEtablissements(data.results);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
}

const handleFormSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userId = user.uid;
        const userRef = ref(database, 'users/' + userId);
        const userData = {
          etablissement: selectedEtablissement,
          URL: "https://acceslibre.beta.gouv.fr/api/erps/?q=" + encodeURIComponent(selectedEtablissement.nom),
          is_pro: true,
          lastName: lastName
        };
  
        set(userRef, userData)
          .then(() => {
            alert("Utilisateur créé avec succès !");
            window.location.href = "espace_personnel.html?name=" + encodeURIComponent(userData.name) + "&last_name=" + encodeURIComponent(userData.lastName);
          })
          .catch((error) => {
            alert("Erreur lors de la sauvegarde des données : " + error.message);
          });
      })
      .catch((error) => {
        alert("Erreur lors de la création de l'utilisateur : " + error.message);
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
                          <div>
                            <form>
                              <label>
                                Code Postal:
                                <input type="text" value={codePostal} onChange={(e) => setCodePostal(e.target.value)} />
                              </label>
                              <br />
                              <label>
                                Ville:
                                <input type="text" value={ville} onChange={(e) => setVille(e.target.value)} />
                              </label>
                              <br />
                              <label>
                                Nom:
                                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
                              </label>
                              <br />
                              <label>
                                Activité:
                                <select value={selectedActivite} onChange={(e) => setSelectedActivite(e.target.value)}>
                                  <option value="">Sélectionner une activité</option>
                                  {secteurs.map((secteur, index) => (
                                    <option key={index} value={secteur}>{secteur}</option>
                                  ))}
                                </select>
                              </label>
                            </form>

                            <div>
                              <h2>Établissements</h2>
                              <select value={selectedEtablissement ? selectedEtablissement.nom : ''} onChange={(e) => {
                                const selectedNom = e.target.value;
                                const selectedEtablissement = etablissements.find(etablissement => etablissement.nom === selectedNom);
                                setSelectedEtablissement(selectedEtablissement);
                                }}>
                            <option value="">Sélectionner un établissement</option>
                            {etablissements.map((etablissement, index) => (
                            <option key={index} value={etablissement.nom}>{etablissement.nom}</option>
                            ))}
                            </select>
                              {nextUrl && <button onClick={handleNext}>Suivant</button>}
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="email"
                                name="email"
                                className="form-style"
                                placeholder="Votre email"
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
                                placeholder="Votre mot de passe"
                                id="password"
                                autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <button className="btn mt-4" onClick={handleFormSubmit}>Soumettre</button>
                            <p className="mb-0 mt-4 text-center"><a href="connexion.html" className="link">Vous avez déjà un compte ?</a></p>
                            <p className="mb-0 mt-4 text-center"><a href="inscription.html" className="link">Vous n'êtes pas professionnel dans la culture ?</a></p>
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
      </div>
    </div>
  );
}

export default App;
