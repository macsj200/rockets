import React, { Component } from 'react';
import { RocketCard } from './RocketCard';

export class RocketList extends Component {
    render() {
        const { rockets } = this.props;
        return (
            <div className="row">
                {
                    rockets.map(rocket => <RocketCard key={rocket._id} rocket={rocket} />)
                }
            </div>
        );
    }
}