import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Oslo" />
        <footer>
          <a
            href="https://github.com/hannethorud/react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced project
          </a>{" "}
          by Hanne S. Thorud
        </footer>
      </div>
    </div>
  );
}
