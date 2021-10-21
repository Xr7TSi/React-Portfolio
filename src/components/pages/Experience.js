import React from "react";
import { Container, Col, Image } from "react-bootstrap";
import dockerLogo from "../../assets/logos/docker-100.png";
import ubuntuLogo from "../../assets/logos/ubuntu-100.png";
import nginxLogo from "../../assets/logos/nginx-100.png";
import mongoLogo from "../../assets/logos/mongo-100.png";
import expressLogo from "../../assets/logos/express-100.png";
import reactLogo from "../../assets/logos/react-100.png";
import nodeLogo from "../../assets/logos/node-100.png";
import awsLogo from "../../assets/logos/aws-100.png";
import netplusLogo from "../../assets/logos/netplus-100.png";


const styles = {
 text: {
   color: 'white',
   backgroundColor: "#404040",
   marginTop: "20px",
   marginBottom: "20px",
 },

 logo: {
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "10px",
    marginRight: "10px",
 }
}

function Experience() {
  return (

    <Container>
    
    <Image style={styles.logo} src={awsLogo} rounded />
    <Image style={styles.logo} src={dockerLogo} rounded />
    <Image style={styles.logo} src={ubuntuLogo} rounded />
    <Image style={styles.logo} src={nginxLogo} rounded />
    <Image style={styles.logo} src={mongoLogo} rounded />
    <Image style={styles.logo} src={expressLogo} rounded />
    <Image style={styles.logo} src={reactLogo} rounded />
    <Image style={styles.logo} src={nodeLogo} rounded />
    <Image style={styles.logo} src={netplusLogo} rounded />
    
      <Col style={styles.text}>
        <br></br>
        <h3>Technical know-how</h3>
        <h5>▢ Technologies: Docker, Ubuntu, Nginx, MongoDB, Express, React, Node.js</h5>
        <h5>▢ Languages: JavaScript, CSS, HTML5</h5>
        <h5>▢ Hosting Environments:  Amazon Web Services EC2, Firebase, Heroku, GitHub Pages </h5>
        <br></br>
      </Col>
     
      <Col style={styles.text}>
      <br></br>
        <h3>Work Experience</h3>
        <h4>Master Control Shift Supervisor, Warner Media Sept. ‘06</h4>
        <h5>▢ Supervised broadcast operations Warner Media’s entire domestic entertainment networks portfolio including HBO, Cinemax, TNT, TBS, Cartoon Network and NBATV.</h5>
        <h5>▢ Resolved highly complex critical on-air issues to protect brand reputation, revenue and customer experience.</h5>      
        <h5>▢ Lead testing, training and development of Warner Media’s IP Infrastructure-based Master Control.</h5>
        <h5>▢ Managed direct reports including coaching, performance evaluation and compensation.</h5>
        <h5>▢ Provided critical communications to Senior Leadership regarding on-air disruptions.</h5>
        <h5>▢ Ensured continuity of Live Web Streaming services.</h5>
        <h5>▢ Developed standard operating procedures.</h5>
        <br></br>
      </Col>
    
      <Col style={styles.text}>
      <br></br>
        <h3>Education</h3>
        <h4>▢ Coding Bootcamp Certificate: Georgia Tech</h4>
        <h5>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.</h5>
        <h5>Tools: MySQL, Express, Node.js, Bootstrap, jQuery,</h5>
        <h4>▢ Bachelor of Arts</h4>
        <h5>College of Charleston, Charleston, SC</h5>
        <h4>▢ CompTIA Network+ Certified </h4>
        <br></br>
      </Col>
         
   
    </Container>
  );
}



export default Experience;