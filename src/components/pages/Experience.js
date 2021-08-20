import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import resumeLogo from "../../assets/contact-images/resume-logo-175x175.jpg";


const styles = {
 text: {
   color: 'white'
 },

 background: { 
  backgroundColor: "black",
},

  block: {
    marginTop: "10px",
    marginBottom: "20px",
  }

}

function Experience() {
  return (

    <Container style={styles.background}>
      <div style={styles.block}>
      <Col style={styles.text}>
        <h3>Technical know-how</h3>
        <h5>Languages: JavaScript, CSS, HTML5</h5>
        <h5>Applications:  GitHub, Heroku, Firebase</h5>
        <h5>Tools: MySQL, Express, Node.js, Bootstrap, jQuery,</h5>
      </Col>
      </div>

      <div style={styles.block}>
      <Col style={styles.text}>
        <h3>Work Experience</h3>
        <h5>Shift Supervisor, Master Control Sept. ‘06</h5>
        <h5>Supervised broadcast operations Warner Media’s entire domestic entertainment networks portfolio including HBO, Cinemax, TNT, TBS, Cartoon Network and NBATV.</h5>
        <h5>Resolved highly complex critical on-air issues to protect brand reputation, revenue and customer experience.</h5>      
        <h5>Lead testing, training and development of Warner Media’s IP Infrastructure-based Master Control.</h5>
        <h5>Managed direct reports including coaching, performance evaluation and compensation.</h5>
        <h5>Provided critical communications to Senior Leadership regarding on-air disruptions.</h5>
        <h5>Ensured continuity of Live Web Streaming services.</h5>
        <h5>Developed standard operating procedures.</h5>
      </Col>

      </div>
      <Col style={styles.text}>
        <h3>Education</h3>
        <h5>Coding Bootcamp Certificate: Georgia Tech</h5>
        <h5>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.</h5>
        <h5>Tools: MySQL, Express, Node.js, Bootstrap, jQuery,</h5>
        <h5>Bachelor of Arts</h5>
        <h5>College of Charleston, Charleston, SC</h5>
        <h5>CompTIA Network+ Certified </h5>
      </Col>
         
      <Row>
        <Col xs={8} md={4}>
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
      </Row>
    </Container>
  );
}



export default Experience;