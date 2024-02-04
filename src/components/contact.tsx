import React from "react";
import './styles/Contact.css'


export default function ContactSection(){
    return (
        <>
            <div className="contact-section-container" id="Contact">
                <div className="button-container">
                    <a className="logo-button" href="mailto:moustafahamer2000@gmail.com">
                        <span className="button-text">Contact</span>
                        <img src={require("../assets/mail.png")} alt="Logo" className="mail-img"/>
                    </a>
                </div>
                <div className="socials-container">
                    <div className="vertical-line"></div>
                    <a href="https://github.com/MostafaAmer2200">
                        <img src={require("../assets/github.png")} alt="Logo" className="socials-img"/>
                    </a>
                    <a href="https://www.linkedin.com/in/moustafahamer/">
                        <img src={require("../assets/linkedin.png")} alt="Logo" className="socials-img"/>
                    </a>
                </div>
            </div>
            <div className="button-container-optimized" id="Contact-me">
                    <a className="logo-button" href="mailto:moustafahamer2000@gmail.com">
                        <span className="button-text">Contact</span>
                        <img src={require("../assets/mail.png")} alt="Logo" className="mail-img" width={24} height={24}/>
                    </a>
                </div>
            
        </>

    )
}