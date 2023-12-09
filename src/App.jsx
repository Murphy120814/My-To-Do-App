import React from "react";

import ToDoContainer from "./ToDoListComponents/ToDoContainer";

function App() {
  return (
    <div className="w-full h-screen flex flex-col m-16 items-center justify-start">
      <ToDoContainer />
    </div>
  );
}

export default App;
