import React from 'react';
import './CardList.css';
import Card from './Card';
import { connect } from 'react-redux';
import { editCard, selectCard } from '../../store/actions';

const CardList = (
    history,
    cards,
    readOnlyMode,
    handleCardSelect,
    handleEditCard,
) => {
    const doubleClickHandler = id => {
        history.push('/cards/' + id);
    };

    return cards.map(card => (
        <Card
            id={card.id}
            key={card.id}
            caption={card.caption}
            text={card.text}
            readOnlyMode={readOnlyMode}
            onSelectHandler={() => handleCardSelect(card.id)}
            onEditHandler={editedCard => handleEditCard(editedCard)}
            dblClicked={() => doubleClickHandler(card.id)}
        />
    ));
};

const mapStateToProps = state => ({ cards: state.cards });

const mapDispatchToProps = {
    handleCardSelect: selectCard,
    handleEditCard: editCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
