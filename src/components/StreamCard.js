import React from 'react';
import './StreamCard.css'
import { Link } from 'react-router-dom';

const StreamCard = (props) => {
    return (
        <Link to={`/streams/show/${props.stream.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className="stream-card">
                <img style={{width:'100%'}}src={props.stream.thumbnail}></img>
                <div class="stream-card__container">
                    <h4><b>{props.stream.title}</b></h4> 
                </div>
            </div>
        </Link>
    );
}

export default StreamCard;