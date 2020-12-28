import React from 'react';
import './Card.css'

const card = (props) => {
    return (
        <div className="Card">
            <h1>{props.caption}</h1>
            <hr />
            <p>{props.text}</p>
        </div>
    )
};

export default card;