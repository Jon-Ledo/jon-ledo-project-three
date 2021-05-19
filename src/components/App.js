import { useState, useEffect } from 'react';
import '../styles/App.css';
import Header from './Header';
import Converter from './Converter';
import RomanNumeral from './RomanNumeral';

function App() {
  // API url
  const url = new URL(`https://api.ratesapi.io/api/latest`);

  // starting state for API fetch
  const [currencies, setCurrencies] = useState([]);
  // states for the first currency
  const [startCurrency, setStartCurrency] = useState();
  // states for the second currency
  const [endCurrency, setEndCurrency] = useState();
  // states for updating the input elements
  const [value, setValue] = useState(1); // base value CAD
  const [rates, setRates] = useState();

  const [valueOfSelectedCurrency, setValueOfSelectedCurrency] = useState(true)
  let startValue;
  let endValue;
  if (valueOfSelectedCurrency) {
    startValue = value;
    endValue = value * rates;
  } else {
    startValue = value;
    endValue = value / rates
  }


  // whenever a currency option changes, use the event.target to apply the new option to the screen
  // Start currency
  const handleStartCurrencyChange = (event) => {
    setStartCurrency(event.target.value)
  }
  // End currency
  const handleEndCurrencyChange = (event) => {
    setEndCurrency(event.target.value)
  }


  useEffect(() => {
    const searchParams = new URLSearchParams(
      {
        base: 'CAD'
      }
    );

    // fetch data from API
    url.search = searchParams;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        const data = jsonResponse;
        console.log(data);
        // store that data into the useState variables 
        //"Object.keys() method returns an array of a given object's own enumerable property names"
        // data.base === CAD (set at the start) 
        setCurrencies([data.base, ...Object.keys(data.rates)])
        setStartCurrency(data.base)
        const firstValue = Object.keys(data.rates)[0]
        setEndCurrency(firstValue) // FIXME change to random
        // set exchangfe rate value of first item in the array 
        setRates(data.rates[firstValue])
      })
  }, [])


  useEffect(() => {
    if (startCurrency != null && endCurrency != null) {

      const newSearchParams = new URLSearchParams(
        {
          base: `${startCurrency}`
        }
      );
      //fetch updated API for new conversion
      url.search = newSearchParams;
      fetch(url)
        .then(response => response.json())
        .then(jsonResponse => setRates(jsonResponse.rates[endCurrency]))
    }
  }, [startCurrency, endCurrency])



  // 
  const handleStartChangeValue = (event) => {
    setValue(event.target.value)
    setValueOfSelectedCurrency(true)
  }
  const handleEndChangeValue = (event) => {
    setValue(event.target.value)
    setValueOfSelectedCurrency(false)
  }

  return (
    <div className="wrapper">
      <Header />

      {/* starting currency */}
      <div className="converter-container-main" id="converter">
        <h2 className="converter__title">Currency Converter</h2>
        <Converter
          currencies={currencies}
          currencyValue={startCurrency}
          handleCurrencyChange={handleStartCurrencyChange}
          handleChangeValue={handleStartChangeValue}
          updatedValue={startValue}
        />

        {/* output currency */}
        <Converter
          currencies={currencies}
          currencyValue={endCurrency}
          handleCurrencyChange={handleEndCurrencyChange}
          handleChangeValue={handleEndChangeValue}
          updatedValue={endValue}
        />
      </div>

      {/* roman numeral temporary space */}
      <RomanNumeral />
    </div>
  );
}

export default App;
