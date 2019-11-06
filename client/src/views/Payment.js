import React, { Component } from 'react'
import Header from "../components/Header"
import { CardForm } from 'react-payment';

let loadedStripe = false;

class Payment extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                {/*<CardForm />*/}
            </div>
        )
    }
}

export default Payment