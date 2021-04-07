import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../store/reducers/AuthReducer';

const Header = ({ cards, currentUser, logOut }) => (
    <div className="app-header">
        <h1 className="h1-header">React App</h1>
        <nav className="nav-bar">
            <NavLink to="/" exact activeClassName="active">
                Home
            </NavLink>
            <NavLink to="/login" activeClassName="active">
                {currentUser ? <span onClick={logOut}>Log Out</span> : <span>Sign In</span>}
            </NavLink>
        </nav>
        <div className="badge">
            Cards <p>{cards.length}</p>
        </div>
        {currentUser && (
            <div>
                {currentUser.role === 'ADMIN' && (
                    <NavLink to="/settings">Settings</NavLink>
                )}
                <p className="welcome">Welcome, {currentUser.username}</p>
            </div>
        )}
    </div>
);

const mapStatetoProps = state => ({
    cards: state.cardReducer.cards,
    currentUser: state.authReducer.currentUser,
});

const mapDispatchToProps = {
    logOut,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Header);
