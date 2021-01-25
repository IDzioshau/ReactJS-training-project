import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import Header from './Header';

class App extends Component {
    state = {
        cards: [
            { id: 1, caption: 'Caption1', text: 'any text' },
            { id: 2, caption: 'Caption2', text: 'any text' },
            { id: 3, caption: 'Caption3', text: 'any text' },
            { id: 4, caption: 'Caption4', text: 'any text' },
            { id: 5, caption: 'Caption5', text: 'any text' },
            { id: 6, caption: 'Caption6', text: 'any text' },
            { id: 7, caption: 'Caption7', text: 'any text' },
            { id: 8, caption: 'Caption8', text: 'any text' },
        ],
        readOnlyMode: false,
    };

    switchEditMode = () => {
        this.setState({
            readOnlyMode: !this.state.readOnlyMode,
        });
    };

    cards = () => (
        <div>
            {this.state.cards.map((card) => {
                return (
                    <Card
                        key={card.id}
                        caption={card.caption}
                        text={card.text}
                        readOnlyMode={this.state.readOnlyMode}
                    />
                );
            })}
        </div>
    );

    render() {
        return (
            <>
                <Header />
                <div className="cards">
                    <input
                        id="readOnlyMode"
                        type="checkbox"
                        onChange={this.switchEditMode}
                        checked={this.state.readOnlyMode}
                    />
                    <label htmlFor="readOnlyMode">Read-Only</label>
                    {this.cards()}
                </div>
            </>
        );
    }
}

export default App;
