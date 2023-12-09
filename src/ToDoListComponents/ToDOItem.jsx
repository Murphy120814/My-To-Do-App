import React, { useState } from "react";
import checkedPNG from "../assets/check-mark.png";
import deletePNG from "../assets/delete.png";
import undoPNG from "../assets/undo.png";

function ToDOItem({ task, setToDoTaskList }) {
  const [doneItem, setDoneItem] = useState(false);

  return (
    <div className="w-full bg-slate-300 dark:text-black shadow-lg dark:shadow-slate-600 text-lg rounded-xl my-4 p-4 flex justify-between items-center">
      <span className={doneItem && "line-through"}>{task}</span>
      <div className="flex justify-center items-center gap-2">
        <img
          src={doneItem ? undoPNG : checkedPNG}
          onClick={() => setDoneItem((prevVal) => !prevVal)}
          className="w-[20px] h-[20px] cursor-pointer"></img>
        <img
          src={deletePNG}
          onClick={() => {
            setToDoTaskList((prevVal) =>
              prevVal.filter((taskItem) => taskItem !== task)
            );
          }}
          className="w-[20px] h-[20px] cursor-pointer"></img>
      </div>
    </div>
  );
}

export default ToDOItem;
