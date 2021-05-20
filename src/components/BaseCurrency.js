const BaseCurrency = (props) => {
  const {
    updatedValue,
    currencies,
    currencyValue,
    handleChangeValue,
    handleCurrencyChange
  } = props


  return (
    <div className="converter-container">
      <form>
        <label
          htmlFor="currencyInputs"
          className="sr-only"
        >Starting Currency
        </label>
        <input
          type="number"
          name="currencyInputs"
          id="currencyInputs"
          className="form__input"
          min="1"
          value={updatedValue}
          onChange={handleChangeValue}
        />


        <select
          className="form__select"
          value={currencyValue}
          onChange={handleCurrencyChange}
        >
          {/* populate the options with the array key names */}
          {currencies.map((currency, index) => {
            return (

              <option key={index} value={currency}>{currency}</option>
            )
          })}

        </select>

      </form>
    </div>
  );
}

export default BaseCurrency;