import { Container, Row } from "react-bootstrap";
import projImg1 from "../assets/img/books.png";
import projImg2 from "../assets/img/Calculator.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/MongoDb.png";
import projImg5 from "../assets/img/project-img1.png";
import projImg6 from "../assets/img/webport.png";
import projImg7 from "../assets/img/todolist.png";
import projImg8 from "../assets/img/WebDesign.png";
import projImg9 from "../assets/img/GitHub-search.png";
import projectImg10 from "../assets/img/quote-generator.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import project11 from "../assets/img/BookApp.png";
import project12 from "../assets/img/weatherApp.png";

import "animate.css";
import TrackVisibility from "react-on-screen";
import { ProjectContainer } from "../Component/ProjectContainer";

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
      link: "https://github.com/adzashel",
    },
    {
      title: "Github Search User ",
      desc: "React js",
      image: projImg9,
      link: "https://github-user-pink.vercel.app/",
    },
    {
      title: "Web Design ",
      desc: "Figma , Photoshop",
      image: projImg8,
      link: "https://www.youtube.com/@WindahBasudara/streams",
    },
    {
      title: "Quote Generator ",
      desc: "ReactJs , NodeJs , JavaScript",
      image: projectImg10,
      link: "https://random-quotes-sigma-sooty.vercel.app/",
    },
    {
      title: "Book Application ",
      desc: "ReactJs , NodeJs , JavaScript",
      image: project11,
      link : "https://bookapp-sepia.vercel.app/",
    },
    {
      title: " Weather Application ",
      desc: "ReactJs , NodeJs , JavaScript",
      image: project12,
      link : "https://weather-app-mu-sooty-55.vercel.app/",
    },
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
          <ProjectContainer projectData={projects} projectData2={projects2} />
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
