import React, { useEffect, useState } from "react";
import "./button.scss";

const Button = () => {
  const [count, setCount] = useState();

  useEffect(() => {
    const saved = localStorage.getItem("count");
    const parsedsaved = JSON.parse(saved);
    setCount(parsedsaved);
  }, []);

  const counter = () => {
    setCount((current) => current + 1);
    localStorage.setItem("count", count + 1);
  };

  if (localStorage.getItem("count") === null) {
    localStorage.setItem("count", 0);
    setCount(0);
  }
  // console.log(count);

  return (
    <div className="count-div">
      <button className="countBtn" onClick={counter}>
        My Click Collection:
      </button>
      <h3>{count}</h3>
    </div>
  );
};

export default Button;
