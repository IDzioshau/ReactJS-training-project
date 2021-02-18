import React, { useContext } from 'react';
import './Header.css';
import CardsContext from '../../context/CardsContext';

const Header = () => {
    const context = useContext(CardsContext);

    return (
        <div className="app-header">
            <h1 className="h1-header">React App</h1>
            <div className="badge">
                Cards <p>{context.cards.length}</p>
            </div>
        </div>
    );
};

export default Header;
