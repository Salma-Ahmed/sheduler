import classes from "./EditActivity.module.css";
import { useState } from "react";

function EditActivity({ onCancel, editActivityHandler }) {
  const [activityTitle, setActitvityTitle] = useState("");
  const [activityDate, setActitvityDate] = useState("");

  function titleChangeHandler(event) {
    setActitvityTitle(event.target.value);
  }
  function dateChangeHandler(event) {
    setActitvityDate(event.target.value);
  }
  function submitHandler(event) {
    //prevent the browser from sending an http request to prevent the page from reloading
    //as we are not making a call to the backend
    event.preventDefault();
    const activityData = {
      activityTitle,
      activityDate,
    };
    console.log(activityData);
    editActivityHandler(activityData);
    onCancel();
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <input
          type="text"
          id="title"
          required
          onChange={titleChangeHandler}
          placeholder="Activity name"
        />
      </p>
      <p>
        <input
          type="time"
          id="date"
          required
          onChange={dateChangeHandler}
          placeholder="Activity time"
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}
export default EditActivity;
