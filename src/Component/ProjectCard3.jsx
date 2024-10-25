
const ProjectCard3 = ({ title , desc , image , link }) => {
  return (
    <div>
      <div className="proj-imgbx">
        <img src={image} alt="link" className="img-fluid" />
        <a href={link} className="proj-text">
          {" "}
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{desc}</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard3
