import React, { Component } from "react";
import "../styles/Body.scss";
class Body extends Component {
  render() {
    return (
      <>
        <div className="body">
          <div class="text-col">
            <h2>Transform your brand</h2>
            <p className="desc">
              We are a full-service agency specializing in helping brands grow
              fast. Engage your clients through compelling visuals that do most
              of the marketing gr you.
            </p>
            <button className="learn-more">LEARN MORE</button>
          </div>
          <div className="image"></div>
        </div>
        <div className="body">
          <div className="image-two"></div>
          <div class="text-col">
            <h2>Stand out to the right audience</h2>
            <p className="desc">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>
            <button className="learn-more-two">LEARN MORE</button>
          </div>
        </div>
        <div className="body">
          <div className="image-three">
          <h2 className="image-heading">Graphic Designing</h2>
            <p className="image-desc">
             Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
            </p>
          </div>
          <div class="image-four">
          <h2 className="image-heading">Photography</h2>
            <p className="image-desc">
            Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Body;
