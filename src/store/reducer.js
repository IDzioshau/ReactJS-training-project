import * as actions from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    cards: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_DATA:
            return { ...state, cards: action.cards };
        case actions.CREATE_CARD:
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
        case actions.DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter(card => !card.selected),
            };
        case actions.EDIT_CARD:
            return {
                ...state,
                cards: state.cards.map(item =>
                    item.id === action.card.id
                        ? {
                              ...item,
                              caption: action.card.caption,
                              text: action.card.text,
                          }
                        : item,
                ),
            };
        case actions.SELECT_CARD:
            return {
                ...state,
                cards: state.cards.map(card =>
                    card.id === action.id
                        ? { ...card, selected: !card.selected }
                        : card,
                ),
            };
        default:
            return state;
    }
};

export default reducer;
