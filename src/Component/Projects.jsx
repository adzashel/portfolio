import { Container, Row } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import  project13 from "../assets/img/projectKhodam.png";
import project14 from '../assets/img/loginform.jpg';
import projImg15 from '../assets/img/weatherapp.png'
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ProjectContainer } from "../Component/ProjectContainer";
import project1 from '../database/project1.json'
import project2 from '../database/project2.json'

export const Projects = () => {
  const project3 = [
    {
      title: "Cek Khodam App",
      desc: "Reactjs",
      image: project13,
      link: "https://cek-khodam-roan.vercel.app/",
    },
    {
      title: "Express Login Form",
      desc: "Express , MongoDB",
      image: project14,
    },
    {
      title : "Weather Application with Forecast",
      desc : "Reactjs",
      image : projImg15,
    }
  ];

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
