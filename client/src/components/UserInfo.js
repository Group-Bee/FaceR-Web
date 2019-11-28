import React, { Component } from "react";
import Stripe from "react-stripe-checkout";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'

import TextInput from './TextInput';
import validate from './validate';
import TextArea from './TextArea';
import Email from './Email';
import Select from './Select';


class UserInfo extends Component {
    constructor() {
        super();

        this.state = {
            formIsValid: false,
            formControls: {

                name: {
                    value: '',
                    placeholder: 'Name',
                    valid: false,
                    validationRules: {
                        minLength: 4,
                        isRequired: true
                    },
                    touched: false
                },
                address: {
                    value: '',
                    placeholder: 'Address',
                    valid: false,
                    validationRules: {
                        minLength: 4,
                        isRequired: true
                    },
                    touched: false
                },
                my_email: {
                    value: '',
                    placeholder: 'Email',
                    valid: false,
                    validationRules: {
                        isRequired: true,
                        isEmail: true
                    },
                    touched: false
                },
                gender: {
                    value: '',
                    placeholder: 'Gender',
                    valid: false,
                    touched: false,
                    validationRules: {
                        isRequired: true,
                    },
                    options: [
                        { value: 'male', displayValue: 'Male' },
                        { value: 'female', displayValue: 'Female' }
                    ]
                },

            }

        }
    }


    changeHandler = event => {

        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls[name]
        };
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

        updatedControls[name] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        });

    }


    formSubmitHandler = () => {
        const formData = {};
        for (let formElementId in this.state.formControls) {
            formData[formElementId] = this.state.formControls[formElementId].value;
        }

        console.dir(formData);
    }


    render() {
        return (
            <div style={{backgroundColor: "#1a1a1a"}}>
                <TextInput name="name"
                    placeholder={this.state.formControls.name.placeholder}
                    value={this.state.formControls.name.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.name.touched}
                    valid={this.state.formControls.name.valid}
                />

                <TextArea name="address"
                    placeholder={this.state.formControls.address.placeholder}
                    value={this.state.formControls.address.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.address.touched}
                    valid={this.state.formControls.address.valid}
                />

                <Email name="my_email"
                    placeholder={this.state.formControls.my_email.placeholder}
                    value={this.state.formControls.my_email.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.my_email.touched}
                    valid={this.state.formControls.my_email.valid}
                />

                <Select name="gender"
                    value={this.state.formControls.gender.value}
                    onChange={this.changeHandler}
                    options={this.state.formControls.gender.options}
                    touched={this.state.formControls.gender.touched}
                    valid={this.state.formControls.gender.valid}
                />

                <button onClick={this.formSubmitHandler}
                    disabled={!this.state.formIsValid}
                >
                    Submit
                </button>
            </div>
        );
    }
}

export default UserInfo;