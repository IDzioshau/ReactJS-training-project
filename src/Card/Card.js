import React, { useState } from 'react';
import './Card.css';

const Card = props => {
    const [cardState, setCardState] = useState({
        style: "card"
    });

    const switchStyle = event => {
        let newStyle = event.target.checked ? "card2" : "card";
        setCardState({
            style: newStyle
        });
    };

    return (
        <div className={cardState.style}>
            <input className="style-checkbox" type="checkbox" onChange={switchStyle} />
            <h1>{props.caption}</h1>
            <hr />
            <p>{props.text}</p>
        </div>
    )
};

export default Card;
