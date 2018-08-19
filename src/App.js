import React, { Component } from 'react';
import './App.css';
import { RocketCard } from './components/RocketCard';
import logo from './logo.svg';

class App extends Component {
  render() {
    const images = [logo];
    const rockets = [
      {
        title: "Falcon Heavy",
        images,
        _id: 0
      },
      {
        title: "Falcon Light",
        images,
        _id: 1
      }
    ];
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1 className="text-center">Rockets</h1>
          </div>
        </div>
        <div className="row">
          {
            rockets.map(rocket => <RocketCard key={rocket._id} rocket={rocket} />)
          }
        </div>
      </div>
    );
  }
}

export default App;