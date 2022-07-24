import logo from "./logo.svg";
import "./App.css";
import ConfirmDelete from "./hooks/useEffect/useConfirm";
import PreventLeave from "./hooks/useEffect/usePreventLeave";
// import BeforeLeave from "./hooks/useEffect/useBeforeLeave";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ConfirmDelete />
        <br />
        <PreventLeave />
        <br />
        {/* <BeforeLeave />
        <br /> */}
      </header>
    </div>
  );
}

export default App;
