import React from "react";
import { Row, Col } from "react-bootstrap";

import ticketing from "../../assets/work-images/Ticketing-App-350x219.png";
import birthday from "../../assets/work-images/Birthday-Clock-350x219.png";
import news from "../../assets/work-images/News-Flash-350x219.png";
import weather from "../../assets/work-images/Weather-Dashboard-350x219.png";
import workday from "../../assets/work-images/Work-Day-Scheduler-350x219.png";
import amazon from "../../assets/work-images/Amazon-Clone-Home-350x219.png";
import postCenter from "../../assets/work-images/PostCenter-350x219.png";

const styles = {
  caption: {
    color: "white",
    textAlign: "center",
  },

  buttonPrimary: {
    color: "white",
    // backgroundColor: "rgb(30, 8, 153)",
    backgroundColor: "#404040",
    fontSize: "28px",
    marginLeft: "5px",
    marginRight: "5px",
    marginTop: "45px",
  },

  // when app is served from build folder, some content shifts left.  marginLeft fixes it.
  columnShift: {
    marginLeft: "30px",
  },
};

// additional styling in styles/styles.css

function Work() {
  return (
    <section>
      <Row>
        <Col xs={12} md={6}>
          <div style={styles.columnShift}>
            <div className="image-container">
              <img
                src={ticketing}
                width="350"
                height="219"
                alt="Ticketing Application"
              />
            </div>
            <div style={styles.caption}>
              <h5>Ticketing App is a Customer Relationship Management Tool.</h5>
              <h5>
                It's hosted on an Amazon Web Services EC2 Ubuntu instance, using
                NGINX.
              </h5>
              <h5>
                It features email authentication for new user and password
                reset functions.
              </h5>
              <h5>It's built with React, Nodejs Express, and MongoDB.</h5>
              <h5>Login with email: visitor@test.com &nbsp; password:  Visitor1! </h5>
              <h5>Or, just create your own account.</h5>
              <div className="button-container">
                <a
                  href="https://jonathanrein.com/"
                  className="btn btn-primary"
                  style={styles.buttonPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Deployed App</h5>
                </a>
                <a
                  href="https://github.com/Xr7TSi/Ticketing-App-Full-Stack.git"
                  className="btn btn-primary"
                  style={styles.buttonPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Repository</h5>
                </a>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div style={styles.columnShift}>
            <div className="image-container">
              <img src={postCenter} width="350" height="219" alt="PostCenter" />
            </div>
            <div style={styles.caption}>
              <h5>PostCenter is a social media app.</h5>
              <h5>
                It's hosted on an Amazon Web Services EC2 Ubuntu instance, using
                NGINX. It can run in Docker containers for development.
              </h5>
              <h5>
                PostCenter features options for Google OAuth and email login.
              </h5>
              <h5>
                It uses a free-tier database service so may be a bit slow to load.
              </h5>
              <div className="button-container">
                <a
                  href="https://xr7tsi.com/"
                  className="btn btn-primary"
                  style={styles.buttonPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Deployed App</h5>
                </a>
                <a
                  href="https://github.com/Xr7TSi/Nginx-Docker-MERN-Project"
                  className="btn btn-primary"
                  style={styles.buttonPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Repository</h5>
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
       <Col xs={12} md={6}>
          <div style={styles.columnShift}>
            <div className="image-container">
              <img src={amazon} alt="Amazon" />
            </div>
            <div style={styles.caption}>
              <h5>Amazon Clone is a full-stack e-commerce application.</h5>
              <h5>
                It's hosted on Google Firebase. It's built with React and uses
                Stripe payment processing.
              </h5>
              <div className="button-container">
                <a
                  href="https://clone-14498.web.app/"
                  className="btn btn-primary"
                  style={styles.buttonPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Deployed App</h5>
                </a>
                <a
                  href="https://github.com/Xr7TSi/News-Flash"
                  className="btn btn-primary"
                  style={styles.buttonPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Repository</h5>
                </a>
              </div>
            </div>
          </div>
        </Col>
        
        <Col xs={12} md={6}>
          <div style={styles.columnShift}>
            <div className="image-container">
              <img src={news} alt="News Flash" />
            </div>
            <div style={styles.caption}>
              <h5>
                News Flash gathers news based on the user's news category
                preferences.
              </h5>
              <h5>
                It's built with JavaScript. It uses APIs, Bootstrap and local
                storage.
              </h5>
              <div className="button-container">
                <a
                  href="https://xr7tsi.github.io/News-Flash/"
                  className="btn btn-primary"
                  style={styles.buttonPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Deployed App</h5>
                </a>
                <a
                  href="https://github.com/Xr7TSi/News-Flash"
                  className="btn btn-primary"
                  style={styles.buttonPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Repository</h5>
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      

      <Row>
        <Col xs={12} md={6}>
          <div style={styles.columnShift}>
            <div className="image-container">
              <img src={birthday} alt="Birthday Clock" />
            </div>
            <div style={styles.caption}>
              <h5>
                Tick Tock Birthday Clock is a app for sharing birthday
                wishlists.
              </h5>
              <h5>
                It's built with JavaScript. It uses MySQL, bcrypt, dotenv,
                Express, Handlebars.js and Bootstrap.
              </h5>
              <div className="button-container">
                <a
                  href="https://tick-tock-birthday-clock.herokuapp.com/"
                  className="btn btn-primary"
                  style={styles.buttonPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Deployed App</h5>
                </a>
                <a
                  href="https://github.com/Xr7TSi/Tick-Tock-Birthday-Clock/"
                  className="btn btn-primary"
                  style={styles.buttonPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Repository</h5>
                </a>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div style={styles.columnShift}>
            <div className="image-container">
              <img src={weather} alt="Weather Dashboard" />
            </div>
            <div style={styles.caption}>
              <h5>
                Weather Dashboard provides weather data for any city in the
                world.
              </h5>
              <h5>
                It's built with JavaScript. It uses third-party APIs, Bootstrap
                and local storage.
              </h5>
              <div className="button-container">
                <a
                  href="https://xr7tsi.github.io/Weather-Dashboard/"
                  className="btn btn-primary"
                  style={styles.buttonPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Deployed App</h5>
                </a>
                <a
                  href="https://github.com/Xr7TSi/Weather-Dashboard"
                  className="btn btn-primary"
                  style={styles.buttonPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Repository</h5>
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <div style={styles.columnShift}>
            <div className="image-container">
              <img src={workday} alt="Workday Scheduler" />
            </div>
            <div style={styles.caption}>
              <h5>Workday Scheduler is a day planner.</h5>
              <h5>
                It's built with JavaScript. It uses moment.js, Bootstrap and
                local storage.
              </h5>
              <div className="button-container">
                <a
                  href="https://xr7tsi.github.io/Workday-Scheduler/"
                  className="btn btn-primary"
                  style={styles.buttonPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Deployed App</h5>
                </a>
                <a
                  href="https://github.com/Xr7TSi/Workday-Scheduler/"
                  className="btn btn-primary"
                  style={styles.buttonPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Repository</h5>
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Work;
