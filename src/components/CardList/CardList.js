import React from 'react';
import './CardList.css';
import Card from './Card';

const CardList = props =>
    props.cards.map(card => {
        return (
            <Card
                id={card.id}
                key={card.id}
                caption={card.caption}
                text={card.text}
                readOnlyMode={props.readOnlyMode}
                onSelectHandler={props.onSelectHandler}
            />
        );
    });

export default CardList;
