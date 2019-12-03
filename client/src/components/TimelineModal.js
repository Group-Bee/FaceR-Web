import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const axios = require('axios');

class TimelineModal extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            date: '', 
            title: '',
            subtitle: '',
            description: ''
        }
    }

    dateUpdate = (event) => {
        this.setState({
            date: event.target.value
        })
    }

    titleUpdate = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    subtitleUpdate = (event) => {
        this.setState({
            subtitle: event.target.value
        })
    }

    descriptionUpdate = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    addTimelineData = () => {
        // Make a request to add testimonial data
        axios.post('/About/Timeline', function(req, res) {
            const timelineItem = req.body
            timelineItem.push({
                date: timelineItem.state.date, 
                title: timelineItem.state.title,
                subtitle: timelineItem.state.subtitle,
                description: timelineItem.state.description
            })
        })
            .then(function (response) {
                // handle success
                alert("Sucessful addition to database!")
            })
            .catch(function (error) {
                // handle error
                console.log(error);
        });
    }

    // deleteTestimonial = () => {
    //     // Make a request to add testimonial data
    //     //var api = '/About/Testimonials/' + this.state.id
    //     axios.delete('/About/Testimonials/' + this.state.id)
    //         .then(function (response) {
    //             // handle success
    //             alert(response.data.message)
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //     });
    // }

    // updateTestimonial = () => {
    //     // Make a request to add testimonial data
    //     axios.put('/About/Testimonials/' + this.state.id, {
    //         testimonial: this.state.testimonial,
    //         name: this.state.name
    //     })
    //         .then(function (response) {
    //             // handle success
    //             alert("Sucessful update to database!" + 
    //             "\nTestimonial id: " + response.data._id + 
    //             "\nUpdated Consumer Testimonial: " + response.data.testimonial +
    //             "\nUpdated Consumer Name: " + response.data.name)
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //     });
    // }

render() {
    return (
        <>
            <Modal size="lg" show={this.props.modalOpen} onHide={this.props.handleModalOpen} centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2>Add/Delete Timeline Data</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Date</h4>
                <form>
                    <input
                        class="form-control"
                        type = "text"
                        value = {this.state.date}
                        placeholder = "year"
                        onChange = {this.dateUpdate.bind(this)}
                    />
                </form>
                <h4>Title</h4>
                <form>
                    <input
                        class="form-control"
                        type = "text"
                        value = {this.state.title}
                        placeholder = "name of lock"
                        onChange = {this.titleUpdate.bind(this)}
                    />
                </form>
                <h4>Subtitle</h4>
                <form>
                    <input
                        class="form-control"
                        type = "text"
                        value = {this.state.subtitle}
                        placeholder = "anything specific"
                        onChange = {this.subtitleUpdate.bind(this)}
                    />
                </form>
                <h4>Description</h4>
                <form>
                    <input
                        class="form-control"
                        type = "text"
                        value = {this.state.description}
                        placeholder = "lock description"
                        onChange = {this.descriptionUpdate.bind(this)}
                    />
                </form>
            </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={this.addTimelineData}>
                    Add
                 </Button>
                 {/* <Button variant="warning" onClick={this.updateTestimonial}>
                    Update
                 </Button>
                 <Button variant="primary" onClick={this.deleteTestimonial}>
                    Delete
                 </Button> */}
                 <Button variant="danger" onClick={this.props.handleModalOpen}>
                    Cancel
                 </Button>
              </Modal.Footer>
          </Modal>
        </>
     );
}
}

export default TimelineModal;