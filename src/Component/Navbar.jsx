import "animate.css"
import NavMobile from "./NavMobile";

export const Navbar = () => {
  const handleBars = () => {
    const burgerList = document.querySelector("#myLinks");
    if (burgerList.style.display == "block") {
      burgerList.style.display = "none";
    } else {
      burgerList.style.display = "block";
    }
  };
  return (
    <>
      <nav className=" navigation">
        <a href="#home">
          <h1 className="nav-banner">Portfolio</h1>
        </a>

        <ul className="nav-links">
          <li>
            <button className="btn-links">
              <span>
                <a href="#home">Home</a>
              </span>
            </button>
          </li>
          <li>
            <button className="btn-links">
              <span>
                <a href="#skill">Skill</a>
              </span>
            </button>
          </li>
          <li>
            <button className="btn-links">
              <span>
                <a href="#projects">Projects</a>
              </span>
            </button>
          </li>
          <li>
            <button className="btn-links">
              <span>
                <a href="#contact">Contact</a>
              </span>
            </button>
          </li>
        </ul>
      </nav>
      <NavMobile onHandleBars={ handleBars }/>
    </>
  );
};
