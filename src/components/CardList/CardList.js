import React, { useContext } from 'react';
import './CardList.css';
import Card from './Card';
import CardsContext from '../../context/CardsContext';

const CardList = props => {
    const context = useContext(CardsContext);

    return context.cards.map(card => {
        return (
            <Card
                id={card.id}
                key={card.id}
                caption={card.caption}
                text={card.text}
                readOnlyMode={props.readOnlyMode}
                onSelectHandler={context.handleCardSelect}
            />
        );
    });
};

export default CardList;
