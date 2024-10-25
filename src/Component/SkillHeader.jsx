import TrackVisibility from 'react-on-screen'

const SkillHeader = () => {
  return (
    <TrackVisibility>
    {({ isVisible }) => (
      <>
        <h2
          className={
            isVisible
              ? "animate__animated animate__fadeIn animate__slow"
              : "animate__animated animate__fadeOut animate__slow"
          }
        >56
          Skills
        </h2>
        <p
          className={
            isVisible
              ? "animate__animated animate__fadeIn animate__slow"
              : "animate__animated animate__fadeOut animate__slow"
          }
        >
          Technology that is my expertise in web developing<br></br>
          which is definitely needed in the industry
        </p>
      </>
    )}
  </TrackVisibility>
  )
}

export default SkillHeader
