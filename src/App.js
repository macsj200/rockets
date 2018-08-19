import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { RocketList } from './components/RocketList';

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
        <RocketList rockets={rockets} />
      </div>
    );
  }
}

export default App;