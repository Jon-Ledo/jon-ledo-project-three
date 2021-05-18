const NavBar = () => {
  return (
    <nav className="nav">
      <p>
        <a href="#home" className="nav__logo">
          Logo //here
        </a>
      </p>

      <ul className="nav__links-container">
        <li className="nav__links-container-items">
          <a href="#home" className="nav__links-container-links">
            Home
          </a>
        </li>

        <li className="nav__links-container-items">
          <a href="#home" className="nav__links-container-links">
            Blog
          </a>
        </li>

        <li className="nav__links-container-items">
          <a href="#home" className="nav__links-container-links">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;