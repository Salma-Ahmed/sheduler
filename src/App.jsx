import "./App.css";
import ActivitiesList from "./components/ActivitiesList";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="sm:container relative h-full">
      <h1 className="my-8 text-gray-500">Activity Scheduler</h1>
      <ActivitiesList />
      <Weather />
    </div>
  );
}

export default App;
