import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CardsContext = React.createContext({
    cards: [],
    handleCardDelete: () => {},
    handleCardSelect: () => {},
    handleCardCreate: () => {},
});

export class CardsContextProvider extends Component {
    state = {
        cards: [
            { id: uuidv4(), caption: 'Caption1', text: 'any text', selected: false },
            { id: uuidv4(), caption: 'Caption2', text: 'any text', selected: false },
            { id: uuidv4(), caption: 'Caption3', text: 'any text', selected: false },
            { id: uuidv4(), caption: 'Caption4', text: 'any text', selected: false },
            { id: uuidv4(), caption: 'Caption5', text: 'any text', selected: false },
            { id: uuidv4(), caption: 'Caption6', text: 'any text', selected: false },
            { id: uuidv4(), caption: 'Caption7', text: 'any text', selected: false },
            { id: uuidv4(), caption: 'Caption8', text: 'any text', selected: false },
        ],
    };

    deleteSelectedCards = () => {
        this.setState(state => ({
            cards: state.cards.filter(c => !c.selected),
        }));
    };

    selectCard = id => {
        const cardIndex = this.state.cards.findIndex(c => c.id === id);
        const cards = [...this.state.cards];
        cards[cardIndex].selected = !cards[cardIndex].selected;
        this.setState({ cards });
    };

    createNewCard = () => {
        this.setState(state => ({
            cards: [
                ...state.cards,
                {
                    id: uuidv4(),
                    caption: 'new Card',
                    text: '',
                    selected: false,
                },
            ],
        }));
    };

    render() {
        return (
            <CardsContext.Provider
                value={{
                    cards: this.state.cards,
                    handleCardCreate: this.createNewCard,
                    handleCardDelete: this.deleteSelectedCards,
                    handleCardSelect: this.selectCard,
                }}
            >
                {this.props.children}
            </CardsContext.Provider>
        );
    }
}

export default CardsContext;
