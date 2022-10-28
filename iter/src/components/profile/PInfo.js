import React from "react";
import { Row, Col, Button } from "reactstrap";
import avatar from "../../images/lorde.png";

const PInfo = () => {
  return (
    
    <div className="info">
      <Row>
        <Col xs="12" md="4" className="text-center">
          <img
            src={avatar}
            alt="Lorde"
            className="img-fluid rounded-circle shadow-lg"
            style={{ marginLeft: 150, width: 180 }}
          />
        </Col>
        <Col
          xs="12"
          md="8"
          className="d-flex flex-column align-items-center align-items-lg-start"
        >
          <div className="d-flex flex-row align-items-start mt-3 mt-lg-0">
            <div className="name">
              <h2 className="mb-0">###</h2>
            </div>
            <Button
              style={{ backgroundColor: "yellow", color: "black" }}
              href="#a"
              size="sm"
              className="btn-pill ml-3 mt-1"
            >
              Follow
            </Button>
          </div>
          <div className="stats d-flex flex-row align-items-center align-items-lg-start text-center text-lg-left">
            <div className="posts ml-2 ml-lg-0">
              <Button style={{ backgroundColor: "#aaaa" }}>
                <p className="lead">
                  <b>134</b> posts
                </p>
              </Button>
            </div>
            <Button style={{ backgroundColor: "#aaaa" }}>
              <div className="posts">
                <p className="lead">
                  <b>6.6m</b>
                  followers
                </p>
              </div>
            </Button>
            <Button style={{ backgroundColor: "#aaaa" }}>
              <div className="posts">
                <p className="lead">
                  <b>201</b> following
                </p>
              </div>
            </Button>
          </div>
          <p className="lead mb-0 mt-2">
            <b>############</b>
          </p>
          <p className="lead text-center text-lg-left">
            Let's let things come out of the woodwork. I'll give you my best
            side, tell you all my best lies. Yeah, awesome right?
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default PInfo;
