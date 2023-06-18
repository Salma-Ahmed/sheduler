import "./App.css";
import ActivitiesList from "./components/ActivitiesList";
import Weather from "./components/Weather";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <div className="sm:container">
      <h1 className="my-8 text-gray-500">Activity Scheduler</h1>
      <ActivitiesList
        showModalHandler={showModalHandler}
        hideModalHandler={hideModalHandler}
        modalIsVisible={modalIsVisible}
      />
      <Weather />
    </div>
  );
}

export default App;
