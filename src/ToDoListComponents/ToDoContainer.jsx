import React, { useState } from "react";
import ToDoInsert from "./ToDoInsert";
import ToDoTaskContainer from "./ToDoTaskContainer";

function ToDoContainer() {
  const [toDoTaskList, setToDoTaskList] = useState([]);

  return (
    <div className="flex flex-col items-center shadow-md p-4">
      <div className="flex justify-between items-center mb-8 w-full p-4">
        <h1 className="text-center font-bold text-3xl "> My To Do List</h1>
        {/* <button className="outline bg-teal-300">This is button</button> */}
      </div>

      <ToDoInsert setToDoTaskList={setToDoTaskList} />
      <ToDoTaskContainer
        toDoTaskList={toDoTaskList}
        setToDoTaskList={setToDoTaskList}
      />
    </div>
  );
}

export default ToDoContainer;
