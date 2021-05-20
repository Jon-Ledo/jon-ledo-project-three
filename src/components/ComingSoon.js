import Construction from '../assets/undraw_logistics_x4dc.svg';

const ComingSoon = () => {
  return (
    <div id="comingSoon" className="soon soon__container">
      <h2 className="soon__title">Coming soon! More useful tools such as...</h2>
      <div className="soon__flex-container">

        <ul className="soon__list-container">
          <li>Scientific Calculator</li>
          <li>Celsius to Fahrenheit</li>
          <li>Palindrome Checker</li>
          <li>Metric Conversions</li>
          <li>Stopwatch</li>
        </ul>

        <div className="soon__img-container">
          <img src={Construction} alt="worker pushing boxes on a trolley" />
        </div>

      </div>
    </div>
  );
}

export default ComingSoon;