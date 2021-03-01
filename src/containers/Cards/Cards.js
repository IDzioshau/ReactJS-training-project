import React, { Component } from 'react';
import './Cards.css';
import styled from 'styled-components';
import CardsContext from '../../context/CardsContext';
import CardList from '../../components/CardList';

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

export class Cards extends Component {
    state = {
        readOnlyMode: false,
    };

    switchReadOnlyMode = () => {
        this.setState({
            readOnlyMode: !this.state.readOnlyMode,
        });
    };

    render() {
        const { readOnlyMode } = this.state;
        return (
            <>
                <StyledCheckbox
                    id="readOnlyMode"
                    type="checkbox"
                    onChange={this.switchReadOnlyMode}
                    checked={readOnlyMode}
                />
                <label htmlFor="readOnlyMode">Read-Only</label>
                <CardsContext.Consumer>
                    {context => (
                        <>
                            <StyledButton onClick={context.handleCardDelete}>
                                Delete selected cards
                            </StyledButton>
                            <CreateCardButton
                                onClick={context.handleCardCreate}
                            >
                                Create new card
                            </CreateCardButton>
                        </>
                    )}
                </CardsContext.Consumer>
                <div className="cards">
                    <CardList readOnlyMode={readOnlyMode} />
                </div>
            </>
        );
    }
}

export default Cards;
