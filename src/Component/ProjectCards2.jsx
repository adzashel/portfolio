import { Col } from "react-bootstrap";


export const ProjectCards2 = ({ title, desc, image }) => {
  return (
    <Col size={12} sm={6} md={6} lg={ 4 }>
      <div className="proj-imgbx">
        <img src={image} alt="photo"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{desc}</span>
        </div>
      </div>
    </Col>
  )
}
