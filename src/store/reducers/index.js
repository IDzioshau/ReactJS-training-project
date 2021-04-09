import CardReducer from './CardReducer';
import AuthReducer from './AuthReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cardReducer: CardReducer,
    authReducer: AuthReducer,
});

export default rootReducer;
