const Converter = (props) => {
  const {
    updatedValue,
    currencies,
    currencyValue,
    handleChangeValue,
    handleCurrencyChange
  } = props

  return (
    <div>
      <form>
        <label
          // FIXME change the names here (startingcurrency)
          htmlFor="startingCurrency"
          className="sr-only"
        >Starting Currency
        </label>
        <input
          type="number"
          name="startingCurrency"
          id="startingCurrency"
          className="form__input"
          min="1"
          value={updatedValue}
          onChange={handleChangeValue}
        >
        </input>

        <select
          className="form__select"
          value={currencyValue}
          onChange={handleCurrencyChange}
        >
          {/* populate the options with the array key names */}
          {currencies.map((currency, index) => {
            return <option key={index} value={currency}>{currency}</option>
          })}

        </select>

      </form>
    </div>
  );
}

export default Converter;