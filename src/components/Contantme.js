import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Contactme.css";
import { FaHeart } from "react-icons/fa";

function Contantme() {
  return (
    <div id="contactme">
      <div className="contactme">
        <Container>
          <Row>
            <Col xs={12} className="text-center contact-heading">
              <h2 className="contact-heading">Wanna Contact me?</h2>
              <h3>Drop me a email at</h3>
              <h4>t.bharathchandra@gmail.com</h4>
              <h5>or</h5>
              <h3>Ping me on LinkedIn</h3>
              <Button
                href="https://www.linkedin.com/in/bharath-chandra-blotzmann/"
                target="_blank"
                variant="outline-dark"
              >
                LinkedIn
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <p>
                Made with <FaHeart style={{ color: "#E90606" }} /> by{" "}
                <strong>Bharath</strong>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contantme;
