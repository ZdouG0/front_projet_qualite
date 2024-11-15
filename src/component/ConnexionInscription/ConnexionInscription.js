import React from 'react';
import logo_qualite from '../assets/logo-qualite.png'
import './ConnexionInscription.css'
import {useState} from "react";

function ConnexionInscription({isConnected,setIsConnected,isAdmin,setIsAdmin}) {
    //state

    // ce state va permette de modifier dynamiquement la page
    const [isInscription, setIsInscription] = useState(true);
    // les states pour les erreurs
    const [isErreurPassword,setIsErreurPassword] = useState(false);
    const [IsErreurMatouEmail,setIsErreurMatouEmail] = useState(false);
    // ici on s'interesse au differente entrée
    const [Matricule,setMatricule] = useState("")
    const [Nom,setNom] = useState("")
    const [Prenom,setPrenom] = useState("")
    const [Email,setEmail] = useState("")
    const [Pwd,setPwd] = useState("")
    const [CPwd,setCPwd] = useState("")


    //comportement
    // cet handler va permettre de changer notre state de maniere dynamique pour passer du monde Inscrip au monde co et inversement
    // cette maniere a une limite -> si on appuit sur le mode actuel ca change quand meme

    const handleChangeMod = () => {
        setIsErreurPassword(false);
        setIsErreurMatouEmail(false);
        if (isInscription === true) {
            setIsInscription(false);
        }else {
            setIsInscription(true);
        }
        setMatricule("");
        setNom("");
        setPrenom("");
        setEmail("");
        setPwd("");
        setCPwd("");
    }

    //comme on a donner un state en value a nos input il faut pourvoir donner le droit de modif avec le set
    const handleChangeMatricule = (event) => {
        const NewMat = event.target.value;
        setMatricule(NewMat);
    }
    const handleChangeNom = (event) => {
        const NewNom = event.target.value;
        setNom(NewNom);
    }
    const handleChangePrenom = (event) => {
        const NewPrenom = event.target.value;
        setPrenom(NewPrenom);
    }
    const handleChangeEmail = (event) => {
        const NewEmail = event.target.value;
        setEmail(NewEmail);
    }
    const handleChangePwd= (event) => {
        const NewPwd = event.target.value;
        setPwd(NewPwd);
    }
    const handleChangeCPwd= (event) => {
        const NewCPwd = event.target.value;
        setCPwd(NewCPwd);
    }


    // methode appele apres validation du formulaire
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsErreurPassword(false);
        setIsErreurMatouEmail(false)
        // il y a ici deux cas a identifier la connexion et l'inscription
        // je pars du principe qu'il est possible d'appeler des methodes du back
        if (isInscription) {
            if (Pwd !== CPwd){
                // dans un premier temps verifions la correspondance des deux pwd
                alert("Une erreur est survenue : Les mots de passes doivent etres identiques" )
                setIsErreurPassword(true);
            }else {
                //on appelle la methode d'inscription avec en parametre les states corresponds
                //verifier si l'adresse ou matricule existe deja
                if (true) {
                    //l'appel de la fonction de creation dans la base
                    // on va dans le menu connexion
                    handleChangeMod();
                }else {
                    //afficher message d'erreur
                    alert("Une erreur est survenue : Un compte est deja associé a cette adresse ou matricule" )
                    setIsErreurMatouEmail(true);
                }
            }


        }else { // si on est dans le menu connnexion
            //pseudo code pcq pas les fonctions du back
            // if (pas de compte trouve) {
            //  alert("Une erreur est survenue : Email/Matricule ou Mots de Passe incorrecte")
            //  .... le code pour rendre a bordure rouge et afficher le message d'erreur dans un p au dessus de valider
            // }else {  si trouve
            //  on recup le state de App isConnected et on mets a True
            //  on verifie si l'user est un Admin au quel cas on mets isAdmin a true
            //  on part dans la page d'accueil

            // avec des methodes du back on verifie l'existence de l'utilisateur
            // si c'est bon on change le state du niveau de App (isConnected)
            // et chercher a savoir si c'est un admin avec (isAdmin)
        }
    }

    //render
    return (
        <div className="body">
            <div className="container">
                <div className="form-container">
                    <img src={logo_qualite} alt="logo"/>
                    <h1>{isInscription === true ? "Bienvenue ! " : "Bon retour ! "}</h1>
                    <p>Entrez les informations pour {isInscription === true ? "créer " : "acceder a "} un compte</p>
                    <form onSubmit={handleSubmit}>

                        {isAdmin === true && isInscription === true ?
                            <div className="radio-container">
                                <legend>Compte admin ?</legend>
                                <label htmlFor="oui">
                                    <input type="radio" id="oui" name="admin" value="oui"/> Oui
                                </label>
                                <label htmlFor="non">
                                    <input type="radio" id="non" name="admin" value="non"/> Non
                                </label>
                            </div>
                            : <div></div>}

                        <input type="text" className={IsErreurMatouEmail === true ? "boxError" : ""}
                               onChange={handleChangeMatricule} value={Matricule} placeholder="Matricule" required/>

                        {isInscription === true ?
                            <input type="text" onChange={handleChangeNom} value={Nom} placeholder="Nom" required/>
                            : <div></div>}

                        {isInscription === true ?
                            <input  type="text" onChange={handleChangePrenom} value={Prenom} placeholder="Prénom" required/>
                            : <div></div>}

                        {isInscription === true ?
                            <input  className={IsErreurMatouEmail === true ? "boxError" : ""} type="email" onChange={handleChangeEmail} value={Email} placeholder="Email" required/>
                            : <div></div>}


                        <input className={isErreurPassword === true ? "boxError" : ""} type="password" onChange={handleChangePwd} value={Pwd} placeholder="Mot de passe" required/>


                        {isInscription === true ?
                            <>
                            <input className={isErreurPassword === true ? "boxError" : ""} type="password" onChange={handleChangeCPwd} value={CPwd} placeholder="Confirmation mot de passe" required/>

                            </>
                            : <div></div>}

                        {isErreurPassword === true?
                            <p className="Error">Les mots de passe doivent être identiques !</p>: <div></div>
                        }
                        {setIsErreurMatouEmail === true?
                            <p className="Error">Un compte est deja associé a cette email ou matricule !</p>: <div></div>
                        }

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