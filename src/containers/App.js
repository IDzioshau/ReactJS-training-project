import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import CardList from '../components/CardList';
import Header from '../components/Header';
import { v4 as uuidv4 } from 'uuid';

const StyledCheckbox = styled.input`
    margin: 10px;
    transform: scale(1.5);
    &:hover {
        box-shadow: 0px 0px 10px rgba(11, 161, 56, 0.5);
        cursor: pointer;
    }
`;

const StyledButton = styled.button`
    margin: 10px;
    background-color: green;
    color: white;
    &:hover {
        background-color: lightgreen;
        box-shadow: 1px 1px 10px rgba(171, 243, 137, 0.5);
        color: black;
        cursor: pointer;
    }
`;

const CreateCardButton = styled.button`
    margin: 10px;
    background-color: Salmon;
    color: white;
    &:hover {
        background-color: LightSalmon;
        box-shadow: 1px 1px 10px rgba(171, 243, 137, 0.5);
        color: black;
        cursor: pointer;
    }
`;

class App extends Component {
    state = {
        cards: [
            { id: 1, caption: 'Caption1', text: 'any text', selected: false },
            { id: 2, caption: 'Caption2', text: 'any text', selected: false },
            { id: 3, caption: 'Caption3', text: 'any text', selected: false },
            { id: 4, caption: 'Caption4', text: 'any text', selected: false },
            { id: 5, caption: 'Caption5', text: 'any text', selected: false },
            { id: 6, caption: 'Caption6', text: 'any text', selected: false },
            { id: 7, caption: 'Caption7', text: 'any text', selected: false },
            { id: 8, caption: 'Caption8', text: 'any text', selected: false },
        ],
        readOnlyMode: false,
    };

    switchReadOnlyMode = () => {
        this.setState({
            readOnlyMode: !this.state.readOnlyMode,
        });
    };

    selectCard = id => {
        const cardIndex = this.state.cards.findIndex(c => c.id === id);
        const cards = [...this.state.cards];
        cards[cardIndex].selected = !cards[cardIndex].selected;
        this.setState({ cards });
    };

    deleteSelectedCards = () => {
        this.setState(state => ({
            cards: state.cards.filter(c => !c.selected),
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
        const { readOnlyMode, cards } = this.state;

        return (
            <>
                <Header />
                <StyledCheckbox
                    id="readOnlyMode"
                    type="checkbox"
                    onChange={this.switchReadOnlyMode}
                    checked={readOnlyMode}
                />
                <label htmlFor="readOnlyMode">Read-Only</label>
                <StyledButton onClick={this.deleteSelectedCards}>
                    Delete selected cards
                </StyledButton>
                <CreateCardButton onClick={this.createNewCard}>
                    Create new card
                </CreateCardButton>
                <div className="cards">
                    <CardList
                        cards={cards}
                        readOnlyMode={readOnlyMode}
                        onSelectHandler={this.selectCard}
                    />
                </div>
            </>
        );
    }
}

export default App;
