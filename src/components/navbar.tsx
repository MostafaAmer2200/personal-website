import React from 'react';
import './styles/NavBar.css'
export default function NavBar (){
    return (
        <>
            <div className='navbar'>
                <img className='logo-img' src={require('../assets/M.png')} alt='Logo' width={50} height={50}/>
                <a href="#home">Home</a>
                <a href="#about-me-section">About</a>
                <a href="#Work">Work</a>
                <a href="#Contact">Contact</a>
            </div>
            <div className="navbar-dropdown">
                <div className="logo">
                    <img src={require("../assets/M.png")} alt="Logo" width={50} height={50}/>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">&#9776;</button>
                    <div className="dropdown-content">
                        <a href="#home">Home</a>
                        <a href="#about-me-section">About</a>
                        <a href="#Work">Work</a>
                        <a href="#Contact-me">Contact</a>
                    </div>
                </div>
            </div>
        </>
    )
}