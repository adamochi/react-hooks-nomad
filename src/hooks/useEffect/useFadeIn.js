import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 1) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const FadeInStuff = () => {
  const fadeInH1 = useFadeIn(1, 3);
  const fadeInP = useFadeIn(1, 4);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>something something serene leftpad was deleted</p>
    </div>
  );
};
export default FadeInStuff;
