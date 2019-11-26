import React, { Component } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import AboutProduct from "../components/AboutProduct";
import Footer from "../components/Footer";
import "../App.css";
import "../bootstrap.min.css";


export default class ConfirmPayment extends Component {
    render() {
        return (
            <div>
                <Header incart={this.props.incart} add={this.props.add.bind(this)} remove={this.props.remove.bind(this)} />
                <Footer />
            </div>
        )
    }
}
