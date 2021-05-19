import { useState, useEffect } from 'react';
import '../styles/App.css';
import Header from './Header';
import Converter from './Converter';
import RomanNumeral from './RomanNumeral';

// 	"Access Restricted - Your current Subscription Plan does not support HTTPS Encryption."
const apiKey = 'd7d99b359e28897f35e79f8fca7e89ce'

function App() {
  // API url
  const url = new URL(`http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`);
  // starting state for API fetch
  const [currencies, setCurrencies] = useState([]);
  // states for the first currency
  const [startCurrency, setStartCurrency] = useState();
  // states for the second currency
  const [endCurrency, setEndCurrency] = useState();
  // states for updating the input elements
  const [value, setValue] = useState(1); // base value EUR
  const [rates, setRates] = useState();

  const [valueOfSelectedCurrency, setValueOfSelectedCurrency] = useState(true)
  let startValue;
  let endValue;

  if (valueOfSelectedCurrency) {
    startValue = value;
    endValue = value * rates;
  }
  else {
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
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        const data = jsonResponse;
        // store that data into the useState variables 

        setCurrencies([...Object.keys(data.rates)])
        setStartCurrency(data.base)
        // set the end currency option to the first currency from the array
        const firstValue = Object.keys(data.rates)[0]
        setEndCurrency(firstValue)
        setRates(data.rates[firstValue])
      })

  }, [])


  useEffect(() => {
    if (startCurrency != null && endCurrency != null) {
      fetch(url)
        .then(response => response.json())
        .then(jsonResponse => setRates(jsonResponse.rates[endCurrency]))
    }
  }, [startCurrency, endCurrency]);


  // functions for updating the currency outputs, when directly being changed
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

      <div className="converter-container-main" id="converter">
        <h2 className="converter__title">Currency Converter</h2>
        {/* starting currency */}
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
