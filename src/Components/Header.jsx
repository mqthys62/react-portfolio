import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="header__container wrapper">
                <div className="typing">
                    <h2 className="header__title">Développeur Web & Mobile</h2>
                </div>
                <Link className='header__button' to={'/Contact'}>Contact</Link>
            </div>
        </header>
    )
}
