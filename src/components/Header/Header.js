import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = props => (
    <div className="app-header">
        <h1 className="h1-header">React App</h1>
        <nav className="nav-bar">
            <NavLink to="/" exact activeClassName="active">
                Home
            </NavLink>
            <NavLink to="/login" activeClassName="active">
                Sign In
            </NavLink>
        </nav>
        <div className="badge">
            Cards <p>{props.cards.length}</p>
        </div>
    </div>
);

const mapStatetoProps = state => ({
    cards: state.cards,
});

export default connect(mapStatetoProps)(Header);
