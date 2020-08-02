import React from "react";
import "./Articles.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Youtube from "./Youtube";
import ScrollAnimation from "react-animate-on-scroll";

const mentries = [
  {
    mediumtype: "medium",
    img: "https://miro.medium.com/max/337/1*9rM64PcywL_RvjWK9D-ZWA.png",
    title:
      "A Beginners Guide to Computer Vision (Part 3)- Harris Interest Point Detection",
    readmore:
      "https://medium.com/analytics-vidhya/a-beginners-guide-to-computer-vision-part-3-harris-interest-point-detection-15cdfb30104c",
  },
  {
    mediumtype: "medium",
    img: "https://miro.medium.com/max/500/1*RsNnA6cVYkj1f7_P7sT9gA.jpeg",
    title: "A Beginners Guide to Computer Vision (Part 4)- Pyramid",
    readmore:
      "https://medium.com/analytics-vidhya/a-beginners-guide-to-computer-vision-part-4-pyramid-3640edeffb00",
  },
  {
    mediumtype: "medium",
    img: "https://miro.medium.com/max/700/1*ygdbb1CWHq80SenPQCpRFw.png",
    title: "Scale Invariant Feature Transform (SIFT) Part 1",
    readmore:
      "https://medium.com/analytics-vidhya/a-beginners-guide-to-computer-vision-part-5-scale-invariant-feature-transform-sift-part-1-6a0e676cbe1a",
  },
];

const yentries = [
  {
    youtubetype: "youtube",
    youtubeid: "6QCt3ej0xoc",
  },
  {
    youtubetype: "youtube",
    youtubeid: "qHn9mctee1Q",
  },
  {
    youtubetype: "youtube",
    youtubeid: "ynH24aveeTA",
  },
  {
    youtubetype: "youtube",
    youtubeid: "qWJFv--jj5s",
  },
  {
    youtubetype: "youtube",
    youtubeid: "iyU6UVrg__o",
  },
  {
    youtubetype: "youtube",
    youtubeid: "nYdyeb4Qcfw",
  },
];

function Articles() {
  return (
    <div id="articles">
      <div className="text-center articles-heading">
        <ScrollAnimation animateIn="fadeInUp">
          <h2>Some of My Content</h2>
        </ScrollAnimation>
      </div>
      <Container>
        <Row>
          {mentries.map((entry, idx) => {
            return (
              <Col className="articles-card" xs={12} lg={4}>
                <ScrollAnimation duration={0.6} animateIn="zoomInDown">
                  <Card>
                    {entry.mediumtype && (
                      <img
                        className="article-img"
                        src={entry.img}
                        alt={entry.title}
                      />
                    )}
                    <Card.Body>
                      <Card.Title>{entry.title}</Card.Title>
                    </Card.Body>
                    {entry.mediumtype && (
                      <Card.Footer>
                        <Button
                          href={entry.readmore}
                          target="_blank"
                          variant="outline-dark"
                        >
                          Read More
                        </Button>
                      </Card.Footer>
                    )}
                  </Card>
                </ScrollAnimation>
              </Col>
            );
          })}
        </Row>
        <Row>
          {yentries.map((entry, idx) => {
            return (
              <Col className="articles-card" xs={12} lg={4}>
                <ScrollAnimation duration={0.6} animateIn="zoomInDown">
                  <Card>
                    {entry.youtubetype && (
                      <Youtube
                        youtubeId={entry.youtubeid}
                        title={entry.title}
                      />
                    )}
                  </Card>
                </ScrollAnimation>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Articles;
