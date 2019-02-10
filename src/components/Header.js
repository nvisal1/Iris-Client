import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
           <img src="https://codetheweb.blog/assets/img/icon2.png"></img>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/streams/new">Create New Stream</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;