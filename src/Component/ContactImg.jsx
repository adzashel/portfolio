/* eslint-disable react/prop-types */
import {Col} from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';

const ContactImg = ({ img }) => {
  
  return (
    <Col size={12} sm={6}>
    <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={
              isVisible
                ? "animate__animated animate__fadeInRight  contact-img "
                : "contact-img animate__animated animate__fadeOutRight "
            }
          >
            <img src={img} alt="contact" />
          </div>
        )}
      </TrackVisibility>
    </Col>
  )
}

export default ContactImg
