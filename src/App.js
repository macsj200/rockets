import React, { Component } from 'react';
import './App.css';
import saturnv from './saturnv.jpg';
import falconheavy from './falconheavy.jpg';
import { RocketList } from './components/RocketList';

export const RocketContext = React.createContext('rockets');

class App extends Component {
  state = {
    rockets: [
      {
        title: "Falcon Heavy",
        images: [falconheavy],
        _id: 0
      },
      {
        title: "Saturn V",
        images: [saturnv],
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