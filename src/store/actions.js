import * as actions from './actionTypes';
import axios from 'axios';

export const createCard = () => ({ type: actions.CREATE_CARD });

export const deleteCard = () => ({ type: actions.DELETE_CARD });

export const selectCard = id => ({ type: actions.SELECT_CARD, id: id });

export const editCard = card => ({ type: actions.EDIT_CARD, card: card });

export const fetchData = () => {
    return dispatch =>
        axios
            .get(
                'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json',
            )
            .then(response => {
                dispatch({
                    type: actions.FETCH_DATA,
                    cards: response.data.slice(0, 15).map(item => {
                        return {
                            id: item.Number,
                            caption: item.Name,
                            text: item.About,
                            selected: false,
                        };
                    }),
                });
            });
};
