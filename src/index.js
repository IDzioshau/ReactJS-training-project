import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import CardReducer from './store/reducers/CardReducer';
import AuthReducer from './store/reducers/AuthReducer';
import thunk from 'redux-thunk';

const logger = () => {
    return next => {
        return action => {
            console.log(action.type, action.payload);
            return next(action);
        };
    };
};

const store = createStore(combineReducers({cardReducer: CardReducer, authReducer: AuthReducer}), applyMiddleware(logger, thunk));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
