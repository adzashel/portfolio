import { Col, Row, Alert } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

export const Newslatter = ({ status, message, onValidated }) => {
  let input;
  const submit = (e) => {
    e.preventDefault();
    input &&
      input.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: input.value,
      });
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <TrackVisibility>
          {({ isVisible }) => (
            <Row
              className={
                isVisible
                  ? "animate__animated animate__zoomIn"
                  : "animate__animated animate__zoomOut"
              }
            >
              <Col lg={7} md={6} xl={6}>
                <h3>
                  Subscribe to our Newsletter<br></br> & Never miss latest
                  updates
                </h3>
                {status === "sending" && <Alert>Sending...</Alert>}
                {status === "error" && (
                  <Alert variant="danger">{message}</Alert>
                )}
                {status === "success" && (
                  <Alert variant="success">{message}</Alert>
                )}
              </Col>
              <Col md={5} xl={6}>
                <form>
                  <div className="new-email-bx">
                    <input
                      ref={(node) => (input = node)}
                      type="email"
                      placeholder="Email Address"
                    />
                    <button onClick={submit} type="button">Submit</button>
                  </div>
                </form>
              </Col>
            </Row>
          )}
        </TrackVisibility>
      </div>
    </Col>
  );
};
