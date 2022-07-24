import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    // console.log(event);
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    } // console.log("leaving");
    // onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

export default function BeforeLeave() {
  //   const leavingMouse = useRef();
  const begForLife = () => console.log("Pls don't leave");
  //   const begForLife = () => (leavingMouse.current.innerText = "Pls don't leave");
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1 ref={leavingMouse}>when mouse leaves page. .</h1>
    </div>
  );
}
