import React, { Component } from "react";
import Simpleslider from "./simpleslider";
import nug from "./imgs/nug1.jpg";
import diamonds from "./imgs/diamonds.jpg";
import purps from "./imgs/purplePunch.jpg";
import dep from "./imgs/cloneDep.jpg";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="sliderBox">
          <Simpleslider />
        </div>

        <section className="our-work">
          <h3 className="title">Fire for the people</h3>
          <p>
            If we wouldn't smoke it, we would't flip it. These are some of the
            tastiest nugs to pass through our lungs as of late. Trust. When you
            blow trees with us, you only burn the best. From farm to bong, these
            flowers have been treated with the highest level of care. But you
            don't have to take our word for it. Put us to the test!
          </p>
          <br />

          <ul className="grid">
            <li className="small" style={{ backgroundImage: `url(${nug})` }} />
            <li
              className="large"
              style={{ backgroundImage: `url(${diamonds})` }}
            />
            <li className="large" style={{ backgroundImage: `url(${dep})` }} />
            <li
              className="small"
              style={{ backgroundImage: `url(${purps})` }}
            />
          </ul>
        </section>
      </div>
    );
  }
}
export default Home;
