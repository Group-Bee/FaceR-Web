import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import PayEntry from "../components/PayEntry"

let loadedStripe = false;

class Payment extends Component {


    render = function () {
        const incart = this.props

        function handleToken(token, addresses) {
            console.log({ token, addresses })
        }

        return (
            <div className="App bg-dark">
                <header className="App-header">
                    <Header  incart={this.props.incart} add={this.props.add.bind(this)}/>
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
                <div>
                    <PayEntry incart={this.props.incart} add={this.props.add.bind(this)}></PayEntry>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Payment