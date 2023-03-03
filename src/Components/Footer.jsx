import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className='footer__titles'>
                <h2 className="footer__title">Thery Mathys</h2>
                <p className="footer__subtitle">Copyright © 2023. Tout droits réservés</p>
            </div>
            <div className="footer__links">
                <a href="https://www.linkedin.com/in/mathys-thery-190343259/">
                    <i class="fa-brands fa-linkedin footer__link"></i>
                </a>
                <a href="https://github.com/mqthys62">
                    <i class="fa-brands fa-github footer__link"></i>
                </a>
                <a href="mailto:mathysthery@gmail.com">
                    <i class="fa-sharp fa-solid fa-envelope footer__link"></i>
                </a>
            </div>
        </footer>
    )
}
