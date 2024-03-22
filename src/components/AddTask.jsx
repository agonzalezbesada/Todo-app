import React, { useState } from "react";

export default function AddTask({ arrTask, setArrTask }) {
  const [task, setTask] = useState("");

  function addTask(event) {
    if (!(task == "")) {
      setArrTask([...arrTask, task]);
    }

    setTask("");
    event.preventDefault();
  }

  return (
    <div className="add-task-container">
      <h2 className="add-task-text">Add a task:</h2>
      <form className="task-form">
        <input
          value={task}
          type="text"
          className="newTask"
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button type="submit" onClick={addTask}>
          ^
        </button>
      </form>
    </div>
  );
}
