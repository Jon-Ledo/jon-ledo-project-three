import { useState, useEffect } from 'react';

const RomanNumeral = () => {
  const [roman, setRoman] = useState();
  const [romanInput, setRomanInput] = useState()

  const url = `https://api.funtranslations.com/translate/roman-numerals.json?text=`;


  // get API data

  function handleChangeEvent(e) {
    setRomanInput(e.target.value)
    console.log(e.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();

    fetch(`${url}${romanInput}`)
      .then((res) => res.json())
      .then((data) => {
        const numeral = data.contents.translated;
        setRoman(numeral)
        console.log(numeral);
      })

  }

  return (
    <div className="roman-numeral-container">
      <form action="">
        <label htmlFor="">Enter your number here</label>
        <input
          type="text"
          value={romanInput}
          onChange={handleChangeEvent}
        >
        </input>

        <button type="submit" onClick={handleClick}>Submit</button>
      </form>

      <p id="romanNumeralOutput">
        {roman}
      </p>
    </div>
  );
}

export default RomanNumeral;