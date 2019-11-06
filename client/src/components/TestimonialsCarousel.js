import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

export default class TestimonialsCarousel extends Component {
  render() {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/CyberLock.jpg"
            alt="Testimonial"
          />
          <Carousel.Caption>
            <h3 class="text-white">First customer testimonial</h3>
            <p>-1st customer name</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/CyberLock.jpg"
            alt="Testimonial"
          />
      
          <Carousel.Caption>
            <h3 class="text-white">Second customer testimonial</h3>
            <p>-2nd customer name</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/CyberLock.jpg"
            alt="Testimonial"
          />
      
          <Carousel.Caption>
            <h3 class="text-white">Third customer testimonial</h3>
            <p>-3rd customer name</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
