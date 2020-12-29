import React from 'react';
import './Card.css';

const Card = props => {
    return (
        <div className="Card">
            <h1>{props.caption}</h1>
            <hr />
            <p>{props.text}</p>
        </div>
    )
};

export default Card;
