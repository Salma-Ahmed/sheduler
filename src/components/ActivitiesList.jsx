import { useState } from "react";
import Activity from "./Activity";
import classes from "./Activity.module.css";
import EditActivity from "./EditActivity";
import Modal from "./Modal";

function ActivitiesList({
  modalIsVisible,
  hideModalHandler,
  showModalHandler,
}) {
  const [activitiesList, setActivities] = useState([]);
  function editActivityHandler(activityData) {
    //if state is based on previous satet value, arrow should be passed to setActivities
    setActivities((oldActivitiesList) => [activityData, ...oldActivitiesList]);
    console.log(activitiesList);
  }
  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <EditActivity
            onCancel={hideModalHandler}
            editActivityHandler={editActivityHandler}
          />
        </Modal>
      ) : null}
      {activitiesList.length > 0 && (
        <ul className={classes.activities}>
          <Activity name="activity1" onEditActivity={showModalHandler} />
          {activitiesList.map((activity) => (
            <Activity
              key={activity.activityTitle}
              name="activity1"
              onEditActivity={showModalHandler}
            />
          ))}
        </ul>
      )}
      {activitiesList.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <h2>There are no activities yet.</h2>
          <p>Start adding some</p>
        </div>
      )}
    </>
  );
}
export default ActivitiesList;
