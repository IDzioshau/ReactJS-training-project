import React from 'react';
import './App.css';
import Card from './Card';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header />
      <div className="cards">
        <Card caption="Caption1" text="any text" />
      </div>
    </div>
  );
}

export default App;
