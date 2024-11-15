import React from 'react';
import logo from '../assets/logo-qualite-sans-fond.png'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footContainer">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="contact-foot">
                    <h1>CONTACT</h1>
                    <p className="footer-element">Email</p>
                    <p className="footer-element">telephone</p>
                    <p className="footer-element">adresse</p>
                </div>
                <div className="legal-foot">
                    <h1>LEGAL</h1>
                    <p className="footer-element">A propos</p>
                    <p className="footer-element">Contact</p>
                    <p className="footer-element">FAQ</p>
                    <p className="footer-element">Politique de confidentialité</p>
                    <p className="footer-element">Conditions d'utilisation</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;