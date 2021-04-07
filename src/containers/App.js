import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignIn from '../components/SignIn';
import Cards from './Cards';
import Err404Page from './Err404Page';
import CardInfo from './CardInfo';
import Settings from './Settings';
import { connect } from 'react-redux';
import { authorize } from '../store/reducers/AuthReducer';

class App extends Component {
    componentDidMount() {
        if (localStorage.getItem('auth_token')) {
            this.props.authorize(localStorage.getItem('auth_token'));
        }
    }

    render() {
        const { currentUser, admin } = this.props;
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
                            currentUser && currentUser === admin.username ? (
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
    admin: state.authReducer.admin,
    currentUser: state.authReducer.currentUser,
});

const mapDispatchToProps = { authorize };

export default connect(mapStateToProps, mapDispatchToProps)(App);
