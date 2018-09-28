import React, { Component } from 'react';
import './App.css';
import atlasv from './atlasv.jpg';
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
        title: "Atlas V",
        images: [atlasv],
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
        <RocketList rockets={rockets} /> {/* prop drilling */}
      </div>
    );
  }
}

export default App;