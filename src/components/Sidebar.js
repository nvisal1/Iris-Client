import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div class="sidenav">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
    )
}

export default Sidebar;