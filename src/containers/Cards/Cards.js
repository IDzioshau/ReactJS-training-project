import React, { Component } from 'react';
import './Cards.css';
import styled from 'styled-components';
import CardList from '../../components/CardList';
import { connect } from 'react-redux';
import { createCard, deleteCard, fetchData } from '../../store/actions/actions';

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
    componentDidMount() {
        if (this.props.cards.length === 0) {
            this.props.fetchData();
        }
    }

    render() {
        const {
            handleCardCreate,
            handleCardDelete,
            history,
            readOnlyMode,
        } = this.props;
        return (
            <>
                {!readOnlyMode && (
                    <>
                        <StyledButton onClick={handleCardDelete}>
                            Delete selected cards
                        </StyledButton>

                        <CreateCardButton onClick={handleCardCreate}>
                            Create new card
                        </CreateCardButton>
                    </>
                )}
                <div className="cards">
                    <CardList readOnlyMode={readOnlyMode} history={history} />
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    cards: state.cardReducer.cards,
    readOnlyMode: state.cardReducer.readOnlyMode,
});

const mapDispatchToProps = {
    handleCardCreate: createCard,
    handleCardDelete: deleteCard,
    fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
