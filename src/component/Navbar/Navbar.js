import React, { useState } from 'react';
import "./Navbar.css";

function Navbar(props) {
    // state
    const [selectionHome, setSelectionHome] = useState("selected");
    const [selectionMat, setSelectionMat] = useState("");
    const [selectionHisto, setSelectionHisto] = useState("");
    const [selectionConsult, setSelectionConsult] = useState("");

    // comportement
    const handleSelectionHome = () => {
        setSelectionHome("selected");
        setSelectionMat("");
        setSelectionHisto("");
        setSelectionConsult("");
    };

    const handleSelectionMat = () => {
        setSelectionHome("");
        setSelectionMat("selected");
        setSelectionHisto("");
        setSelectionConsult("");
    };

    const handleSelectionHisto = () => {
        setSelectionHome("");
        setSelectionMat("");
        setSelectionHisto("selected");
        setSelectionConsult("");
    };

    const handleSelectionConsult = () => {
        setSelectionHome("");
        setSelectionMat("");
        setSelectionHisto("");
        setSelectionConsult("selected");
    };

    // render
    return (
        <nav>
            <div className="liste_element_navbar">
                <div onClick={handleSelectionHome} className={`element_navbar ${selectionHome}`}><p>Home</p></div>
                <div onClick={handleSelectionMat} className={`element_navbar ${selectionMat}`}><p>Ajouter materiels</p></div>
                <div onClick={handleSelectionHisto} className={`element_navbar ${selectionHisto}`}><p>Historiques des emprunts</p></div>
                <div onClick={handleSelectionConsult} className={`element_navbar ${selectionConsult}`}><p>Consultation utilisateurs</p></div>
            </div>
        </nav>
    );
}

export default Navbar;
