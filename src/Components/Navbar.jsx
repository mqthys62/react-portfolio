import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='navbar__container'>
            <nav className='navbar'>
                <div className="navbar__brands">
                    <h2 className='navbar__title'>Mathys Thery</h2>
                    <button onClick={() => setIsOpen(!isOpen)} className='navbar__collapse-button'>
                        <i className={`fas ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
                    </button>
                </div>
                <ul className={`navbar__links ${isOpen ? "navbar__links--open" : "navbar__links--close"}`}>
                    <li ><Link className='navbar__link navabr__link--active' to="/">Accueil</Link></li>
                    <span className='navbar__link-divider'>-</span>
                    <li ><Link className='navbar__link' to="Portfolio">Portfolio</Link></li>
                    <span className='navbar__link-divider'>-</span>
                    <li ><Link className='navbar__link' to="Contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}
