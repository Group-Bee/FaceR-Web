import React, { Component } from 'react'
import data from '../data/data'

class PayEntry extends React.Component {
    render() {
        const entries = data.map(element => {
            return (
                <div className="test" style={{ textAlign: 'left', height: '400px' }} key={element.id}>
                    <p>Store item to buy here</p>
                    <img src={element.image} width={300} height={300}></img>
                    <h3 style={{ color: 'white', float: 'left', zIndex: '100' }}>{element.price}</h3><p align="center" style={{ transform: 'translateY(-400%)' }}>{element.description}</p>
                    <button type="button" className="btn btn-primary" style={{ float: 'right', transform: 'translateY(-500%)' }} onClick={this.props.add.bind(this, element)}>
                        Add to Cart
                    </button>
                    <br></br>
                </div>
            )
        })
        return (
            <div>{entries}</div>
        )
    }
}

export default PayEntry