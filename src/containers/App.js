import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import CardList from '../components/CardList';
import Header from '../components/Header';
import CardsContext, { CardsContextProvider } from '../context/CardsContext';

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
        readOnlyMode: false,
    };

    static contextType = CardsContext;

    switchReadOnlyMode = () => {
        this.setState({
            readOnlyMode: !this.state.readOnlyMode,
        });
    };

    render() {
        const { readOnlyMode } = this.state;

        return (
            <CardsContextProvider>
                <Header />
                <StyledCheckbox
                    id="readOnlyMode"
                    type="checkbox"
                    onChange={this.switchReadOnlyMode}
                    checked={readOnlyMode}
                />
                <label htmlFor="readOnlyMode">Read-Only</label>
                <StyledButton onClick={this.context.handleCardDelete}>
                    Delete selected cards
                </StyledButton>
                <CreateCardButton onClick={this.context.handleCardCreate}>
                    Create new card
                </CreateCardButton>
                <div className="cards">
                    <CardList readOnlyMode={readOnlyMode} />
                </div>
            </CardsContextProvider>
        );
    }
}

export default App;
