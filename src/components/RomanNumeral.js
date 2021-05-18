import { useState, useEffect } from 'react';

const RomanNumeral = () => {
  const [roman, setRoman] = useState();
  const [romanInput, setRomanInput] = useState()

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
    for (let key in keyIndex) {
      // console.log(key, keyIndex[key]);
      while (num >= keyIndex[key]) {
        // build the numeral string
        romanNum += key;
        // decrease the num until 0 
        num -= keyIndex[key]
      }
    }
    // fully constructed roman numeral string
    return romanNum
  }


  function handleChangeEvent(e) {
    setRomanInput(e.target.value)
    console.log(romanInput, "the usestate");
    console.log(e.target.value, "the target value");
  }

  const handleClick = (event) => {
    event.preventDefault();
    console.log(romanInput, "clicked");
    setRoman(convertToRoman(romanInput))
  }

  return (
    <div className="roman-numeral-container">
      <form action="">
        <label htmlFor="">Enter your number here</label>
        <input
          type="number"
          value={romanInput}
          onChange={handleChangeEvent}
          min="1"
          max="50000"
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