import logo from "./logo.svg";
import "./App.css";
import ConfirmDelete from "./hooks/useEffect/useConfirm";
import PreventLeave from "./hooks/useEffect/usePreventLeave";
// import BeforeLeave from "./hooks/useEffect/useBeforeLeave";
import FadeInStuff from "./hooks/useEffect/useFadeIn";
import UseNetwork from "./hooks/useEffect/useNetwork";
import UseScroll from "./hooks/useEffect/UseScroll";
import UseFullScreen from "./hooks/useEffect/UseFullScreen";
import UseNotify from "./hooks/useEffect/UseNotify";
import Button from "./someelements/Button";
function App() {
  return (
    <div className="App">
      <div className="statusbar">
        <UseNetwork />
      </div>
      <header className="App-header">
        <UseNotify />
        <img src={logo} className="App-logo" alt="logo" />
        <ConfirmDelete />
        <br />
        <Button />
        <br />
        <PreventLeave />
        <br />
        <UseScroll />
        <br />
        <FadeInStuff />
        <br />
        <UseFullScreen />
        <br />
      </header>
    </div>
  );
}

export default App;
