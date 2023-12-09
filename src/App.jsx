import React from "react";

import ToDoContainer from "./ToDoListComponents/ToDoContainer";

function App() {
  return (
    <div className="w-full h-screen flex flex-col dark:bg-black dark:text-white items-center justify-start pt-16">
      <ToDoContainer />
    </div>
  );
}

export default App;
