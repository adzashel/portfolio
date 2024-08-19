/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={6} lg={ 4 }>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="photo" className="img-fluid"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}