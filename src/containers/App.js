import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../components/SignIn';
import Cards from './Cards';
import Err404Page from './Err404Page';
import CardInfo from './CardInfo';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Switch>
                    <Route path="/login" component={SignIn} />
                    <Route path="/" exact component={Cards} />
                    <Route path="/cards/:id" component={CardInfo} />
                    <Route component={Err404Page} />
                </Switch>
            </>
        );
    }
}

export default App;
