import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div>Hello World!</div>
      <span>
        <FontAwesomeIcon icon={faStar} />
      </span>
    </div>
  );
}

export default App;
