import {
    CREATE_CARD,
    DELETE_CARD,
    SELECT_CARD,
    EDIT_CARD,
    FETCH_DATA,
} from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    cards: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return { ...state, cards: action.payload.cards };
        case CREATE_CARD:
            return {
                ...state,
                cards: [
                    ...state.cards,
                    {
                        id: uuidv4(),
                        caption: 'new Card',
                        text: '',
                        selected: false,
                    },
                ],
            };
        case DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter(card => !card.selected),
            };
        case EDIT_CARD:
            return {
                ...state,
                cards: state.cards.map(item =>
                    item.id === action.payload.card.id
                        ? {
                              ...item,
                              caption: action.payload.card.caption,
                              text: action.payload.card.text,
                          }
                        : item,
                ),
            };
        case SELECT_CARD:
            return {
                ...state,
                cards: state.cards.map(card =>
                    card.id === action.payload.id
                        ? { ...card, selected: !card.selected }
                        : card,
                ),
            };
        default:
            return state;
    }
};

export default reducer;
