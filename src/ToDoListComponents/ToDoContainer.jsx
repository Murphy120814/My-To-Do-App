import React, { useEffect, useState } from "react";
import ToDoInsert from "./ToDoInsert";
import ToDoTaskContainer from "./ToDoTaskContainer";
import moonPng from "../assets/moon.png";
import sunPng from "../assets/sun.png";

function ToDoContainer() {
  const [toDoTaskList, setToDoTaskList] = useState([]);
  const [theme, setTheme] = useState("dark");
  // useEffect(() => {
  //   if (window.matchMedia("(prefer-color-scheme:dark)").matches) {
  //     setTheme("dark");
  //   }
  //   setTheme("light");
  // }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    }
    if (theme === "light") {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="flex flex-col items-center shadow-md dark:shadow-slate-600 p-4">
      <div className="flex justify-between items-end mb-8 w-full p-4">
        <h1 className="text-center font-bold text-3xl "> My To Do List</h1>
        <button
          className="shadow-md dark:shadow-slate-500 flex justify-between items-center p-2 rounded-2xl"
          onClick={handleTheme}>
          <img
            src={theme === "light" ? moonPng : sunPng}
            className="h-[30px] w-[30px] mr-2"
            alt="Light and dark mode"></img>
          <span>{theme === "light" ? "dark" : "light"}</span>
        </button>
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
