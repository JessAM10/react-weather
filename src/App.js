import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <Weather city="Paris" />
      </header>
    </div>
  );
}
