import { Container, Row } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ProjectContainer } from "../Component/ProjectContainer";
import project1 from '../database/project1.json'
import project2 from '../database/project2.json'
import project3 from '../database/project3.json'

export const Projects = () => {
 

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <div size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn "
                      : "animate__animated animate__fadeOut"
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I Made Websites as my Portfolio, using recent Technology
                    such as Vite , TailwindsCSS , Bootstrap , React JS , Node
                    Etc
                  </p>
                </div>
              )}
            </TrackVisibility>
          </div>
          <ProjectContainer
            projectData={project1}
            projectData2={project2}
            projects3={project3}
          />
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
