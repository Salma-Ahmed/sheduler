import {
  MdOutlineEdit,
  MdDelete,
  MdOutlineFace3,
  MdOutlineFace4,
  MdOutlineFace6,
} from "react-icons/md";
import classes from "./Activity.module.css";
import moment from "moment";

function Activity({ activity, onEditActivity }) {
  function deleteActivityHandler() {
    console.log("activity deleted");
  }
  return (
    <tr className="text-center border-b-2">
      <td className="py-3">{activity.name}</td>
      <td className="py-3 ">
        <span
          className={`${classes.type} ${classes[activity.type.toLowerCase()]}`}
        >
          {activity.type}
        </span>
      </td>
      <td className="py-3">
        <p>{moment(activity.date).format("ll")}</p>
        <p>{moment(activity.date).format("LT")}</p>
      </td>
      <td className="py-3">
        <div
          className={`flex flex-col justify-center items-center ${
            classes[activity.type.toLowerCase()]
          }`}
        >
          {activity.id % 2 == 0 ? (
            <MdOutlineFace4 />
          ) : activity.id % 3 === 0 ? (
            <MdOutlineFace6 />
          ) : (
            <MdOutlineFace3 />
          )}

          <p className="text-sm">{activity.user}</p>
        </div>
      </td>
      <td className="py-3">
        <div className="flex flex-row justify-center align-center">
          <MdOutlineEdit
            className="text-gray-400 text-lg mx-1 cursor-pointer"
            onClick={onEditActivity}
          />
          <MdDelete
            className="text-gray-400 text-lg mx-1 cursor-pointer"
            onClick={deleteActivityHandler}
          />
        </div>
      </td>
    </tr>
  );
}
export default Activity;
