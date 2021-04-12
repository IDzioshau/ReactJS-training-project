import {
    CREATE_CARD,
    DELETE_CARD,
    SELECT_CARD,
    EDIT_CARD,
    FETCH_DATA,
    READ_ONLY_MODE,
} from './actionTypes';
import axios from 'axios';

export const createCard = () => ({ type: CREATE_CARD });

export const switchReadOnlyMode = () => ({ type: READ_ONLY_MODE });

export const deleteCard = () => ({ type: DELETE_CARD });

export const selectCard = id => ({ type: SELECT_CARD, payload: { id } });

export const editCard = card => ({ type: EDIT_CARD, payload: { card } });

export const fetchData = () => {
    return dispatch =>
        axios
            .get(
                'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json',
            )
            .then(response => {
                dispatch({
                    type: FETCH_DATA,
                    payload: {
                        cards: response.data.slice(0, 15).map(item => {
                            return {
                                id: item.Number,
                                caption: item.Name,
                                text: item.About,
                                selected: false,
                            };
                        }),
                    },
                });
            });
};
