import logo from "./logo.svg";
import "./App.css";
import ConfirmDelete from "./hooks/useConfirm";
import PreventLeave from "./hooks/usePreventLeave";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ConfirmDelete />
        <br />
        <PreventLeave />
        <br />
      </header>
    </div>
  );
}

export default App;
