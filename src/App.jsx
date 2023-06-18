import "./App.css";
import ActivitiesList from "./components/ActivitiesList";
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
      <ActivitiesList
        showModalHandler={showModalHandler}
        hideModalHandler={hideModalHandler}
        modalIsVisible={modalIsVisible}
      />
    </main>
  );
}

export default App;
