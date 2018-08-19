import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { RocketList } from './components/RocketList';

class App extends Component {
  state = {
    rockets: [
      {
        title: "Falcon Heavy",
        images: [logo],
        _id: 0
      },
      {
        title: "Falcon Light",
        images: [logo],
        _id: 1
      }
    ]
  }
  render() {
    const { rockets } = this.state;
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