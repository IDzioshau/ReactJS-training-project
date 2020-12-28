import React from "react";
import './App.css';
import Card from './Card/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1-header">React App</h1>
      </header>
      <Card caption="Caption1" text="any text"/>
    </div>
  );
}

export default App;
