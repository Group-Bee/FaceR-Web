import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import PayEntry from "../components/PayEntry"
import Stripe from 'react-stripe-checkout'
//import { CardForm } from 'react-payment';

let loadedStripe = false;

class Payment extends Component {


    render = function () {
        function handleToken(token, addresses) {
            console.log({ token, addresses })
        }

        let elements = []
        for (let i = 0; i < 6; i++) {
            elements.push(i)
        }
        let render_elements = elements.map(elem => {
            console.log('render element', elements.length)
            return (
                <div>
                    <PayEntry/>
                    <button type="button" className="btn btn-primary" style={{float: 'right', transform: 'translateY(-500%)'}}>
                        Add to Cart
                    </button>
                </div>)
        }
        )

        return (
            <div className="App bg-dark">
                <header className="App-header">
                    <Header />
                </header>
                <div style={{ height: "90px", backgroundColor: '#1a1a1a' }}>
                    Heaare
                </div>
                <div className="bg-dartrk" style={{ float: 'left', width: '100%' }}>
                    <h1 style={{ float: 'left', color: 'white' }}>Locks</h1>
                </div>
                <div className="bg-dark" style={{ height: '50px' }}>
                </div>
                <br></br>
                <br></br>
                <br></br>
                {render_elements}
                <Footer />
            </div>
        )
    }
}

export default Payment