import React from 'react';
import './NavBar.scss';
import logo from '../../logo.png';

function NavBar() {
    return (
        <nav className="navbar">
            <img src={logo} alt='city tours logo'/>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link">
                        About
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link active">
                        Tours
                    </a>
                </li>
                <li>
                <i className="fas fa-shopping-cart"></i>

                </li>
            </ul>
        </nav>
    )
}

export default NavBar
