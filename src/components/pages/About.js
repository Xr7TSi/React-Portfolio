import React from 'react';
import Typist from 'react-typist';
import lava from '../../assets/animations/lava.mp4';



function About() {
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
          <h1>I'm J.D. Rein  </h1>
          <br></br>
          <Typist>
          <h3>I'm a full-stack web developer.</h3>
          <Typist.Delay ms={500} />
          <h3> I work with React.js, Express, Node.js, MongoDB and more.</h3>
          </Typist>
      
          
      </div>
  </div>
  );
}



export default About;
