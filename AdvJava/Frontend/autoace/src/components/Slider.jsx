import React from "react";

import Image1 from './images/Image1.jpg'
import Image2 from './images/Image2.jpg'
import Image3 from './images/Image3.jpg'
import { Carousel } from "react-bootstrap";

function Slider() {
  return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            style={{ height: "85vh" }}
            className="d-block w-100"
            src={Image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 style={{ color: "wheat" }}>AutoAce..</h5>
            <p style={{ color: "wheat" }}>"Regular two wheeler service in India is the key for maintaining top-class bike performance."</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "85vh" }}
            className="d-block w-100"
            src={Image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5 style={{ color: "wheat" }}>Trusted Staff</h5>
            <p style={{ color: "wheat" }}>"We have an assorted range of well-trained auto experts who are experienced in offering the best quality Bike Service Online in India"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "85vh" }}
            className="d-block w-100"
            src={Image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 style={{ color: "wheat" }}>Use of Authentic Parts</h5>
            <p style={{ color: "wheat" }}>
            We have assorted mechanics who care for the bike services and related problems. The authentic parts are labeled, which you can check anytime while the two wheeler servicing takes place.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

export default Slider;
