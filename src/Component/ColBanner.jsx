import { Typewriter, Cursor } from "react-simple-typewriter";
import TrackVisibility from "react-on-screen";

const ColBanner = ({ name }) => {
  return (
    <div className="col-banner">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn animate__slow"
                      : ""
                  }
                >
                  <h5>Hi ! I am</h5> 
                  <h1 className="banner-name">{name}</h1>
                  <p>
                    I am a {" "}
                    <span>
                      <Typewriter
                        words={["FrontEnd Dev", "React Dev", "MERN Dev"]}
                        loop={false}
                        typeSpeed={80}
                        deleteSpeed={50}
                        delay={1500}
                      />
                    </span>
                    <Cursor />
                  </p>
                  <span></span>
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <a href="#contact">
                      <span className="button-text">Get in Touch</span>
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </div>
  )
}

export default ColBanner
