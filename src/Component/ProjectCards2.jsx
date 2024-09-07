
export const ProjectCards2 = ({ title, desc, image }) => {
  return (
    <div>
      <div className="proj-imgbx">
        <img src={image} alt="photo" className="img-fluid"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{desc}</span>
        </div>
      </div>
    </div>
  )
}
