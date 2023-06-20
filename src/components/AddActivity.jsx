import uuid from "react-uuid";
import moment from "moment";

function AddActivity({
  handleActivityFormSubmit,
  onCancel,
  activityOverlap,
  currentActivity,
}) {
  function submitHandler(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    const newActivity = {
      id: currentActivity ? currentActivity.id : uuid(),
      name: event.target[0].value,
      date: event.target[1].value,
      time: event.target[2].value,
      type: event.target[3].value,
      pitch: event.target[4].value,
      user: event.target[5].value,
    };
    handleActivityFormSubmit(newActivity);
  }
  return (
    <form onSubmit={submitHandler}>
      <h2 className="text-xl mb-3">
        {currentActivity ? (
          <span>Edit {currentActivity.name}</span>
        ) : (
          <span>Add New Activity</span>
        )}
      </h2>
      <p className="mb-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          required
          placeholder="Activity name"
          className="w-full"
          defaultValue={currentActivity ? currentActivity.name : ""}
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
          defaultValue={
            currentActivity
              ? moment(currentActivity.date).format("YYYY-MM-DD")
              : ""
          }
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
          defaultValue={
            currentActivity ? moment(currentActivity.date).format("HH:mm") : ""
          }
        />
      </p>
      <p className="mb-3">
        <label htmlFor="types">Type</label>
        <select
          className="p-1 rounded-md border-2 block w-full"
          name="types"
          id="activity-types"
          required
          defaultValue={currentActivity ? currentActivity.type : ""}
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
          required
          defaultValue={currentActivity ? currentActivity.pitch : ""}
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
          required
          defaultValue={
            currentActivity ? currentActivity.user.toLowerCase() : ""
          }
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
