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
          src="images/GreyGradient-Background-Slim.jpg"
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

//This axios function is used to grab the testimonials data from the backend API
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

 //This function will display or hide the testimonials modal when the secret button is selected
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
        {/* This is the background image of each carousel element. To adjust the image, change 'src' */}
        <img
          className="d-block w-100"
          src="images/GreyGradient-Background-Slim.jpg"
          alt="Testimonial"
        />
        <Carousel.Caption>
          {/* These two lines determine how the testimonial and customer name are being displayed.
          You can adjust the 'class' attribute to change how the text is set up*/}
          <h3 class="row justify-content-start text-white">{element.testimonial}</h3>
          <p class="row justify-content-start">-{element.name}</p>
        </Carousel.Caption>
      </Carousel.Item>
      )
    })
    return (
    <div class="card">
        <Carousel>{testimonials}</Carousel>
        {/* The next 2 div elements and what is encapsulated in them represent the testimonials modal button.
        This is the secret button that allows you to add/update/delete testimonials from the website (without having to go to MongoDB) */}
        <div class="row">
        <div class="col-md-12">
          <button
                style={{
                  width: "1%",
                  borderRadius: 0,
                  borderWidth: 0,
                  marginTop: 0,
                  //If you are having trouble finding the button, you can change its background color to black
                  //backgroundColor: "black",
                  backgroundColor: "transparent"
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