import React, { useEffect, useState } from "react";

const Nettworkk = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  });
  return status;
};

const UseNetwork = () => {
  const handleNetworkChange = (onLine) => {
    console.log(onLine ? "We just went online" : "We are offline");
  };
  const onLine = Nettworkk(handleNetworkChange);
  return (
    <div>
      <h1> {onLine ? "🟢 you are Online" : "🔴 you are Offline"}</h1>
    </div>
  );
};

export default UseNetwork;
