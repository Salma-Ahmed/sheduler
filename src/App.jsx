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
    <main>
      <Weather />
      <ActivitiesList
        showModalHandler={showModalHandler}
        hideModalHandler={hideModalHandler}
        modalIsVisible={modalIsVisible}
      />
    </main>
  );
}

export default App;
