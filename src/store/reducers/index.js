import CardReducer from './CardReducer';
import AuthReducer from './AuthReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    cardReducer: CardReducer,
    authReducer: AuthReducer,
});
