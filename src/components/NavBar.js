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
          <a href="#converter" className="nav__links-container-links">
            Currency
            </a>
        </li>

        <li className="nav__links-container-items">
          <a href="#romanNumeral" className="nav__links-container-links">
            Roman Numerals
            </a>
        </li>

        <li className="nav__links-container-items">
          <a href="#comingSoon" className="nav__links-container-links">
            Coming soon...
            </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;