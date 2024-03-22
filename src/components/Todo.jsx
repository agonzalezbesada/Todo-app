import React, { useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";


export default function Todo() {

    const [arrTask, setArrTask] = useState([]);

    return (
        <div className="todo-container">
            <h1 className="todo-title">To do list</h1>
            <hr className="tasks-list-limit" />
            <ul className="tasks-list">
                <ListTask arrTask={arrTask} setArrTask={setArrTask} />
            </ul>
            <hr className="tasks-list-limit" />
            <AddTask arrTask={arrTask} setArrTask={setArrTask}/>

        </div>

    )
}