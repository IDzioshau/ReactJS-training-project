import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import { CardsContextProvider } from '../context/CardsContext';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../components/SignIn';
import Cards from './Cards';

class App extends Component {
    render() {
        return (
            <CardsContextProvider>
                <Header />
                <Switch>
                    <Route path="/login" component={SignIn} />
                    <Route path="/" exact component={Cards} />
                    <Route render={() => (<h1>Not Found</h1>)} />
                </Switch>
            </CardsContextProvider>
        );
    }
}

export default App;
