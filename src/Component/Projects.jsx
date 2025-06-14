import { Container, Row } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ProjectContainer } from "../Component/ProjectContainer";
import projImg1 from "../assets/img/books.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/MongoDb.png";
import projImg5 from "../assets/img/project-img1.png";
import projImg6 from "../assets/img/webport.png";
import projImg8 from "../assets/img/WebDesign.png";
import projectImg10 from "../assets/img/quote-generator.png";
import project11 from "../assets/img/BookApp.png"
import project12 from "../assets/img/weather-app.png";
import project13 from "../assets/img/projectKhodam.png"
import project14 from '../assets/img/express_login.png';
import project15 from '../assets/img/coffeeshop.png'
import project16 from '../assets/img/POS.png'


const project1 = [
  {
    title: "Books Directory",
    description: "Vite And Bootstrap",
    imgUrl: projImg1,
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
  {
    title: "NextJs POS",
    description: "NextJs , Supabase , Clerk , Xendit",
    imgUrl: project16,
  },
]

const project2 = [

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
    desc: "Expressjs , NodeJs ",
    image: project11,
    link: "https://bookapp-sepia.vercel.app/",
  },
  {
    title: " Weather Application ",
    desc: "ReactJs , NodeJs , JavaScript",
    image: project12,
    link: "https://weather-app-mu-sooty-55.vercel.app/",
  },
]

const project3 = [
  {
    title: "Cek Khodam App",
    desc: "Reactjs",
    image: project13,
    link: "https://cek-khodam-roan.vercel.app/",
  },
  {
    title : "Login Form",
    desc : "Expressjs , MongoDB",
    image : project14,
  },
  {
    title : "Coffee Shop",
    image : project15,
    desc : "Reactjs",
  }
];

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
