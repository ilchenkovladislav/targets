import data from "./data.json";
import TargetsList from "./components/TargetsList/TargetsList.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TargetsList targets={data.targets} />
    </div>
  );
}

export default App;
