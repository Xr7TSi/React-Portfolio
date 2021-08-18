import React from "react";
import Carousel from "react-bootstrap/Carousel";
import birthday from "../../assets/work-images/Birthday-Clock-Canvas.png";
import birthdayBlur from "../../assets/work-images/Birthday-Clock-Blur-Canvas.png";
import news from "../../assets/work-images/News-Flash-Canvas.png";
import newsBlur from "../../assets/work-images/News-Flash-Blur-Canvas.png";
import weather from "../../assets/work-images/Weather-Dashboard-Canvas.png";
import weatherBlur from "../../assets/work-images/Weather-Dashboard-Blur-Canvas.png";
import workday from "../../assets/work-images/Work-Day-Scheduler-Canvas.png";
import workdayBlur from "../../assets/work-images/Work-Day-Scheduler-Blur-Canvas.png";


const styles = {
  carouselCaption: {
    position: "absolute",
    top: "200px",
    color: "black",
  },

  buttonPrimary: {
    color: "white",
    backgroundColor: "rgb(30, 8, 153)",
    fontSize: "28px",
    marginLeft: "5px",
    marginRight: "5px",
    marginTop: "45px",
  },
};

function Work() {

  
  return (
    <Carousel fade indicators={false} controls={false} pause={false}>

       {/* provides brief period with no image. */}
       <Carousel.Item interval={200}></Carousel.Item>

      <Carousel.Item interval={1500}>
        <img  className="d-block w-100" src={news} alt="News Flash" />
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={newsBlur}
          alt="News Flash blurred"
        />
        <Carousel.Caption style={styles.carouselCaption}>
          <h3>
            News Flash gathers news based on the user's
            news category preferences.
          </h3>
          <h3>
            It's built with JavaScript. It uses APIs, bootstrap and local
            storage.
          </h3>
          <h3>
            <a
              href="https://github.com/Xr7TSi/News-Flash"
              className="btn btn-primary"
              style={styles.buttonPrimary}
              target="_blank" rel="noopener noreferrer"
            >
              <h5>See the repo</h5>
            </a>
            <a
              href="https://xr7tsi.github.io/News-Flash/"
              className="btn btn-primary"
              style={styles.buttonPrimary}
              target="_blank" rel="noopener noreferrer"
            >
              <h5>See it deployed</h5>
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      {/* provides brief period with no image. */}
      <Carousel.Item interval={200}></Carousel.Item>

      <Carousel.Item interval={1500}>
        <img className="d-block w-100" src={weather} alt="Weather Dashboard" />
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={weatherBlur}
          alt="WeatherDashboard blurred"
        />
        <Carousel.Caption style={styles.carouselCaption}>
          <h3>
            Weather Dashboard provides weather data for any city in the world.
          </h3>
          <h3>
            It's built with JavaScript. It uses APIs, bootstrap and local
            storage.
          </h3>
          <h3>
            <a
              href="https://github.com/Xr7TSi/Weather-Dashboard"
              className="btn btn-primary"
              style={styles.buttonPrimary}
              target="_blank" rel="noopener noreferrer"
            >
              <h5>See the repo</h5>
            </a>
            <a
              href="https://xr7tsi.github.io/Weather-Dashboard/"
              className="btn btn-primary"
              style={styles.buttonPrimary}
              target="_blank" rel="noopener noreferrer"
            >
              <h5>See it deployed</h5>
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      {/* provides brief period with no image. */}
      <Carousel.Item interval={200}></Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={birthday}
          alt="Tick Tock Birthday Clock"
          target="_blank" rel="noopener noreferrer"
        />
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={birthdayBlur}
          alt="Tick Tock Birthday Clock blurred"
          target="_blank" rel="noopener noreferrer"
        />
        <Carousel.Caption style={styles.carouselCaption}>
          <h3>
            Tick Tock Birthday Clock is a place to create and share birthday
            wishlists.
          </h3>
          <h3>
            It's built with JavaScript. It uses mysql, bcrypt, dotenv, express,
            handlebars, bootstrap, session and sequelize.
          </h3>
          <h3>
            <a
              href="https://github.com/Xr7TSi/Tick-Tock-Birthday-Clock/"
              className="btn btn-primary"
              style={styles.buttonPrimary}
              target="_blank" rel="noopener noreferrer"
            >
              <h5>See the repo</h5>
            </a>
            <a
              href="https://tick-tock-birthday-clock.herokuapp.com/"
              className="btn btn-primary"
              style={styles.buttonPrimary}
              target="_blank" rel="noopener noreferrer"
            >
              <h5>See it deployed</h5>
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      {/* provides brief period with no image. */}
      <Carousel.Item interval={200}></Carousel.Item>


      <Carousel.Item interval={1500}>
        <img className="d-block w-100" src={workday} alt="Workday Scheduler" />
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={workdayBlur}
          alt="Workday Scheduler blurred"
        />
        <Carousel.Caption style={styles.carouselCaption}>
          <h3>Workday Scheduler is a day planner.</h3>
          <h3>
            It's built with JavaScript. It uses moment.js, bootstrap and local
            storage.
          </h3>
          <h3>
            <a
              href="https://github.com/Xr7TSi/Workday-Scheduler/"
              className="btn btn-primary"
              style={styles.buttonPrimary}
              target="_blank" rel="noopener noreferrer"
            >
              <h5>See the repo</h5>
            </a>
            <a
              href="https://xr7tsi.github.io/Workday-Scheduler/"
              className="btn btn-primary"
              style={styles.buttonPrimary}
              target="_blank" rel="noopener noreferrer"
            >
              <h5>See it deployed</h5>
            </a>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>      

    </Carousel>
    
  );
}


export default Work;