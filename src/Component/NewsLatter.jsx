import {  Alert } from "react-bootstrap";
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
    <div>
      <div className="newsletter-bx wow slideInUp">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible
                  ? "animate__animated animate__zoomIn"
                  : "animate__animated animate__zoomOut"
              }
            >
              <div className="subs-container">
                <div>
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
                </div>
                <div>
                  <form>
                    <div className="new-email-bx">
                      <input
                        ref={(node) => (input = node)}
                        type="email"
                        placeholder="Email Address"
                      />
                      <button onClick={submit} type="button" className="btn-subs">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
    </div>
  );
};
