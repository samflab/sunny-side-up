import cone from "../image-gallery-cone.jpg";
import bottle from "../image-gallery-milkbottles.jpg";
import orange from "../image-gallery-orange.jpg";
import cube from "../image-gallery-sugarcubes.jpg";
import React, { Component } from "react";
import "../styles/Grid.scss";

class ImageGrid extends Component {
  render() {
    return (
      <div>
        <div className="image-grid">
          <img className="food-image" alt="milk-bottles" src={bottle} />
          <img className="food-image" alt="orange" src={orange} />
          <img className="food-image" alt="sugar-cubes" src={cube} />
          <img className="food-image" alt="icecream-cone" src={cone} />
        </div>
      </div>
    );
  }
}

export default ImageGrid;
