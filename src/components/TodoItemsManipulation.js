import React from "react";
import ClearItems from "./ClearItems";
import ShowItems from "./ShowItems";

function TodoItemsManipulation() {
  return (
    <div>
      <ShowItems />
      <ClearItems />
    </div>
  );
}

export default TodoItemsManipulation;
