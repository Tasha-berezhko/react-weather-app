import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          Please check my open source code {""}
          <a
            href="https://github.com/Tasha-berezhko/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            here
          </a>
        </footer>
      </div>
    </div>
  );
}
