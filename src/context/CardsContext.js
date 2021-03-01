import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const CardsContext = React.createContext({
    cards: [],
    handleCardDelete: () => {},
    handleCardSelect: () => {},
    handleCardCreate: () => {},
    handleEditCard: () => {},
});

export class CardsContextProvider extends Component {
    state = {
        cards: [],
    };

    componentDidMount() {
        axios
            .get(
                'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json',
            )
            .then(response => {
                const cards = response.data.slice(0, 15).map(item => ({
                    id: item.Number,
                    caption: item.Name,
                    text: item.About,
                    selected: false,
                }));
                this.setState({ cards });
            });
    }

    deleteSelectedCards = () => {
        this.setState(state => ({
            cards: state.cards.filter(card => !card.selected),
        }));
    };

    selectCard = id => {
        this.setState(state => ({
            cards: state.cards.map(card =>
                card.id === id ? { ...card, selected: !card.selected } : card,
            ),
        }));
    };

    editCard = card => {
        this.setState(state => ({
            cards: state.cards.map(item =>
                item.id === card.id
                    ? { ...item, caption: card.caption, text: card.text }
                    : item,
            ),
        }));
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
                    handleEditCard: this.editCard,
                }}
            >
                {this.props.children}
            </CardsContext.Provider>
        );
    }
}

export default CardsContext;
