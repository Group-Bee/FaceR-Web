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
            id: ''
        }
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

    addTestimonial = () => {
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
                // handle error
                console.log(error);
        });
    }

    deleteTestimonial = () => {
        // Make a request to add testimonial data
        //var api = '/About/Testimonials/' + this.state.id
        axios.delete('/About/Testimonials/' + this.state.id)
            .then(function (response) {
                // handle success
                alert(response.data.message)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
        });
    }

    updateTestimonial = () => {
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
                // handle error
                console.log(error);
        });
    }

render() {
    return (
        <>
            <Modal size="lg" show={this.props.modalOpen} onHide={this.props.handleModalOpen} centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2>Add/Delete a Testimonial</h2>
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
                        placeholder = "Name"
                        onChange = {this.idUpdate.bind(this)}
                    />
                </form>
            </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={this.addTestimonial}>
                    Add
                 </Button>
                 <Button variant="warning" onClick={this.updateTestimonial}>
                    Update
                 </Button>
                 <Button variant="primary" onClick={this.deleteTestimonial}>
                    Delete
                 </Button>
                 <Button variant="danger" onClick={this.props.handleModalOpen}>
                    Cancel
                 </Button>
              </Modal.Footer>
          </Modal>
        </>
     );
}
}

export default TestimonialModal;