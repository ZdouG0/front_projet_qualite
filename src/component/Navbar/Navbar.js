
import "./Navbar.css";
import logo_icon from "../assets/logo_icon.PNG"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faList,faBook,faPlus,faHouse } from "@fortawesome/free-solid-svg-icons";

function Navbar({ isConnected, isAdmin,pageActuelle,setPageActuelle }) {
    // state


    // comportement
    const handleSelection = (selection) => {
        setPageActuelle(selection);

    };

    const handleClickLogo = ()=> {
        //page Accueil
    }

    // render
    return (
        <nav>
            <div className="liste_element_navbar">
                <div onClick={handleClickLogo} ><img src={logo_icon} alt="logo"/></div>
                <div onClick={() => handleSelection("Home")} className={`element_navbar ${pageActuelle === "Home" ? "selected" : ""}`}><p><FontAwesomeIcon icon={faHouse} /> Home</p></div>

                {isAdmin && (
                    <div onClick={() => handleSelection("AjouterMateriel")} className={`element_navbar ${pageActuelle === "AjouterMateriel" ? "selected" : ""}`}><p><FontAwesomeIcon icon={faPlus} /> Ajouter materiels</p></div>
                )}

                <div onClick={() => handleSelection("historiquesEmprunts")} className={`element_navbar ${pageActuelle === "historiquesEmprunts" ? "selected" : ""}`}><p><FontAwesomeIcon icon={faBook} /> Historiques des emprunts</p></div>

                {isAdmin && (
                    <div onClick={() => handleSelection("UserListPage")} className={`element_navbar ${pageActuelle === "UserListPage" ? "selected" : ""}`}><p><FontAwesomeIcon icon={faList} /> Consultation utilisateurs</p></div>
                )}

                {isConnected !== true ?
                    <div onClick={() => handleSelection("LogPage")} className={`element_navbar ${pageActuelle === "LogPage" ? "selected" : ""}`}><p><FontAwesomeIcon icon={faUser} /> Connexion</p></div>
                    : <div onClick={() => handleSelection("account")} className={`element_navbar ${pageActuelle === "account" ? "selected" : ""}`}> <p><FontAwesomeIcon icon={faUser} /> Mon Profil </p> </div>
                }

            </div>
        </nav>
    );
}

export default Navbar;
