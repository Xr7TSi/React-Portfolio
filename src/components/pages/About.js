import React from 'react';
import Typist from 'react-typist';
import lava from '../../assets/animations/lava.mp4';

const styles = {
  nameTextLg: {
    color: "white",
    fontSize: "70px",
    letterSpacing: "12px",
  },
  nameTextMd: {
    color: "white",
    fontSize: "55px",
    letterSpacing: "10px",
  },
};


function About() {

  if (window.innerWidth >= 880)
  return (
  <div className="container" id="home-text">
    <video autoPlay loop muted
    style={{
      position: 'absolute',
      width: '94.5%',
      left: '2.5%',
      top: '11%',
      height: '100%',
      objectFit: 'cover',
      transform: "translate(-50%, -50%')",
      zIndex: '-1'
    }}>
      <source src={lava} type="video/mp4" />
    </video>

      <div className="col-md-12">
          <h1 style={styles.nameTextLg}>J.D. REIN</h1>
          <br></br>
          <Typist cursor={{ show: false}}>
          <Typist.Delay ms={1500} />
          <h3>FULL-STACK WEB DEVELOPER</h3>
          <br></br>
          <Typist.Delay ms={500} />
          <h3>Working with AWS, Docker, Ubuntu, Nginx, MongoDB, Express, React, Node.js and more.</h3>
          </Typist>
      </div>
  </div>
  );

  if (window.innerWidth <= 879)
  return (
    <div className="container" id="home-text">
      <video autoPlay loop muted
      style={{
        position: 'absolute',
        width: '95.5%',
        left: '2.5%',
        top: '13.5%',
        height: '100%',
        objectFit: 'cover',
        transform: "translate(-50%, -50%')",
        zIndex: '-1'
      }}>
        <source src={lava} type="video/mp4" />
      </video>
  
        <div className="col-md-12">
            <h1 style={styles.nameTextMd}>J.D. REIN  </h1>
            <br></br>
            <Typist cursor={{ show: false}}>
            <Typist.Delay ms={1500} />
            <h3>FULL-STACK WEB DEVELOPER</h3>
            <br></br>
            <Typist.Delay ms={500} />
            <h3>Working with AWS, Docker, Ubuntu, MongoDB, Express, React, Node.js and more.</h3>
            </Typist>
        </div>
    </div>
    );
}



export default About;
