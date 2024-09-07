/* eslint-disable react/prop-types */

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div >
      <div className="proj-imgbx">
        <img src={imgUrl} alt="photo" className="img-fluid"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </div>
  )
}