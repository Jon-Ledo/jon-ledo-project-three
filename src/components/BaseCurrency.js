const BaseCurrency = (props) => {
  const {
    updatedValue,
    currencies,
    handleChangeValue
  } = props

  return (
    <div className="converter-container">
      <form>
        <label
          htmlFor="currencyInputs"
          className="sr-only"
        >Enter your current amount in Euro
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
        >
          <option>
            {currencies[1]}
          </option>

        </select>
      </form>
    </div>
  );
}

export default BaseCurrency;