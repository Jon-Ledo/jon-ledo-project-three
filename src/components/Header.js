import NavBar from './NavBar';
import Image from '../assets/undraw_Calculator_0evy.svg'

const Header = () => {
  return (
    <header className="home">
      <NavBar />
      <div className="box-container">
        <h1 id="home">Online Converters</h1>
        <h2>Select what you need from the top</h2>

        <div className="img-container">
          <img src={Image} alt="illustrated man standing in front of large calculator" />
        </div>
      </div>
    </header>
  );
}

export default Header;