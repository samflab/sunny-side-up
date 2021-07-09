import React, { Component } from "react";
import "../styles/Testimonial.scss";
import Card from "react-bootstrap/Card";
import test1 from "../image-emily.jpg";
import test2 from "../image-thomas.jpg";
import test3 from "../image-jennie.jpg";

class Testimonial extends Component {
  render() {
    return (
      <div>
        <h3 className="testimonial">CLIENT TESTIMONIALS</h3>
        <div className="card-div">
          <Card className="card" style={{ width: "23rem" }}>
            <Card.Body>
              <Card.Title className="title-img">
                <img className="client-images"alt="user-pic" src={test1} />
              </Card.Title>
              <Card.Text>
                <p className="testimonial-desc">
                  We put our trust in Sunnyside and they delivered, making sure
                  our needs were met and deadlines were always hit.
                </p>
                <h5 className="client-name">Emily R.</h5>
                <span className="client-position">Marketing Director</span>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card" style={{ width: "23rem" }}>
            <Card.Body>
              <Card.Title className="title-img">
                <img className="client-images" alt="user-pic" src={test2} />
              </Card.Title>
              <Card.Text>
                <p className="testimonial-desc">
                  Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.
                </p>
                <h5 className="client-name">Thomas S.</h5>
                <span className="client-position">Chief Operating Officer</span>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card" style={{ width: "23rem" }}>
            <Card.Body>
              <Card.Title className="title-img">
                <img className="client-images" alt="user-pic" src={test3} />
              </Card.Title>
              <Card.Text>
                <p className="testimonial-desc">
                  Incredible end result! Our sales increaded over 400% when we worked with Sunnyside. Highly recommended!
                </p>
                <h5 className="client-name">Jennie F.</h5>
                <span className="client-position">Business Owner</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Testimonial;
