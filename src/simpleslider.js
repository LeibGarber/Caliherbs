import React, { Component } from "react";
import Slider from "react-slick";
import field from "./imgs/Marijuana_Farm_02Fix.jpg";
import outdoor from "./imgs/outdoor.jpg";

const settings = {
  dots: true,
  infinite: true,
  speed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  fade: true,
  pauseOnDotsHover: true
};

class Simpleslider extends Component {
  render() {
    return (
      <div>
        <Slider {...settings}>
          <div className="pictureFrame">
            <img className="sliderImage" src={field} />
            <h1>Topshelf cannabis for connisuers</h1>
          </div>

          <div className="pictureFrame">
            <img className="sliderImage" src={outdoor} />
            <h1>Californias finest organic meds</h1>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Simpleslider;
