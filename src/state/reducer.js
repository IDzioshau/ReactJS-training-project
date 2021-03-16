import * as actions from './actions';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    cards: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.fetchData:
            return { cards: action.cards };
        case actions.createCard:
            return {
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
        case actions.deleteCard:
            return { cards: state.cards.filter(card => !card.selected) };
        case actions.editCard:
            return {
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
        case actions.selectCard:
            return {
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
