import { Col } from "react-bootstrap";

const FooterIcon = ({ children }) => {
  return (
    <Col size={12} sm={6} xs={ 8 } className="text-center text-sm-end">
          { children }
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
  )
}

export default FooterIcon
