const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else rejection(message);
  };
  return confirmAction;
};

export default function ConfirmDelete() {
  const deleteWorld = () => console.log("deleting the world...");
  const abort = () => console.log("disaster has been averted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}
