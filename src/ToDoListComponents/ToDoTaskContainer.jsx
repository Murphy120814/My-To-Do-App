import React, { useState } from "react";
// import { ToDos } from "../constant";
import ToDOItem from "./ToDOItem";

function ToDoTaskContainer({ toDoTaskList, setToDoTaskList }) {
  return (
    <div className="flex flex-col justify-center items-center w-full   mt-8">
      {toDoTaskList.map((task, index) => {
        return (
          <ToDOItem
            task={task}
            key={index}
            setToDoTaskList={setToDoTaskList}
          />
        );
      })}
    </div>
  );
}

export default ToDoTaskContainer;
