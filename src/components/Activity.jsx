import classes from "./Activity.module.css";
import { MdOutlineEdit, MdDelete } from "react-icons/md";

function Activity({ name, onEditActivity }) {
  function deleteActivityHandler() {
    console.log("activity deleted");
  }
  return (
    <div className={classes.activity}>
      <p>{name}</p>
      <MdOutlineEdit onClick={onEditActivity} />
      <MdDelete onClick={deleteActivityHandler} />
    </div>
  );
}
export default Activity;
