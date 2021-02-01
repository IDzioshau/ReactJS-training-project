import React from 'react';
import './Cards.css';
import Card from './Card';

const Cards = props => (
    <div className="cards">
        {props.cards.map(card => {
            return (
                <Card
                    id={card.id}
                    key={card.id}
                    caption={card.caption}
                    text={card.text}
                    readOnlyMode={props.readOnlyMode}
                    select={props.select}
                />
            );
        })}
    </div>
);

export default Cards;
