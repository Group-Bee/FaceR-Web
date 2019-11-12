import React, { Component } from "react";

export default class AboutProduct extends Component {
  render() {
    return (
      <div>
        <div className='jumbotron' style={{position: 'relative', zIndex: '1'}}>
          <h1 className='display-3'>FaceR</h1>
          <p className='lead'>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classNamees for typography and spacing to space
            content out within the larger container.
          </p>
          <p className="lead">
            <a
              className="btn btn-primary btn-lg"
              href="www.google.com"
              role="button"
            >
              Learn more
            </a>
          </p>
        </div>
      </div>
    );
  }
}
