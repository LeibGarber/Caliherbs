import React, { Component } from "react";
import Slider from "react-slick";
import field from './imgs/Marijuana_Farm_02.jpg'

const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1
};

class Simpleslider extends Component {
  render() {
    return (

        <div>
          <Slider  {...settings}>
            <div>
              <h1 className="test">wht the actual fuck</h1>
              
            </div>

            <div>
              <h1 className="test">???</h1>
              
            </div>
            
          </Slider>
        </div>

    );
  }
}

export default Simpleslider;


