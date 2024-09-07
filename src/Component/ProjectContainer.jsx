import { Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCards2 } from "../Component/ProjectCards2";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const ProjectContainer = ({ projectData, projectData2 }) => {
  return (
    <Tab.Container id="projects-tabs" defaultActiveKey="first">
      <TrackVisibility>
        {({ isVisible }) => (
          <Nav
            variant="pills"
            className={
              isVisible
                ? "nav-pills mb-5 justify-content-center align-items-center animate__animated animate__slideInUp "
                : "nav-pills mb-5 justify-content-center align-items-center animate__animated animate__fadeOut"
            }
            id="pills-tab"
          >
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Tab 3</Nav.Link>
            </Nav.Item>
          </Nav>
        )}
      </TrackVisibility>
      <Tab.Content
        id="slideInUp"
      >
        <Tab.Pane eventKey="first">
          <div className="project-container">
            {projectData.map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <div className="project-container">
            {projectData2.map((project2, index) => {
              return <ProjectCards2 key={index} {...project2} />;
            })}
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quam, quod neque provident velit, rem explicabo excepturi id illo
            molestiae blanditiis, eligendi dicta officiis asperiores delectus
            quasi inventore debitis quo.
          </p>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};
