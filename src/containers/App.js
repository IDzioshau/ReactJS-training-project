import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Cards from '../components/Cards';
import Header from '../components/Header';

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
        this.setState({ cards: cards });
    };

    deleteSelectedCards = () => {
        let cards = [...this.state.cards];
        cards = cards.filter(c => !c.selected);
        this.setState({ cards: cards });
    };

    render() {
        return (
            <>
                <Header />
                <StyledCheckbox
                    id="readOnlyMode"
                    type="checkbox"
                    onChange={this.switchReadOnlyMode}
                    checked={this.state.readOnlyMode}
                />
                <label htmlFor="readOnlyMode">Read-Only</label>
                <StyledButton onClick={this.deleteSelectedCards}>
                    Delete selected cards
                </StyledButton>
                <Cards
                    cards={this.state.cards}
                    readOnlyMode={this.state.readOnlyMode}
                    select={this.selectCard}
                />
            </>
        );
    }
}

export default App;
