import React, { useState } from 'react';
import './boutonfiltre.css';

const BoutonFiltre = () => {
    const [searchOpen, setSearchOpen] = useState(false);

    const openSearch = () => {
        setSearchOpen(true);
    };

    const closeSearch = () => {
        setSearchOpen(false);
    };

    return (
        <div>
            {searchOpen && (
                <div id="myOverlay" className="overlay">
                    <span className="closebtn" onClick={closeSearch} title="Close Overlay">x</span>
                    <div className="overlay-content">
                        <form>
                            <h2>Où voulez-vous aller?</h2>
                            <label htmlFor="code_postal">Code postal:</label>
                            <input type="text" id="code_postal" name="code_postal" placeholder="Code postal" /><br /><br />
                            <label htmlFor="ville">Ville : </label><br />
                            <input type="text" id="ville" name="ville" placeholder="Ville" /><br /><br />
                            <h2>Vous avez un handicap?</h2><br />
                            <input type="checkbox" id="handicap_auditif" title="handicap_auditif" value="handicap_auditif" className="preferenceCheckbox" />
                            <label htmlFor="handicap_auditif">Handicap auditif</label><br />
                            <input type="checkbox" id="handicap_visuel" title="handicap_visuel" value="handicap_visuel" className="preferenceCheckbox" />
                            <label htmlFor="handicap_visuel">Handicap visuel</label><br />
                            <input type="checkbox" id="handicap_moteur" title="handicap_moteur" value="handicap_moteur" className="preferenceCheckbox" />
                            <label htmlFor="handicap_moteur">Handicap moteur</label>
                            <br /><br />
                            <h2>Vous préférez visiter ...</h2><br />
                            <input type="checkbox" title="musee" id="musee" className="preferenceCheckbox" />
                            <label htmlFor="musee">Un musée</label><br />
                            <input type="checkbox" title="exposition" id="exposition" className="preferenceCheckbox" />
                            <label htmlFor="exposition">Une exposition</label><br />
                            <input type="checkbox" title="monument" id="monument" className="preferenceCheckbox" />
                            <label htmlFor="monument">Un monument</label><br />
                            <input type="checkbox" title="chateaux" id="chateaux" className="preferenceCheckbox" />
                            <label htmlFor="chateaux">Un château</label><br />
                            <input type="submit" value="Appliquer les modifications" id="search" /><br />
                            <input type="reset" value="Réinitialiser les paramètres" id="clear" /><br /><br />
                        </form>
                    </div>
                </div>
            )}
            <div className="centrerbouton">
                <button className="openBtn" onClick={openSearch}>Filtres</button>
            </div>
        </div>
    );
};

export default BoutonFiltre;
