import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="City Book"
              description="We welcome you to citybook.pk. We are a business listing and event submission company located in Lahore. We connect you to the businesses and events across Pakistan for free. We’ve been around in one form or another for more than 5 years, always with one goal in mind — helping local businesses compete and win."
              link="beta.citybook.pk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="My Auction Sheet"
              description="We are the pioneer in this Business. My auction sheet is the 1st biggest website, with 1 million website visits each month. Through the evaluation of our digital platform and our innovative data products, we make the process of buying the Auction Sheet easier for customers, 
              retailers, and dealers. We are in this business since 2009. We have verified 50,000 + Auction Sheets successfully around the world.We have the aim to improve the process of buying sheets to provide a better experience for customers, and we have become the most admired digital business."
              link="https://myauctionsheet.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
