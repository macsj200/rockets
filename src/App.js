import React, { Component } from 'react';
import './App.css';
import { RocketCard } from './components/RocketCard';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1 className="text-center">Rockets</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <RocketCard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;