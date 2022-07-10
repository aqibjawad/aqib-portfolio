import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mas from "../../Assets/Projects/mas.png";
import citybook from "../../Assets/Projects/citybook.png";
import sp from "../../Assets/Projects/sp.png";

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
            <ProjectCard imgPath={mas} isBlog={false} title="My Auction Sheet"
              description="We are the pioneer in this Business. My auction sheet is the 1st biggest website, with 1 million website visits each month. Through the evaluation of our digital platform and our innovative data products, we make the process of buying the Auction Sheet easier for customers, 
              retailers, and dealers. We are in this business since 2009. We have verified 50,000 + Auction Sheets successfully around the world.We have the aim to improve the process of buying sheets to provide a better experience for customers, and we have become the most admired digital business."
              link="https://myauctionsheet.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard imgPath={mas} isBlog={false} title="Traceable System"
              description="It's a traceable system for the farmers where we can add farmers all details and farmers added their attendence keep their all records."
              link="https://myauctionsheet.com/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard imgPath={citybook} isBlog={false} title="City Book"
              description="We welcome you to citybook.pk. We are a business listing and event submission company located in Lahore. We connect you to the businesses and events across Pakistan for free. We’ve been around in one form or another for more than 5 years, always with one goal in mind — helping local businesses compete and win."
              link="https://beta.citybook.pk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={sp} isBlog={false} title="Saifullah Properties"
              description="Saifullah properties were established in 2014. This establishment was formed keeping in mind the growing desires of the people and the demand to owe own house. No one better than us could have captured the dreams and requirements of the people. Please allow our extensive knowledge of 
              real estate and our experienced staff to assist you with whatever your needs may be."
              link="https://saifullahproperties.pk"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
