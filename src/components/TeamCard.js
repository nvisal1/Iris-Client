import React from 'react';
import './TeamCard.css'
import { Link } from 'react-router-dom';

const TeamCard = (props) => {
    return (
        <Link to={`/streams/show/${props.stream.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className="team-card">
                <img style={{width:'100%'}}src={props.stream.thumbnail}></img>
                <div class="team-card__container">
                    <h4><b>{props.stream.title}</b></h4> 
                </div>
            </div>
        </Link>
    );
}

export default TeamCard;