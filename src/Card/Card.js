import React, { useState } from 'react';
import './Card.css';

const Card = props => {
    const [cardState, setCardState] = useState({
        styleFlag: false
    });

    const switchStyle = event => {
        setCardState({
            styleFlag: event.target.checked
        });
    };

    return (
        <div className={cardState.styleFlag ? "card2" : "card"}>
            <input className="style-checkbox" type="checkbox" onChange={switchStyle} />
            <h1>{props.caption}</h1>
            <hr />
            <p>{props.text}</p>
        </div>
    )
};

export default Card;
