import React, { useState } from "react";

function ToDoInsert({ setToDoTaskList }) {
  const [taskName, setTaskName] = useState("");

  return (
    <div className=" flex gap-4 justify-center items-center">
      <input
        className="w-96 bg-slate-300 rounded-xl p-4 tracking-wide"
        onChange={(event) => setTaskName(event.target.value)}
        value={taskName}
        placeholder="Add Your TO DO"></input>
      <button
        className="bg-blue-400 p-4 rounded-xl outline hover:bg-blue-500"
        onClick={() => {
          setToDoTaskList((prevList) => [...prevList, taskName]);
          setTaskName("");
        }}>
        {" "}
        Add
      </button>
    </div>
  );
}

export default ToDoInsert;
