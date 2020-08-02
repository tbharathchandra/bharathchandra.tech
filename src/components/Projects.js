import React from "react";
import "./Projects.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import ScrollAnimation from "react-animate-on-scroll";

const projects = [
  {
    imgs: [
      "https://spotlightonline.co/wp-content/uploads/2017/03/netflix-logo-e1489181161200-601x400.jpg",
      "https://ei.marketwatch.com/Multimedia/2020/04/07/Photos/ZQ/MW-IE005_Netfli_20200407181402_ZQ.jpg?uuid=168ba0cc-791d-11ea-9f37-9c8e992d421e",
      "https://www.amcharts.com/wp-content/uploads/2016/08/react.png",
    ],
    name: "Netflix UI Clone",
    description:
      "Simple Netflix UI clone done using React Js, axios, and TMDB movie API. Checkout the project by going through the below and open the firebase hosted site. ",
    link: "https://github.com/tbharathchandra/Netflix-Clone",
  },
  {
    imgs: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2fRUVimyUOlJgNjZ9_HnUn68zdZ-dycwMVw&usqp=CAU",
      "https://www.researchgate.net/profile/Clifford_Yang/publication/325137356/figure/fig2/AS:670371271413777@1536840374533/llustration-of-the-network-architecture-of-VGG-19-model-conv-means-convolution-FC-means.jpg",
      "https://www.metalsupermarkets.com/wp-content/uploads/2019/02/What-type-of-welding-is-used-for-aluminum.jpg",
    ],
    name:
      "Defect Classification of Weld radiographic images using transfer learning",
    description:
      "A complete dataset of weld radiographic images is created and trained a CNN based on VGG-19 using transfer learning",
    link:
      "https://github.com/tbharathchandra/Defect-Classification-from-Weld-Radiography-Images-Using-VGG-19-based-Convolutional-Neural-Network",
  },
  {
    imgs: [
      "https://developers.google.com/ml-kit/vision/face-detection/images/face_detection2x.png",
      "https://img.reality.news/img/10/79/63605641826674/0/face-tracking-augmentation-technology-works.1280x600.jpg",
      "https://i.stack.imgur.com/40R2b.jpg",
    ],
    name: "Dynamic Human Authentication",
    description:
      "This is a person tracking system which using the webcam video feed. Done using Dlib, OpenCV, and Openface",
    link:
      "https://github.com/tbharathchandra/Face-recognization-from-webcam-video-stream-using-Opencv-dlib-and-OpenFace",
  },
  {
    imgs: [
      "https://www.3dnatives.com/en/wp-content/uploads/sites/2/openscad_cover.jpg",
      "https://blogs.adobe.com/conversations/files/2017/08/Main_PDF.jpg",
      "https://www.3dnatives.com/en/wp-content/uploads/sites/2/openscad_picpic.jpg",
    ],
    name: "PDF Export of 2D Outlines",
    description:
      "PDF Export feature is added to OpenSCAD Export Stack using Cairo as backend for generating PDF files",
    link: "https://github.com/openscad/openscad/pull/3266",
  },
  {
    imgs: [
      "https://raw.githubusercontent.com/tbharathchandra/ContentCafe/master/contentcafe.png",
      "https://images-eu.ssl-images-amazon.com/images/I/21HNkUwpehL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg",
      "https://www.historic-newspapers.co.uk/app/uploads/2019/07/Old-Newspapers.jpg",
    ],
    name: "Content Cafe",
    description: "Content Cafe is a short news and gk provider application",
    link: "https://github.com/tbharathchandra/ContentCafe",
  },
  {
    imgs: [
      "https://raw.githubusercontent.com/tbharathchandra/probunker/version1/probunker.png",
      "https://i.pinimg.com/originals/76/b0/d4/76b0d436a6314d3ad5eec80341fb2ec1.png",
      "https://images-eu.ssl-images-amazon.com/images/I/21HNkUwpehL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg",
    ],
    name: "ProBunker",
    description: "Attendance traking app for students",
    link: "https://github.com/tbharathchandra/probunker",
  },
];

function Projects() {
  return (
    <div id="projects">
      <div className="projects-heading text-center">
        <ScrollAnimation animateIn="fadeInUp">
          <h2>Projects</h2>
        </ScrollAnimation>
      </div>
      <Container>
        <Row>
          {projects.map((project, idx) => {
            return (
              <Col xs={{ span: 12 }} lg={{ span: 6 }} className="text-center">
                <ScrollAnimation animateIn="fadeIn">
                  <ProjectCard
                    imgs={project.imgs}
                    name={project.name}
                    description={project.description}
                    link={project.link}
                    key={idx}
                  />
                </ScrollAnimation>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
