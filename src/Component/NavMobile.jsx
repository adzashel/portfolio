import { NavLink } from "react-bootstrap"

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
        <NavLink href="#home">Home</NavLink>
        <NavLink   href="#skill">Skill</NavLink>
        <NavLink   href="#projects">Project</NavLink>
        <NavLink   href="#contact">Contact</NavLink>
      </div>
   </>
  )
}

export default NavMobile
