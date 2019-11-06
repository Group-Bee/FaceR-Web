import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

//Bootstrap documentation on how to create carousel form scratch: https://getbootstrap.com/docs/4.0/components/carousel/
//Bootstrap documentation on how to create carousel using pre-made bootstrap components: https://react-bootstrap.github.io/components/carousel/

export default class TestimonialsCarousel extends Component {
  render() {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            //src="/images/CyberLock.jpg"
            src="images/CyberLock_Cropped.jpeg"
            alt="Testimonial"
          />
          <Carousel.Caption>
            <h3 class="row justify-content-start text-white">First customer testimonial</h3>
            <p class="row justify-content-start">-1st customer name</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            //src="/images/CyberLock.jpg"
            src="images/CyberLock_Cropped.jpeg"
            alt="Testimonial"
          />
      
          <Carousel.Caption>
            <h3 class="row justify-content-start text-white">Second customer testimonial</h3>
            <p class="row justify-content-start">-2nd customer name</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            //src="/images/CyberLock.jpg"
            src="images/CyberLock_Cropped.jpeg"
            alt="Testimonial"
          />
      
          <Carousel.Caption>
            <h3 class="row justify-content-start text-white">Third customer testimonial</h3>
            <p class="row justify-content-start">-3rd customer name</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
