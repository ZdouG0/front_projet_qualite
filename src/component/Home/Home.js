import React from 'react';
import OrangeExemple from '../assets/orangeExemple.jpg';
import './Home.css';

function Home(props) {
    return (
        <div className="bodyHome">
            <div className="containerHome">
                <div className="CategoryLabelContainer">
                    {["Tout", "Pc Portables", "Telephones", "Imprimantes", "PC fixes"].map(category => (
                    <div>
                        {[...Array(1)].map((_, index) => (
                        <div className="CategoryLabel">{category}</div>
                        ))}
                    </div>

                ))}
                </div>

                {["Pc Portables", "Téléphones", "Imprimantes"].map(category => (
                    <div className="ListeProductCat" key={category}>
                        <div className="TitreCateg">
                            <h1>{category}</h1>
                            <p className="SeeMoreLabel">See more ></p>
                        </div>
                        <div className="ContentDisplay">
                            {[...Array(4)].map((_, index) => (
                                <div className="ProductDisplay" key={index}>
                                    <img className="ImageProduct" src={OrangeExemple} alt="image de produit"/>
                                    <p className="NomduProduit">Nom du Produit</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Home;
