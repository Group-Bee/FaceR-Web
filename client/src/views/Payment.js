import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Stripe from 'react-stripe-checkout'
//import { CardForm } from 'react-payment';

let loadedStripe = false;

class Payment extends Component {

    
    render() {
        function handleToken(token, addresses) {
            console.log({ token, addresses })
        }    
    
        return (
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>
                <div style={{height: "90px", backgroundColor: '#1a1a1a'}}>
                    Heaare
                </div>
                <div className="bg-dartrk" style = {{float: 'left', width: '100%'}}>
                    <h1 style = {{float: 'left', color: 'white'}}>Locks</h1>
                </div>
                <div className = "bg-dark" style = {{height: '5000px'}}>
                    </div>
                <Stripe
                    stripeKey="pk_test_ANdQ4Fctiutj9s6qvco8YrQT00oZrW6PbQ"
                    token={handleToken}
                    billingAddress
                    shippingAddress
                    amount={100}
                    style={{float: "right", backgroundcolor: "black"}}
                />
                <Footer />
            </div>
        )
    }
}

export default Payment