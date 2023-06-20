function Filter({ onTypeChange }) {
  function onTypeChangeHandler(event) {
    onTypeChange(event.target.value);
  }
  return (
    <>
      <label htmlFor="activity-types">Filter by: </label>
      <select
        className="p-1 rounded-md border-2"
        name="types"
        id="activity-types"
        onChange={onTypeChangeHandler}
      >
        <option value="">Select activity type</option>
        <option value="Mowing">Mowing</option>
        <option value="Fertilisation">Fertilisation</option>
        <option value="Irrigation">Irrigation</option>
        <option value="Aeration">Aeration</option>
      </select>
    </>
  );
}
export default Filter;
