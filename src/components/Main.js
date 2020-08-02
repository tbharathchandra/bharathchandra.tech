import React from "react";
import "./Main.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaMediumM,
  FaYoutube,
} from "react-icons/fa";
import Typical from "react-typical";

const social = {
  linkedin: "https://www.linkedin.com/in/bharath-chandra-blotzmann/",
  github: "https://github.com/tbharathchandra",
  facebook: "https://www.facebook.com/t.bharathchandra/",
  instagram: "https://www.instagram.com/bharath_as_boltzmann/",
  medium: "https://medium.com/@t.bharathchandra",
  youtube: "https://www.youtube.com/user/nani9849158308",
};

function Main() {
  return (
    <div className="main-div text-center">
      <Container className="main-container h-100">
        <Row className="align-items-center h-100">
          <Col xs={{ span: 11, offset: 1 }} className="mx-auto">
            <div className="main-text">
              <h4 className="main-text-h4">
                Hey there... <i>👋</i>{" "}
              </h4>
              <h1 className="main-text-h1">
                I'm <span className="name-span">Bharath Chandra</span>,{" "}
              </h1>
              <Typical
                className="main-text-h2"
                steps={[
                  "a Software Developer 👨‍💻",
                  1000,
                  "an Open-Source Contributor 🌍",
                  1000,
                ]}
                loop={Infinity}
                wrapper="h2"
              />
              <div>
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-a"
                >
                  <FaGithub />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-a"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-a"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-a"
                >
                  <FaInstagram />
                </a>
                <a
                  href={social.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-a"
                >
                  <FaMediumM />
                </a>
                <a
                  href={social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-a"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
