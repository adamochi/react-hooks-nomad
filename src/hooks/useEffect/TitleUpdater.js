import "./styles.css";
import { useEffect, useState } from "react";

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
/*
export default function App() {
  const titleUpdater = useTitle("loading...");
  setTimeout(() => titleUpdater("home"), 5000);
  const sayHello = () => console.log("hello");

  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);

  useEffect(sayHello, [anumber]);

  return (
    <div className="App">
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
    </div>
  );
}
*/
