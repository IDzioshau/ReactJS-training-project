import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import Header from './Header';

class App extends Component {
  state = {
    cards: [
      {caption: "Caption1", text: "any text"},
      {caption: "Caption2", text: "any text"},
      {caption: "Caption3", text: "any text"},
      {caption: "Caption4", text: "any text"},
      {caption: "Caption5", text: "any text"},
      {caption: "Caption6", text: "any text"},
      {caption: "Caption7", text: "any text"},
      {caption: "Caption8", text: "any text"}
    ],
    readOnlyMode: false
  }

  switchEditMode = () => {
    this.setState({
      readOnlyMode: !this.state.readOnlyMode
    })
  }

  cards = () => {
    return (
      <div>
        {this.state.cards.map(card => {
          return <Card 
            caption={card.caption}
            text={card.text}
            readOnlyMode={this.state.readOnlyMode} />
        })}
      </div>
    )
  };

  render() {
    return (
      <>
        <Header />
        <div className="cards">
          <input id="readOnlyMode" type="checkbox" onChange={this.switchEditMode} checked={this.state.readOnlyMode} /><label htmlFor="readOnlyMode">Read-Only</label>
          {this.cards()}
        </div>
      </>
    )
  }
  
};

export default App;
