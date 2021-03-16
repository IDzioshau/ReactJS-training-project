import React from 'react';
import './CardList.css';
import Card from './Card';
import { connect } from 'react-redux';
import * as actions from '../../state/actions';

const CardList = props => {
    const doubleClickHandler = id => {
        props.history.push('/cards/' + id);
    };

    return props.cards.map(card => (
        <Card
            id={card.id}
            key={card.id}
            caption={card.caption}
            text={card.text}
            readOnlyMode={props.readOnlyMode}
            onSelectHandler={() => props.handleCardSelect(card.id)}
            onEditHandler={editedCard => props.handleEditCard(editedCard)}
            dblClicked={() => doubleClickHandler(card.id)}
        />
    ));
};

const mapStateToProps = state => ({ cards: state.cards });

const mapDispatchToProps = dispatch => ({
    handleCardSelect: id => dispatch({ type: actions.selectCard, id: id }),
    handleEditCard: card => dispatch({ type: actions.editCard, card: card }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
