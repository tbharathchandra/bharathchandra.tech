import React from "react";
import "./ProjectCard.css";
import { Card, Carousel, Button } from "react-bootstrap";

function ProjectCard({ imgs, name, description, link }) {
  return (
    <div>
      <Card className="carousel-card">
        <Carousel>
          <Carousel.Item>
            <img className="carousel-img" src={imgs[0]} alt={name} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src={imgs[1]} alt={name} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src={imgs[2]} alt={name} />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button href={link} target="_blank" variant="outline-dark">
            More Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCard;
