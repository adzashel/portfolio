
const NavMobile = ({ onHandleBars }) => {
  return (
   <>
    <div className="nav-mobile-container">
        <h2>Portfolio</h2>
        {/* Hamburger */}
        <input id="burger-checkbox" type="checkbox" />
        <label
          className="burger"
          htmlFor="burger-checkbox"
          onClick={ onHandleBars }
        >
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div id="myLinks">
        <a href="#home">Home</a>
        <a href="#skill">Skill</a>
        <a href="#projects">Project</a>
        <a href="#contact">Contact</a>
        <a href="#footer">Footer</a>
      </div>
   </>
  )
}

export default NavMobile
