import { useState } from "react";
import Activity from "./Activity";
import EditActivity from "./EditActivity";
import AddActivity from "./AddActivity";
import Modal from "./Modal";
import Filter from "./Filter";
import moment from "moment";
import classes from "./ActivitiesList.module.css";

function ActivitiesList() {
  const [activitiesList, setActivities] = useState([
    {
      id: 1,
      name: "Activity 1",
      type: "Mowing",
      date: "Tuedsay, June 20, 2023 4:30 PM",
      pitch: 1,
      user: "John",
    },
    {
      id: 8,
      name: "Activity 5",
      type: "Aeration",
      date: "Tuedsay, June 20, 2023 4:30 PM",
      pitch: 1,
      user: "Zyad",
    },
    {
      id: 9,
      name: "Activity 1",
      type: "Mowing",
      date: "Friday, June 24, 2016 2:42 PM",
      pitch: 1,
      user: "John",
    },
    {
      id: 2,
      name: "Activity 2",
      type: "Fertilisation",
      date: "Friday, June 24, 2016 1:42 PM",
      pitch: 3,
      user: "Salma",
    },
    {
      id: 3,
      name: "Activity 3",
      type: "Irrigation",
      date: "Friday, June 24, 2016 05:00 PM",
      pitch: 1,
      user: "Omar",
    },
    {
      id: 4,
      name: "Activity 4",
      type: "Aeration",
      date: "Friday, June 24, 2016 12:00 PM",
      pitch: 2,
      user: "Zyad",
    },
    {
      id: 5,
      name: "Activity 1",
      type: "Mowing",
      date: "Friday, June 24, 2016 03:30 AM",
      pitch: 1,
      user: "Omar",
    },
    {
      id: 6,
      name: "Activity 2",
      type: "Fertilisation",
      date: "Friday, June 24, 2016 04:15 PM",
      pitch: 3,
      user: "Zyad",
    },
  ]);
  const [filteredActivitiesList, setFilteredActivitiesList] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [addModalIsVisible, setAddModalIsVisible] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(null);
  const [activityOverlap, setActivityOverlap] = useState(false);

  function hideModalHandler() {
    setAddModalIsVisible(false);
    setModalIsVisible(false);
    setActivityOverlap(false);
  }
  function showAddModal(event) {
    event.stopPropagation();
    setAddModalIsVisible(true);
  }
  function showModalHandler(activityId) {
    setCurrentActivity(
      activitiesList.find((activity) => activity.id === activityId)
    );
    setModalIsVisible(true);
  }
  function addActivityHandler(newActivity) {
    const activity = {
      id: newActivity.id,
      name: newActivity.name,
      date:
        moment(newActivity.date).format("LL") +
        " " +
        moment(newActivity.time, ["HH:mm"]).format("hh:mm a"),
      type: newActivity.type,
      pitch: newActivity.pitch,
      user: newActivity.user,
    };
    const samePitchActivities = activitiesList.filter(
      (item) => item.pitch == activity.pitch
    );
    const overlappedActivities = samePitchActivities.filter((item) =>
      moment(item.date).isSame(activity.date)
    );
    if (overlappedActivities.length) {
      setActivityOverlap(true);
    } else {
      //if state is based on previous state value, arrow function should be passed to setActivities
      setActivities((oldActivitiesList) => [activity, ...oldActivitiesList]);
      setAddModalIsVisible(false);
    }
  }
  function editActivityHandler(updatedTime) {
    const existsingActivity = activitiesList.find(
      (activity) =>
        moment(activity.date).format("hh:mm a") ===
        moment(updatedTime, ["HH:mm"]).format("hh:mm a")
    );
    if (existsingActivity) {
      setActivityOverlap(true);
    } else {
      setActivityOverlap(false);
      setModalIsVisible(false);
      //setting new date
      const newDate =
        moment(currentActivity.date).format("LL") +
        " " +
        moment(updatedTime, ["HH:mm"]).format("hh:mm a");
      console.log(newDate);
      //reflecting date change in list
      activitiesList.find(
        (activity) => activity.id === currentActivity.id
      ).date = newDate;
    }
  }
  function deleteActivityHandler(activityId) {
    setActivities((oldActivitiesList) => [
      ...oldActivitiesList.filter((activity) => activity.id !== activityId),
    ]);
    setFilteredActivitiesList((oldFilteredActivitiesList) => [
      ...oldFilteredActivitiesList.filter(
        (activity) => activity.id !== activityId
      ),
    ]);
  }
  function groupActivites(type) {
    if (type) {
      setFilteredActivitiesList(
        activitiesList.filter((activity) => activity.type === type)
      );
      setFilterValue(type);
    } else {
      setFilteredActivitiesList([]);
      setFilterValue("");
    }
  }
  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <EditActivity
            onCancel={hideModalHandler}
            editActivityHandler={editActivityHandler}
            currentActivity={currentActivity}
            activityOverlap={activityOverlap}
          />
        </Modal>
      ) : null}
      {addModalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <AddActivity
            onCancel={hideModalHandler}
            addActivityHandler={addActivityHandler}
            activityOverlap={activityOverlap}
          />
        </Modal>
      ) : null}
      <div className="flex justify-between items-center">
        <div>
          <Filter onTypeChange={groupActivites} />
        </div>
        <button type="button" className="btn" onClick={showAddModal}>
          Schedule activity
        </button>
      </div>
      <table className="table-fixed w-screen max-w-full border-collapse mt-8 shadow-2xl">
        <thead>
          <tr className="border-b-2">
            <th className="py-4">Activity</th>
            <th className="py-4">Type</th>
            <th className="py-4">Date</th>
            <th className="py-4">Pitch</th>
            <th className="py-4">Assignee</th>
            <th className="py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="6">
              <div className={classes.scrollBody}>
                <table className="w-full table-fixed">
                  <tbody>
                    {filterValue && filteredActivitiesList.length == 0 ? (
                      <tr className="text-center">
                        <td className="py-4">
                          There are no activities of this type.
                        </td>
                      </tr>
                    ) : filteredActivitiesList.length > 0 ? (
                      <>
                        {filteredActivitiesList.map((activity) => (
                          <Activity
                            key={activity.id}
                            activity={activity}
                            onEditActivity={showModalHandler}
                            onDeleteActivity={deleteActivityHandler}
                          />
                        ))}
                      </>
                    ) : activitiesList.length > 0 ? (
                      <>
                        {activitiesList.map((activity) => (
                          <Activity
                            key={activity.id}
                            activity={activity}
                            onEditActivity={showModalHandler}
                            onDeleteActivity={deleteActivityHandler}
                          />
                        ))}
                      </>
                    ) : (
                      <tr className="text-center">
                        <td className="py-4">
                          There are no activities at the time.
                          <p>Start adding some</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default ActivitiesList;
