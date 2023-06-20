import uuid from "react-uuid";

function AddActivity({ addActivityHandler, onCancel, activityOverlap }) {
  function submitHandler(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    const newActivity = {
      id: uuid(),
      name: event.target[0].value,
      date: event.target[1].value,
      time: event.target[2].value,
      type: event.target[3].value,
      pitch: event.target[4].value,
      user: event.target[5].value,
    };
    addActivityHandler(newActivity);
  }
  return (
    <form onSubmit={submitHandler}>
      <h2 className="text-xl mb-3">Add New Activity</h2>
      <p className="mb-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          required
          placeholder="Activity name"
          className="w-full"
        />
      </p>
      <p className="mb-3">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          required
          placeholder="Activity date"
          className="block w-full"
        />
      </p>
      <p className="mb-3">
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          required
          placeholder="Activity time"
          className="block w-full"
        />
      </p>
      <p className="mb-3">
        <label htmlFor="types">Type</label>
        <select
          className="p-1 rounded-md border-2 block w-full"
          name="types"
          id="activity-types"
        >
          <option value="">Select activity type</option>
          <option value="Mowing">Mowing</option>
          <option value="Fertilisation">Fertilisation</option>
          <option value="Irrigation">Irrigation</option>
          <option value="Aeration">Aeration</option>
        </select>
      </p>
      <p className="mb-3">
        <label htmlFor="types">Pitch</label>
        <select
          className="p-1 rounded-md border-2 block w-full"
          name="types"
          id="activity-types"
        >
          <option value="">Select pitch</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </p>
      <p className="mb-3">
        <label htmlFor="users">Assignee</label>
        <select
          className="p-1 rounded-md border-2 block w-full"
          name="userd"
          id="users"
        >
          <option value="">Select assignee</option>
          <option value="salma">Salma</option>
          <option value="omar">Omar</option>
          <option value="zyad">Zyad</option>
          <option value="john">john</option>
        </select>
      </p>
      {activityOverlap && (
        <p className="text-red-400 text-base mb-3">
          Only one activity can be done on a pitch at time.
        </p>
      )}
      <p className="actions">
        <button className="mx-1" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className="mx-1">Submit</button>
      </p>
    </form>
  );
}
export default AddActivity;
