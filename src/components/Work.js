import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Work.css";
import ScrollAnimation from "react-animate-on-scroll";

const img = "https://miro.medium.com/max/1200/1*WLm7XGGmcc7wt5T-Cvac2A.jpeg";
const devlog = "https://brlcad.org/wiki/User:Tbharathchandra/DevLog2020";
const pr = "https://github.com/openscad/openscad/pull/3316";

function Work() {
  return (
    <div id="work" className="work-div">
      <div className="text-center work-heading">
        <ScrollAnimation animateIn="fadeInUp">
          <h2>I'm Currently Working On</h2>
        </ScrollAnimation>
      </div>
      <Container>
        <Row>
          <Col xs={{ span: 12 }} lg={{ span: 6, offset: 3 }}>
            <ScrollAnimation animateIn="flipInX">
              <Card className="work-card">
                <Card.Img className="work-img" variant="top" src={img} />
                <Card.Body>
                  <Card.Title>
                    <strong>Google Summer of Code</strong>@
                    <strong>OpenSCAD</strong>
                  </Card.Title>
                  <Card.Text>
                    I'm contributing to OpenSCAD as a part of GSOC 20 program.
                    I'm developing a persistent cache system for OpenSCAD for
                    enhancing the performance on cloud usage.
                  </Card.Text>
                  <Button href={devlog} target="_blank" variant="outline-dark">
                    Dev Log
                  </Button>{" "}
                  <Button href={pr} target="_blank" variant="outline-dark">
                    Pull Request
                  </Button>
                </Card.Body>
              </Card>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Work;
