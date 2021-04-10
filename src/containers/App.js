import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './SignIn';
import Cards from './Cards';
import Err404Page from './Err404Page';
import CardInfo from './CardInfo';
import Settings from './Settings';
import { connect } from 'react-redux';
import { authorize } from '../store/reducers/AuthReducer';

class App extends Component {
    componentDidMount() {
        if (localStorage.getItem('auth_token')) {
            this.props.authorize(JSON.parse(localStorage.getItem('auth_token')));
        }
    }

    render() {
        const { isAdmin } = this.props;
        return (
            <>
                <Header />
                <Switch>
                    <Route path="/login" component={SignIn} />
                    <Route path="/" exact component={Cards} />
                    <Route path="/cards/:id" component={CardInfo} />
                    <Route
                        path="/settings"
                        render={() =>
                            isAdmin ? (
                                <Settings />
                            ) : (
                                <Redirect to="/" />
                            )
                        }
                    />
                    <Route component={Err404Page} />
                </Switch>
            </>
        );
    }
}

const mapStateToProps = state => ({
    isAdmin: state.authReducer.isAdmin,
});

const mapDispatchToProps = { authorize };

export default connect(mapStateToProps, mapDispatchToProps)(App);
