import { useState } from 'react';

const RomanNumeral = () => {
  const [roman, setRoman] = useState();
  const [romanInput, setRomanInput] = useState();

  const convertToRoman = (num) => {
    const keyIndex = {
      ↇ: 50000,
      ↂↇ: 40000,
      ↂ: 10000,
      Mↂ: 9000,
      ↁ: 5000,
      Mↁ: 4000,
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }

    let romanNum = "";
    if (num > 99999) {
      return "too high!"
    } else if (!num) {
      return "real numbers please"
    } else {
      for (let key in keyIndex) {
        while (num >= keyIndex[key]) {
          // build the numeral string
          romanNum += key;
          // decrease the num until 0 
          num -= keyIndex[key]
        }
      }
    }


    // fully constructed roman numeral string
    return romanNum
  }


  function handleChangeEvent(event) {
    setRomanInput(event.target.value)
    console.log(romanInput, "the usestate");
    console.log(event.target.value, "the target value");
  }

  const handleClick = (event) => {
    event.preventDefault();
    console.log(romanInput, "clicked");
    setRoman(convertToRoman(romanInput))
  }

  return (
    <div className="roman-numerals-container" id="romanNumeral">
      <h2>Roman Numeral Number Converter</h2>
      <form className="roman-numerals__form-container">
        <label
          htmlFor="roman-numeral-converter"
          className="roman-numerals__label"
        >
          Enter your number here
        </label>


        <input
          className="roman-numerals__input"
          name="roman-numeral-converter"
          type="number"
          value={romanInput}
          onChange={handleChangeEvent}
          min="1"
          max="99999"
          placeholder="max 99,999"
        >
        </input>

        <button
          type="submit"
          className="roman-numerals__btn"
          onClick={handleClick}
        >
          Romanize it
        </button>
      </form>

      <p className="roman-numerals__output" id="romanNumeralOutput">
        {roman}
      </p>
    </div>
  );
}

export default RomanNumeral;