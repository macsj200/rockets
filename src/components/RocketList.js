import React, { Component } from 'react';
import { RocketCard } from './RocketCard';
import { RocketContext } from '../App';

export class RocketList extends Component {
    render() {
        return (
            <RocketContext.Consumer>
                {
                    rockets => (
                        <div className="row">
                            {
                                rockets.map(rocket => <RocketCard key={rocket._id} rocket={rocket} />)
                            }
                        </div>
                    )
                }
            </RocketContext.Consumer>
        );
    }
}