import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/books.png";
import projImg2 from "../assets/img/Calculator.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/MongoDb.png";
import projImg5 from "../assets/img/project-img1.png";
import projImg6 from "../assets/img/webport.png";
import projImg7 from "../assets/img/todolist.png"
import projImg8 from "../assets/img/WebDesign.png";
import projImg9 from "../assets/img/githubuser.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ProjectContainer } from '../Component/ProjectContainer';

export const Projects = () => {
  // project for first tab
  const projects = [
    {
      title: "Books Directory",
      description: "Vite And Bootstrap",
      imgUrl: projImg1,
    },
    {
      title: "Calculator",
      description: "HTML , CSS, JavaScript",
      imgUrl: projImg2,
    },
    {
      title: "Employee ContactApp",
      description: "ExpressJS , JavaScript, NodeJs, Bootstrap",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "ReactJs",
      imgUrl: projImg3,
    },
    {
      title: "Travel Landing Page",
      description: "Vuejs ",
      imgUrl: projImg5,
    },
    {
      title: "Portfolio Website",
      description: "Vite , bootstrap, ReactJs",
      imgUrl: projImg6,
    },
  ];

  // Projects for second tab
  const projects2 = [
    {
      title: "TodoList App ",
      desc: "Html , CSS , JavaScript",
      image: projImg7,
    },
    {
      title: "Github Search User ",
      desc: "React js",
      image: projImg9,
    },
    {
      title: "Web Design ",
      desc: "Figma , Photoshop",
      image: projImg8,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
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
            <ProjectContainer projectData={projects} projectData2={ projects2 }/>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
