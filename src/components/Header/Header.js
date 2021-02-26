import React, { useContext } from 'react';
import './Header.css';
import CardsContext from '../../context/CardsContext';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const context = useContext(CardsContext);

    return (
        <div className="app-header">
            <h1 className="h1-header">React App</h1>
            <nav className="nav-bar">
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/login" activeClassName="active">Sign In</NavLink>
            </nav>
            <div className="badge">
                Cards <p>{context.cards.length}</p>
            </div>
        </div>
    );
};

export default Header;
