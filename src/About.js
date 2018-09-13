import React, { Component } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
class About extends Component {
  render() {
    return (
      <ParallaxBanner
        className="hero"
        layers={[
          {
            image:
              "https://media.wired.com/photos/5932369bb8eb31692072e2ac/master/w_1800,c_limit/Marijuana_Farm_02.jpg",
            amount: 0.1,
            slowerScrollRate: false
          },
          {
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Jjfslw8XdrHeldbPyuo2yBVbVLlurgDiiWu0yUeivkcOBnmDKg",
            amount: 0.2,
            slowerScrollRate: false
          }
        ]}
        style={{
          height: "500px"
        }}
      >
        <h1>Blow topshelf cause midgrade is bad for your health!</h1>
      </ParallaxBanner>
    );
  }
}
export default About;
