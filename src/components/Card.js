import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <Link to={`/streams/show/${props.stream.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className="card">
                <img style={{width:'100%'}}src={props.stream.thumbnail}></img>
                <div class="container">
                    <h4><b>{props.stream.title}</b></h4> 
                    <p>{props.stream.description}</p> 
                </div>
            </div>
        </Link>
    );
}

export default Card;