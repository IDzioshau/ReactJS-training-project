import React from 'react';
import './App.css';
import Card from './Card';
import Header from './Header';

const App = () => (
    <>
      <Header />
      <div className="cards">
        <Card caption="Caption1" text="any text" />
      </div>
    </>
  );

export default App;
