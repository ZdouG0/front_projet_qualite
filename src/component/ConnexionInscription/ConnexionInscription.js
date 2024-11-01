import React from 'react';
import logo_qualite from '../assets/logo-qualite.png'
import background_pc from '../assets/background_login.jpeg'
import './ConnexionInscription.css'
import {useState} from "react";

function ConnexionInscription(props) {
    //state

    // ce state va permette de modifier dynamiquement la page
    const [isInscription, setIsInscription] = useState(true);

    //comportement
    // cet handler va permettre de changer notre state de maniere dynamique pour passer du monde Inscrip au monde co et inversement
    const handleChangeMod = () => {
        if (isInscription === true) {
            setIsInscription(false);
        }else {
            setIsInscription(true);
        }

    }



    //render
    return (
        <div className="body">
            <div className="container">
                <div className="form-container">
                    <img src={logo_qualite} alt="logo"/>
                    <h1>{isInscription === true ? "Bienvenue ! " : "Bon retour ! "}</h1>
                    <p>Entrez vos identifiants pour {isInscription === true ? "créer " : "acceder a "} votre compte</p>
                    <form>
                        <input type="text" placeholder="Matricule" required/>
                        {isInscription === true ?
                            <input type="text" placeholder="Nom" required/>
                            : <div></div>}

                        {isInscription === true ?
                            <input type="text" placeholder="Prénom" required/>
                            : <div></div>}

                        {isInscription === true ?
                            <input type="email" placeholder="Email" required/>
                            : <div></div>}


                        <input type="password" placeholder="Mot de passe" required/>
                        {isInscription === true ?
                            <input type="password" placeholder="Confirmation mot de passe" required/>
                            : <div></div>}

                        <button type="submit">Valider</button>
                    </form>

                    <div className="PagePurpose">
                        <div onClick={handleChangeMod}
                             className={isInscription === true ? "blue" : "grey"}>Inscription
                        </div>
                        <div onClick={handleChangeMod} className={isInscription === true ? "grey" : "blue"}>Connexion
                        </div>
                    </div>


                </div>
                <div className="image-container">
                </div>
            </div>
        </div>


    );
}

export default ConnexionInscription;