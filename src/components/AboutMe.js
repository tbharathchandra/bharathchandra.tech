import React from "react";
import "./AboutMe.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import thumbnil from "./../assets/thumb.png";
import ScrollAnimation from "react-animate-on-scroll";

const skills = {
  languages: "C/C++, Java, Python, JavaScript, SQL, CMAKE, Makefile",
  web_mobile:
    "Android SDk, React, Node js, Express.js, MongoDB, Redis, My SQL, SQLite, Bootstrap, Jquery",
  ml: "Keras, OpenCV, Numpy, Pandas, Scikit learn, Eigen, Dlib",
  other: "Qt, CGAL, Boost, Hiredis, OpenSCAD, Travis, Appveyor, CTest",
};

function AboutMe() {
  return (
    <div id="aboutme">
      <div className="text-center about-heading">
        <ScrollAnimation animateIn="fadeInUp">
          <h2>About Me</h2>
        </ScrollAnimation>
      </div>
      <Container className="aboutme">
        <Row className="about-content">
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 6, offset: 3 }}
            lg={{ span: 4, offset: 1 }}
          >
            <ScrollAnimation animateIn="bounceInLeft">
              <img
                src={thumbnil}
                className="about-image"
                alt="thumbnil loading..."
              />
            </ScrollAnimation>
          </Col>
          <Col xs={{ span: 12 }} lg={{ span: 6, offset: 1 }}>
            <ScrollAnimation animateIn="fadeInUp">
              <p>
                I'm <strong>Bharath Chandra</strong>, I'm an undergraduate
                engineering student from JNTUH College of Engineering Hyderabad.{" "}
                <br />
                <br />
                <strong>FAQ's about me</strong>
                <br />
              </p>
              <p>
                <span className="faq">✴ So what do I do?</span> <br />
                &nbsp;I build mobile and web applications that make our life
                easy, I love experimenting to computer vision and deep learning,
                and I also contribute to open-source software devlopement.
                <br />
              </p>
              <p>
                <span className="faq">✴ What else I like?</span>
                <br />
                &nbsp;I love building electric vechiles, ohh! I already built
                one, and I really enjoy food blogging.
                <br />
              </p>
            </ScrollAnimation>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 12 }} lg={{ span: 6 }}>
            <ScrollAnimation animateIn="fadeInUp">
              <p>
                <span className="faq">
                  ✴ Technologies which I use frequently?
                </span>
                <br />
              </p>
            </ScrollAnimation>
          </Col>
        </Row>
        <Row>
          <Col className="skills-box" xs={{ span: 12 }} lg={{ span: 6 }}>
            <ScrollAnimation animateIn="slideInUp">
              <Card className="skill-card">
                <Card.Header>Languages&#38;Build Systems</Card.Header>
                <Card.Body>
                  <Card.Text>{skills.languages}</Card.Text>
                </Card.Body>
              </Card>
            </ScrollAnimation>
          </Col>
          <Col className="skills-box" xs={{ span: 12 }} lg={{ span: 6 }}>
            <ScrollAnimation animateIn="slideInUp">
              <Card className="skill-card">
                <Card.Header>Web&#38;Mobile technologies</Card.Header>
                <Card.Body>
                  <Card.Text>{skills.web_mobile}</Card.Text>
                </Card.Body>
              </Card>
            </ScrollAnimation>
          </Col>
          <Col className="skills-box" xs={{ span: 12 }} lg={{ span: 6 }}>
            <ScrollAnimation animateIn="slideInUp">
              <Card className="skill-card">
                <Card.Header>
                  Machine Learning&#38;Data Visualization
                </Card.Header>
                <Card.Body>
                  <Card.Text>{skills.ml}</Card.Text>
                </Card.Body>
              </Card>
            </ScrollAnimation>
          </Col>
          <Col className="skills-box" xs={{ span: 12 }} lg={{ span: 6 }}>
            <ScrollAnimation animateIn="slideInUp">
              <Card className="skill-card">
                <Card.Header>Other Libraries&#38;Tools</Card.Header>
                <Card.Body>
                  <Card.Text>{skills.other}</Card.Text>
                </Card.Body>
              </Card>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
