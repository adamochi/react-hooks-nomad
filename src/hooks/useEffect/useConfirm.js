import { useRef } from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (!onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      //eslint-disable-line
      onConfirm();
    } else onCancel(message);
  };
  return confirmAction;
};

export default function ConfirmDelete() {
  const deleted = useRef();
  const deleteWorld = () => {
    deleted.current.innerText = "world is being deleted. . .";
    console.log("world is being deleted...");
  };
  const abort = () => {
    deleted.current.innerText = "disaster has been averted";
    console.log("disaster has been averted");
  };
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
      <h2 ref={deleted}>hi</h2>
    </div>
  );
}
