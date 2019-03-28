import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    let name = 'Michał';
    return (
      <div className="App">
        <header className='App-header'>
          <h1 className='App-title'>Licznik w ReactJS</h1>
        </header>
        <Counter initValue='10' imie='Adam'/>
        <Counter initValue='20' imie='Karina'/>
        <Counter initValue='108' imie={name}/>

      </div>
    );
  }
}

export default App;
