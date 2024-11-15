
import './App.css';
import ConnexionInscription from "./component/ConnexionInscription/ConnexionInscription";
import Navbar from "./component/Navbar/Navbar";
import {useState} from "react";
import UserList from "./component/UserList/UserList";
import Footer from "./component/Footer/Footer";
import AjouterModifierMatInfo from "./component/AjouterModifierMatInfo/AjouterModifierMatInfo";
import Home from "./component/Home/Home";

function App() {
    //state
    const [isConnected, setIsConnected] =  useState(false);
    const [isAdmin, setIsAdmin] =  useState(true);
    const [pageActuelle, setPageActuelle] =  useState("UserListPage");


    // Utilisation d'un objet de mappage
    const PageMap = {
        Home: <Home />,
        UserListPage: <UserList />,
        LogPage: <ConnexionInscription isConnected={isConnected} setIsConnected={setIsConnected} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />,
        AjouterMateriel : <AjouterModifierMatInfo />
    };






    //comportement

    //render
    return (
        <div>
        <Navbar isConnected ={isConnected} isAdmin={isAdmin}  pageActuelle={pageActuelle} setPageActuelle={setPageActuelle}  />
        {PageMap[pageActuelle]}
        <Footer/>
        </div>
    );
}





export default App;
