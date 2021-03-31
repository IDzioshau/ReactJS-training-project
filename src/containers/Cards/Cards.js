import React, { Component } from 'react';
import './Cards.css';
import styled from 'styled-components';
import CardList from '../../components/CardList';
import { connect } from 'react-redux';
import { createCard, deleteCard, fetchData } from '../../store/actions';

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

    componentDidMount() {
        if (this.props.cards.length === 0) {
            this.props.fetchData();
        }
    }

    switchReadOnlyMode = () => {
        this.setState({
            readOnlyMode: !this.state.readOnlyMode,
        });
    };

    render() {
        const { readOnlyMode } = this.state;
        const { handleCardCreate, handleCardDelete, history } = this.props;
        return (
            <>
                <StyledCheckbox
                    id="readOnlyMode"
                    type="checkbox"
                    onChange={this.switchReadOnlyMode}
                    checked={readOnlyMode}
                />
                <label htmlFor="readOnlyMode">Read-Only</label>
                <StyledButton onClick={handleCardDelete}>
                    Delete selected cards
                </StyledButton>
                <CreateCardButton onClick={handleCardCreate}>
                    Create new card
                </CreateCardButton>

                <div className="cards">
                    <CardList readOnlyMode={readOnlyMode} history={history} />
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ cards: state.cards });

const mapDispatchToProps = {
    handleCardCreate: createCard,
    handleCardDelete: deleteCard,
    fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
