import React, { useState } from "react";

export default function ListTask({ arrTask, setArrTask }) {
  function deleteTask(index) {
    let newList = arrTask;
    delete newList[index];

    setArrTask(newList.filter((x) => x));
  }

  return (
    <>
      {arrTask &&
        arrTask.map((task, i) => (
            <>
                <li className="task" key={i} id={i}>
                    {task} <button onClick={() => deleteTask(i)}>X</button>
                </li>
                <hr />
            </>
        ))}
    </>
  );
}
