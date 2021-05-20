import { useState, useEffect } from 'react';
import '../styles/App.css';
import Header from './Header';
import BaseCurrency from './BaseCurrency';
import Converter from './Converter';
import RomanNumeral from './RomanNumeral';
import ComingSoon from './ComingSoon';
import Footer from './Footer';


const apiKey = 'd7d99b359e28897f35e79f8fca7e89ce'

function App() {
  // API url + proxy server
  const proxiedUrl = `http://api.exchangeratesapi.io/v1/latest`;

  const url = new URL('https://proxy.hackeryou.com');
  url.search = new URLSearchParams({
    reqUrl: proxiedUrl,
    'params[access_key]': apiKey,
    'params[symbols]': 'CAD, EUR, USD, AUD, SGD, CHF, KYD, GBP, JOD, OMR, BHD, KWD'
  });

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
    endValue = value * rates
  }


  // whenever a currency option changes, use the event.target to apply the new option to the screen

  // End currency
  const handleEndCurrencyChange = (event) => {
    setEndCurrency(event.target.value)
  }


  useEffect(() => {
    const searchUrl = () => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((jsonResponse) => {
          const data = jsonResponse;

          // store that data into the useState variables 
          setCurrencies([...Object.keys(data.rates)])
          setStartCurrency(data.base)
          // set the end currency option to the first currency from the array (hardcoded CAD from the api symbols param)
          const firstValue = Object.keys(data.rates)[0]
          setEndCurrency(firstValue)
          setRates(data.rates[firstValue])
        })
    }

    searchUrl();
    // eslint-disable-next-line
  }, [])


  useEffect(() => {
    const searchUrl = url

    if (startCurrency != null && endCurrency != null) {
      fetch(searchUrl)
        .then(response => response.json())
        .then(jsonResponse => setRates(jsonResponse.rates[endCurrency]))
    }
    // eslint-disable-next-line
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
    <>
      <div className="wrapper">
        <Header />

        <div className="converter-container__main" id="converter">
          <h2 className="converter__title">Currency Converter</h2>
          <h3>Compare against the Euro (more features soon!)</h3>

          {/* starting EUR currency */}
          <BaseCurrency
            currencies={currencies}
            handleChangeValue={handleStartChangeValue}
            updatedValue={startValue}
          />

          <div className="converter-container__equals-sign">
            =
          </div>

          {/* output currency */}
          <Converter
            currencies={currencies}
            currencyValue={endCurrency}
            handleCurrencyChange={handleEndCurrencyChange}
            handleChangeValue={handleEndChangeValue}
            updatedValue={endValue}
          />
        </div>

        <RomanNumeral />
        <ComingSoon />
      </div>
      <Footer />
    </>
  );
}

export default App;
