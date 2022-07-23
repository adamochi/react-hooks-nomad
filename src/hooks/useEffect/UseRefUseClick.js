import "./styles.css";
import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  if (typeof onClick != "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export default function App() {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  // const poptato = useRef();
  // setTimeout(() => poptato.current.focus(), 1000);
  // same as using get element by id/queryselector.
  return (
    <div className="App">
      {/* <input ref={poptato} placeholder="this input will focus" /> */}
      <h1 ref={title}>Hi</h1>
    </div>
  );
}
// when a component mounts, it adds an event.
// when a component unmounts, we need to clean up after the event.
// so will need to return a function.
// we don't want to have event listeners of unmounted components laying around
