import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const axios = require('axios');

class TestimonialModal extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            testimonial: '',
            name: '',
            id: '',
            pswd: ''
        }
    }

    onClose = () => {
        this.props.handleModalOpen();
        this.setState({
            testimonial: '',
            name: '',
            id: '',
            pswd: ''
        })
    }

    nameUpdate = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    testimonialUpdate = (event) => {
        this.setState({
            testimonial: event.target.value
        })
    }

    idUpdate = (event) => {
        this.setState({
            id: event.target.value
        })
    }

    pswdUpdate = (event) => {
        this.setState({
            pswd: event.target.value
        })
    }

    //Executes when the 'Add' button is clicked, adding the testimonial to the database and returning the information stored to the database
    addTestimonial = () => {
        //1st check if the correct password was entered
        if (this.state.pswd !== '12345'){
            alert("You have not entered the correct password.");
            return;
        }
        // Make a request to add testimonial data
        axios.post('/About/Testimonials', {
            testimonial: this.state.testimonial,
            name: this.state.name
        })
            .then(function (response) {
                // handle success
                alert("Sucessful addition to database!" + 
                "\nTestimonial id: " + response.data._id + 
                "\nConsumer Testimonial: " + response.data.testimonial +
                "\nConsumer Name: " + response.data.name)
            })
            .catch(function (error) {
                alert("Oops! It looks like an error occured.\n" +
                "Make sure you have filled in the following necessary fields: testimonial, data");
                // handle error
                console.log(error);
        });
    }

    //Executes when the 'Delete' button is clicked, deleting the testimonial from the database and returning a confirmation
    deleteTestimonial = () => {
        //1st check if the correct password was entered
        if (this.state.pswd !== '12345'){
            alert("You have not entered the correct password.");
            return;
        }
        // Make a request to add testimonial data
        //var api = '/About/Testimonials/' + this.state.id
        axios.delete('/About/Testimonials/' + this.state.id)
            .then(function (response) {
                // handle success
                alert(response.data.message)
            })
            .catch(function (error) {
                alert("Oops! It looks like an error occured.\n" +
                "Make sure you have filled in the following necessary field: id");
                // handle error
                console.log(error);
        });
    }

    //Executes when the 'Update' button is clicked, updating the testimonial in the database and returning the information stored to the database
    updateTestimonial = () => {
        //1st check if the correct password was entered
        if (this.state.pswd !== '12345'){
            alert("You have not entered the correct password.");
            return;
        }
        // Make a request to add testimonial data
        axios.put('/About/Testimonials/' + this.state.id, {
            testimonial: this.state.testimonial,
            name: this.state.name
        })
            .then(function (response) {
                // handle success
                alert("Sucessful update to database!" + 
                "\nTestimonial id: " + response.data._id + 
                "\nUpdated Consumer Testimonial: " + response.data.testimonial +
                "\nUpdated Consumer Name: " + response.data.name)
            })
            .catch(function (error) {
                alert("Oops! It looks like an error occured.\n" +
                "Make sure you have filled in the following necessary fields: id");
                // handle error
                console.log(error);
        });
    }

render() {
    let addButton;
    let updateButton;
    let deleteButton;

    //These if statements will determine if a button is being displayed to the modal or not, depending on if the correct information is entered
    if (this.state.testimonial !== '' && this.state.name !== ''){
        addButton = <Button variant="success" onClick={this.addTestimonial}>Add</Button>
    } else{
        addButton = ''
    }

    if (this.state.testimonial !== '' && this.state.name !== '' && this.state.id !== ''){
        updateButton = <Button variant="warning" onClick={this.updateTestimonial}>Update</Button>
    } else{
        updateButton = ''
    }

    if (this.state.id !== ''){
        deleteButton = <Button variant="primary" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.deleteTestimonial() } }>Delete</Button>
    } else{
        deleteButton = ''
    }

    return (
        <>
            <Modal size="lg" show={this.props.modalOpen} onHide={this.onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2>Add/Delete/Update a Testimonial</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Testimonial</h4>
                <form>
                    <input
                        class="form-control"
                        type = "text"
                        value = {this.state.testimonial}
                        placeholder = "Testimonial"
                        onChange = {this.testimonialUpdate.bind(this)}
                    />
                </form>
                <h4>Consumer's Name</h4>
                <form>
                    <input
                        class="form-control"
                        type = "text"
                        value = {this.state.name}
                        placeholder = "Name"
                        onChange = {this.nameUpdate.bind(this)}
                    />
                </form>
                <h4>Testimonial Id (needed for update/deletion)</h4>
                <form>
                    <input
                        class="form-control"
                        type = "text"
                        value = {this.state.id}
                        placeholder = "Id"
                        onChange = {this.idUpdate.bind(this)}
                    />
                </form>
                <h4>Password (needed to make changes)</h4>
                <form>
                    <input
                        class="form-control"
                        type = "text"
                        value = {this.state.pswd}
                        placeholder = "Password"
                        onChange = {this.pswdUpdate.bind(this)}
                    />
                </form>
            </Modal.Body>
              <Modal.Footer>
                {addButton}
                {updateButton}
                {deleteButton}
                 <Button variant="danger" onClick={this.onClose}>
                    Cancel
                 </Button>
              </Modal.Footer>
          </Modal>
        </>
     );
}
}

export default TestimonialModal;