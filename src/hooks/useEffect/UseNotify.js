import React from "react";
function notifyMe() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    let notification = new Notification("Hi there!");
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        let notification = new Notification("Hi there!");
      }
    });
  }
}

const UseNotify = () => {
  const noti = notifyMe();
  return (
    <div>
      <button onClick={noti}>Notify me!</button>
    </div>
  );
};

export default UseNotify;
