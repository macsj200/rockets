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
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>  
            </div>
        );
    }
}