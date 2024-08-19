/* eslint-disable react/prop-types */
import TrackVisibility from 'react-on-screen';
import { Col,Row} from 'react-bootstrap';

export const ContactForm = ({  onHandleSubmit }) => {
  return (
    <Col size={12} md={6} xs={ 6 }>
    <TrackVisibility>
      {({ isVisible }) => (
        <div
          className={
            isVisible
              ? "animate__animated animate__fadeInLeft  contact-form"
              : "animate__animated animate__fadeOutLeft  "
          }
        >
          <h2>Contact Me</h2>
          <form  onSubmit={onHandleSubmit} action="https://api.web3forms.com/submit" method='POST'>
            <Row>
              <Col size={12} sm={6} xs={ 6 } className="px-1">
              <input type="hidden" name="access_key" value="ee5d031b-9827-49b6-ab60-119440134c76" />
                <input
                  type="text"
                  placeholder="enter ur Name"
                  name="name"
                />
              </Col>
              <Col size={12} sm={6} xs={ 6 } className="px-1">
                <input
                  type="text"
                  placeholder="enter ur last Name"
                  name="last-name"
                />
              </Col>
              <Col size={12} sm={6} xs={ 6 } className="px-1">
                <input
                  type="email"
                  placeholder="enter email"
                  name="email"
                />
              </Col>
              <Col size={12} sm={6} xs={ 6 } className="px-1">
                <input
                  type="tel"
                  placeholder="enter ur phone number"
                  name="phone"
                />
              </Col>
              <Col size={12} className="px-1">
                <textarea
                  rows={6}
                  placeholder="messages"
                  name="message"
                />
                <Col size={ 12 }>
                <button className="btn-send" type="submit">
                  <span>Send</span>
                </button>
                </Col>
                
              </Col>
            </Row>
          </form>
        </div>
      )}
    </TrackVisibility>
  </Col>
  )
}

