import React, { Component } from 'react';
import './App.css';
import atlasv from './atlasv.jpg';
import falconheavy from './falconheavy.jpg';
import { RocketList } from './components/RocketList';

export const RocketContext = React.createContext('rockets');

function DisplayDuck(props) {
  return <h3>{props.duck.name}</h3>
}

function ListDucks(props) {
  return props.ducks.map(duck => <DisplayDuck duck={duck} />)
}

function DuckScreen(props) {
  return <ListDucks ducks={props.ducks} />
}

function AppContainer(props) {
  return <DuckScreen ducks={props.ducks} />
}

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
      <RocketContext.Provider value={rockets}>
        <div className="container">
          <DuckScreen ducks={[ {name: 'Donald' }, { name: 'Scrooge McDuck' }]} />
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