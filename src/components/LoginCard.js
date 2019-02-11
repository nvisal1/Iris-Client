import React from 'react';
import './LoginCard.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoginCard = () => {
    return (
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <div className="logincard">
                <div className="container-title">
                    Join the Iris Community
                </div><hr/>
                <div className="container-description">
                    Stream with up to 5 friends with just a single account!
                </div>
                <button>Login</button>
            </div>
        </Link>
    );
}

export default LoginCard;