const Converter = () => {
  return (
    <div>
      <form>
        <label htmlFor="startingCurrency" className="sr-only">Starting Currency</label>
        <input type="number" name="startingCurrency" id="startingCurrency" />

        <select>
          <option></option>
        </select>

      </form>
    </div>
  );
}

export default Converter;