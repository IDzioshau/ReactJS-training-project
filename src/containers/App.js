import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import { CardsContextProvider } from '../context/CardsContext';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../components/SignIn';
import Cards from './Cards';
import Err404Page from './Err404Page';

class App extends Component {
    render() {
        return (
            <CardsContextProvider>
                <Header />
                <Switch>
                    <Route path="/login" component={SignIn} />
                    <Route path="/" exact component={Cards} />
                    <Route component={Err404Page} />
                </Switch>
            </CardsContextProvider>
        );
    }
}

export default App;
