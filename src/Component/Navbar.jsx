import "animate.css"

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
      <div className="nav-mobile-container">
        <h2>Portfolio</h2>
        {/* Hamburger */}
        <input id="burger-checkbox" type="checkbox" />
        <label
          className="burger"
          htmlFor="burger-checkbox"
          onClick={handleBars}
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
  );
};
