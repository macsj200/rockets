import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { RocketList } from './components/RocketList';

export const RocketContext = React.createContext('rockets');

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
      <RocketContext.Provider value={rockets}>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1 className="text-center">Rockets</h1>
            </div>
          </div>
          <RocketList />
        </div>
      </RocketContext.Provider>
    );
  }
}

export default App;