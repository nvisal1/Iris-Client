import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <Link to={`/streams/show/${props.stream.id}`}>
            <div class="card" data-effect="zoom">
                <button class="card__save  js-save" type="button">
                    <i class="fa fa-bookmark"></i>
                </button>
                <figure  class="card__image">
                    <img src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" alt="Short description"/>
                </figure>
                <div class="card__header">
                    <figure class="card__profile">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Neil_Armstrong.jpg" alt="Short description"/>
                    </figure>
                </div>
                <div class="card__body">
                    <h3 class="card__name">Neil Armstrong</h3>
                    <p class="card__job">{props.stream.title}</p>
                    <p class="card__bio">{props.stream.description}</p>
                </div>
                    <div class="card__footer">
                    <p class="card__date">Feb 10 2018</p>
                    <p class=""></p>
                </div>
            </div>
        </Link>
    );
}

export default Card;