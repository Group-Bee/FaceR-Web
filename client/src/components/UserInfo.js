import React, { Component } from "react";
import Stripe from "react-stripe-checkout";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'



class UserInfo extends Component {
constructor(props){
    super(props)
    this.state={
        selectedOption: ''
    }
}


    handleOptionChange(changeEvent) {
    this.setState({
        selectedOption: changeEvent.target.value
    });
}

render() {
    return (
        <div style={{ backgroundColor: "#1a1a1a" }}>
            <div className="form-group">
                <input
                    id="name"
                    name="name"
                    class="form-control"
                    type="text"
                    placeholder="Your name"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    id="address"
                    name="address"
                    class="form-control"
                    type="text"
                    placeholder="Your address"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    id="email"
                    name="email"
                    class="form-control"
                    type="text"
                    placeholder="Your email"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    id="gender"
                    name="gender"
                    class="form-control"
                    type="text"
                    placeholder="Gender"
                    required
                />
            </div>
            <button className="btn btn-primary" style={{backgroundColor: 'grey'}} type="submit">Save</button>
        </div>
    );
}
}

export default UserInfo;