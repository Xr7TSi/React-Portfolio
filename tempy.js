import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import githubLogo from "../../assets/contact-images/github-logo-175x175.jpg";

const styles = {
  navbar: {
    color: "white",
    // backgroundColor: "rgb(30, 8, 153)",
    backgroundColor: "rgb(0,0,0)",
    fontSize: "24px",
    justifyContent: "center",
  },
};

function Contact() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <a
            href="https://github.com/Xr7TSi"
            className="btn btn-primary"
            style={styles.navbar}
            target="_blank" rel="noopener noreferrer"
          >
            <Image src={githubLogo} rounded />
            <h5>GitHub</h5>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;