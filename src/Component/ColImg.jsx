import TrackVisibility from 'react-on-screen';
import heroImg from "../assets/img/header-img.svg"

export const ColImg = () => {
  return (
    <div className="col-img">
    <TrackVisibility>
      {({ isVisible }) => (
        <img
          src={heroImg}
          id="image"
          className={
            isVisible ? "animate_animated  animate__zoomIn" : ""
          }
        />
      )}
    </TrackVisibility>
  </div>
  )
}


