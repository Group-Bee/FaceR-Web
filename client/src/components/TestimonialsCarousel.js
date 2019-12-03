import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import data from '../data/testimonial.data';

import TestimonialModal from './TestimonialModal'
const axios = require('axios');


//Bootstrap documentation on how to create carousel form scratch: https://getbootstrap.com/docs/4.0/components/carousel/
//Bootstrap documentation on how to create carousel using pre-made bootstrap components: https://react-bootstrap.github.io/components/carousel/

/*
Frontend implementation of testimonials carousel.
Data for testimonials is stored at client/src/data/testimonial.data.js. If you want to adjust the data being displayed, change that file.
*/
/*
export default class TestimonialsCarousel extends Component {
  render() {
    //To change the number of testimonials being displayed, adjust the 2nd number in the 'slice()' function
    const testimonials = data.slice(0,3).map(element => {
      return(
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/CyberLock_Cropped.jpeg"
          alt="Testimonial"
        />
        <Carousel.Caption>
          <h3 class="row justify-content-start text-white">{element.testimonial}</h3>
          <p class="row justify-content-start">-{element.name}</p>
        </Carousel.Caption>
      </Carousel.Item>
      )
    })
    return (
    <Carousel>{testimonials}</Carousel>
    );
  }
}
*/

/*
Backend implementation of testimonials carousel.
Data for testimonials is stored at mongoDB Atlas database (Cluster0, DB = FaceR, Collection = testimonials). If you want to adjust the data being displayed, change the documents in that database.
*/
///*
// Make a request for testimonial data
axios.get('/About/Testimonials')
  .then(function (response) {
    // handle success
    console.log(response);
    data = response;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

class TestimonialsCarousel extends Component {
  state = {
    modalOpen: false
 }

 handleModalOpen = () => {
    this.setState((prevState) => {
       return{
          modalOpen: !prevState.modalOpen
       }
    })
 }
  render() {
    //To change the number of testimonials being displayed, adjust the 2nd number in the 'slice()' function
    const testimonials = data.slice(0,3).map(element => {
      return(
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/CyberLock.jpg"
          alt="Testimonial"
        />
        <Carousel.Caption>
          <h3 class="row justify-content-start text-white">{element.testimonial}</h3>
          <p class="row justify-content-start">-{element.name}</p>
        </Carousel.Caption>
      </Carousel.Item>
      )
    })
    return (
    <div class="card">
        <Carousel>{testimonials}</Carousel>
        <div class="row">
        <div class="col-md-0">
          <button
                style={{
                  width: "1%",
                  borderRadius: 0,
                  borderWidth: 0,
                  marginTop: 0,
                  backgroundColor: "black"
                }}
                onClick={this.handleModalOpen}
              >
          </button>
        </div>
        </div>
        <TestimonialModal
           modalOpen={this.state.modalOpen}
           handleModalOpen={this.handleModalOpen}
        />
    </div>
    );
  }
}

export default TestimonialsCarousel;
//*/