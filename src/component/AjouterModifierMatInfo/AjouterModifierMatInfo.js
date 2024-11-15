import React, {useState} from 'react';
import './AjouterModifierMatInfo.css'


function AjouterModifierMatInfo(props) {
    //state
    const [nomProduit, setNomProduit] = useState("");
    const [versionProduit, setVersionProduit] = useState("");
    const [refProduit, setRefProduit] = useState("");
    const [prixProduit, setPrixProduit] = useState("");
    const [descriptionProduit, setDescriptionProduit] = useState("");
    //comportement
    const handleChangeNomProduit = (event) => {
        const NewProd = event.target.value;
        setNomProduit(NewProd);
    }
    const handleChangeVersionProduit = (event) => {
        const NewVersion = event.target.value;
        setVersionProduit(NewVersion);
    }
    const handleChangeRefProduit = (event) => {
        const NewRef = event.target.value;
        setRefProduit(NewRef);
    }
    const handleChangePrixProduit = (event) => {
        const NewPrix = event.target.value;
        setPrixProduit(NewPrix);
    }
    const handleChangeDescriptionProduit = (event) => {
        const NewDescrip = event.target.value;
        setDescriptionProduit(NewDescrip);
    }

    const handleSubmitProduit = (event) => {
        event.preventDefault(); // empeche le rechargement de la page
        // quand on valide il suffit de creer l'element ou de le modifier
        setNomProduit("")
        setVersionProduit("")
        setRefProduit("")
        setPrixProduit("")
        setDescriptionProduit("")
    }

    //render
    return (
        <div className="body">
            <div className="containerForm">
                <h1>Ajouter un materiel informatique</h1>
                <h3>Photo du produit</h3>
                <div className="setImage">
                    <div className="imageici"></div>
                    <div className="textSetImage">
                        <h4>Charger une photo</h4>
                        <p className="legendPhotoFormat">format PNG ou JPG</p>
                        <div className="buttonSetImage">
                            <div className="button OkButton">
                                <label for="fileInput" class="file-input-label">
                                    Choisir une image
                                </label>
                                <input id="fileInput" className="addImage" type="file" accept="image/*"/>
                            </div>
                            <div className="button NoButton">Supprimer Image</div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmitProduit} className="setMatInfo">

                    <input type="text" onChange={handleChangeNomProduit} value={nomProduit} placeholder="Nom" className="input-Nom"/>
                    <input type="text" onChange={handleChangeVersionProduit} value={versionProduit} placeholder="Version" className="input-version"/>
                    <input type="text" onChange={handleChangeRefProduit} value={refProduit} placeholder="Reference" className="input-ref"/>
                    <input type="text" onChange={handleChangePrixProduit} value={prixProduit} placeholder="Prix" className="input-prix"/>
                    <input type="text" onChange={handleChangeDescriptionProduit} value={descriptionProduit} placeholder="Description" className="input-description"/>
                    <div className="ButtonSubmit">
                        <div className="button NoButton">Annuler</div>
                        <button type="submit">
                            <div type="submit" className="button OkButton">Ajouter</div>
                        </button>
                        {/*devient confirmer si on est en modification*/}
                    </div>

                </form>
            </div>

        </div>
    );
}

export default AjouterModifierMatInfo;