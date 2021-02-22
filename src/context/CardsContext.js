import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const CardsContext = React.createContext({
    cards: [],
    handleCardDelete: () => {},
    handleCardSelect: () => {},
    handleCardCreate: () => {},
});

export class CardsContextProvider extends Component {
    state = {
        cards: null,
    };

    componentDidMount() {
        axios
            .get(
                'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json',
            )
            .then(response => {
                const data = response.data.slice(0, 15);
                const cards = data.map(item => ({
                    id: item.Number,
                    caption: item.Name,
                    text: item.About,
                    selected: false,
                }));
                this.setState({ cards: cards });
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
            this.state.cards && (
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
            )
        );
    }
}

export default CardsContext;
