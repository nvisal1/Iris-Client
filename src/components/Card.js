import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <Link to={`/streams/show/${props.stream.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className="card">
                <img style={{width:'100%'}}src="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1423&q=80"></img>
                <div class="container">
                    <h4><b>{props.stream.title}</b></h4> 
                    <p>{props.stream.description}</p> 
                </div>
            </div>
        </Link>
    );
}

export default Card;