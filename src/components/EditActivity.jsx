import classes from "./EditActivity.module.css";
import { useState } from "react";
import moment from "moment";

function EditActivity({
  onCancel,
  editActivityHandler,
  currentActivity,
  activityOverlap,
}) {
  const [activityTime, setActitvityTime] = useState("");
  const [timeChanged, setTimeChanged] = useState(false);

  function timeChangeHandler(event) {
    setActitvityTime(event.target.value);
    setTimeChanged(true);
  }
  function submitHandler(event) {
    //prevent the browser from sending an http request to prevent the page from reloading
    //as we are not making a call to the backend
    event.preventDefault();
    editActivityHandler(activityTime);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h2 className="text-lg mb-3">Change {currentActivity.name} time</h2>
      {activityOverlap && (
        <p className="text-red-400 text-base">
          Only one activity can be performed at a time.
        </p>
      )}
      <p>
        <input
          type="time"
          id="time"
          required
          onChange={timeChangeHandler}
          placeholder="Activity time"
          min="00:00"
          max="23:00"
          value={activityTime || moment(currentActivity.date).format("HH:mm")}
        />
      </p>
      <p className={classes.actions}>
        <button className="mx-1" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button disabled={!timeChanged} className="mx-1">
          Submit
        </button>
      </p>
    </form>
  );
}
export default EditActivity;
