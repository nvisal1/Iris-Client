import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import LoginCard from './LoginCard';

const Sidebar = () => {
    return (
        <div class="sidenav">
            <div className="logo">
                <b>IRIS</b>
            </div>
            <LoginCard />
        </div>
    )
}

export default Sidebar;