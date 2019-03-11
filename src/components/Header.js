import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <Link className="logo" to="/">IRIS</Link>
                <input placeholder="Search"></input>
                <img className="profile" src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"></img>
            </nav>
        </header>
    );
}

export default Header;