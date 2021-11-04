import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import githubLogo from "../../assets/contact-images/github-logo-175x175.jpg";
import linkedinLogo from "../../assets/contact-images/linkedin-logo-175x175.jpg";
import resumeLogo from "../../assets/contact-images/resume-logo-175x175.jpg";
import stravaLogo from "../../assets/contact-images/strava-logo-175x175.jpg";
import emailLogo from "../../assets/contact-images/email-logo-175x175.png";
import phoneLogo from "../../assets/contact-images/phone-logo-175x175.png";

const styles = {
  navbar: {
    color: "white",
    // backgroundColor: "rgb(30, 8, 153)",
    backgroundColor: "rgb(0,0,0)",
    fontSize: "24px",
    // when app is served from build folder, some content shifts left.  marginLeft fixes it.
    marginLeft: "30px",
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

        <Col xs={12} md={4}>
          <a
            href="https://www.linkedin.com/in/jd-rein"
            className="btn btn-primary"
            style={styles.navbar}
            target="_blank" rel="noopener noreferrer"
          >
            <Image src={linkedinLogo} rounded />
            <h5>Linkedin</h5>
          </a>
        </Col>

        <Col xs={12} md={4}>
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQNIXOZBbExarlcZ2Bx8j77IGd1GlLuicBgRYirct5Ru1CEIHU57YNGps_HXoIj_IOZ6AWQYV1ZtuSm/pub"
            className="btn btn-primary"
            style={styles.navbar}
            target="_blank" rel="noopener noreferrer"
          >
            <Image src={resumeLogo} rounded />
            <h5>Resume</h5>
          </a>
        </Col>

        <Col xs={12} md={4}>
          <a
            href="tel:404-667-3545"
            className="btn btn-primary"
            style={styles.navbar}
            target="_blank" rel="noopener noreferrer"
          >
            <Image src={phoneLogo} rounded />
            <h5>404-667-3545</h5>
          </a>
        </Col>

        <Col xs={12} md={4}>
          <a
            href="mailto: jrein1296@gmail.com"
            className="btn btn-primary"
            style={styles.navbar}
            target="_blank" rel="noopener noreferrer"
          >
            <Image src={emailLogo} rounded />
            <h6>jrein1296@gmail.com</h6>
          </a>
        </Col>

        <Col xs={12} md={4}>
          <a
            href="https://www.strava.com/athletes/jonathan_rein"
            className="btn btn-primary"
            style={styles.navbar}
            target="_blank" rel="noopener noreferrer"
          >
            <Image src={stravaLogo} rounded />
            <h5>Strava</h5>
          </a>
        </Col>

      </Row>
    </Container>
  );
}



export default Contact;


