import React, { useEffect, useState } from "react";

const UseTheScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

const UseScroll = () => {
  const { y } = UseTheScroll();
  return (
    <div>
      <h1 style={{ margin: 0, color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
};

export default UseScroll;
