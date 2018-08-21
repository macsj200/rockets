import React, { Component } from 'react';

export class RocketCard extends Component  {
    render() {
        const { rocket } = this.props;
        const { title, images, topSpeed } = rocket;
        return (
            <div className="col" style={{
                paddingBottom: "1em"
            }}>
                <div className="card">
                <img className="card-img-top" src={images[0]} alt="Rocket" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">This is a very amazing rocket</p>
                    <a href="#" className="btn btn-primary">Order now</a>
                </div>
                </div>  
            </div>
        );
    }
}