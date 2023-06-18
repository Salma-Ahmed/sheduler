import { useState } from "react";
import Activity from "./Activity";
import EditActivity from "./EditActivity";
import Modal from "./Modal";

function ActivitiesList({
  modalIsVisible,
  hideModalHandler,
  showModalHandler,
}) {
  const [activitiesList, setActivities] = useState([
    {
      id: 1,
      name: "Activity 1",
      type: "Mowing",
      date: "Friday, June 24, 2016 1:42 AM",
      pitch: 1,
      user: "John",
    },
    {
      id: 2,
      name: "Activity 2",
      type: "Fertilisation",
      date: "Friday, June 24, 2016 1:42 AM",
      pitch: 3,
      user: "Salma",
    },
    {
      id: 3,
      name: "Activity 3",
      type: "Irrigation",
      date: "Friday, June 24, 2016 1:42 AM",
      pitch: 1,
      user: "Omar",
    },
    {
      id: 4,
      name: "Activity 4",
      type: "Aeration",
      date: "Friday, June 24, 2016 1:42 AM",
      pitch: 2,
      user: "Zyad",
    },
    {
      id: 5,
      name: "Activity 1",
      type: "Mowing",
      date: "Friday, June 24, 2016 1:42 AM",
      pitch: 1,
      user: "John",
    },
    {
      id: 6,
      name: "Activity 2",
      type: "Fertilisation",
      date: "Friday, June 24, 2016 1:42 AM",
      pitch: 3,
      user: "Salma",
    },
  ]);
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
      {activitiesList.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <h2>There are no activities yet.</h2>
          <p>Start adding some</p>
        </div>
      )}
      <table className="table-auto w-screen max-w-full border-collapse mt-8 shadow-2xl">
        <thead>
          <tr className="border-b-2">
            <th className="py-4">Activity</th>
            <th className="py-4">Type</th>
            <th className="py-4">Date</th>
            <th className="py-4">Assignee</th>
            <th className="py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {activitiesList.length > 0 && (
            <>
              {activitiesList.map((activity) => (
                <Activity
                  key={activity.id}
                  activity={activity}
                  onEditActivity={showModalHandler}
                />
              ))}
            </>
          )}
        </tbody>
      </table>
    </>
  );
}
export default ActivitiesList;
