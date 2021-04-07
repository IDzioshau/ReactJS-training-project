import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../store/reducers/AuthReducer';

const Header = ({ cards, currentUser, logOut, admin }) => (
    <div className="app-header">
        <h1 className="h1-header">React App</h1>
        <nav className="nav-bar">
            <NavLink to="/" exact activeClassName="active">
                Home
            </NavLink>
            {currentUser && currentUser === admin.username && (
                <NavLink to="/settings">Settings</NavLink>
            )}
            <NavLink to="/login" activeClassName="active">
                {currentUser ? (
                    <span onClick={logOut}>Log Out</span>
                ) : (
                    <span>Sign In</span>
                )}
            </NavLink>
        </nav>
        <div className="badge">
            Cards <p>{cards.length}</p>
        </div>
        {currentUser && (
            <div>
                <p className="welcome">Welcome, {currentUser}</p>
            </div>
        )}
    </div>
);

const mapStatetoProps = state => ({
    admin: state.authReducer.admin,
    cards: state.cardReducer.cards,
    currentUser: state.authReducer.currentUser,
});

const mapDispatchToProps = {
    logOut,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Header);
