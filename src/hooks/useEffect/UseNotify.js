import React from "react";

function notifyMe(title, options) {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotify = () => {
    if ("Notification" in window !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotify;
}

const UseNotify = () => {
  const fuck = "Can I steal your kimchi?";
  const horny = "I love kimchi";
  const triggerNotify = notifyMe(fuck, { body: horny });
  return (
    <div>
      <button onClick={triggerNotify}>Notify me!</button>
    </div>
  );
};

export default UseNotify;
