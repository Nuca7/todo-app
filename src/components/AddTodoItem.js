import React, { useState } from "react";
import { CircleIcon, VscAdd } from "../icons";
import { useGlobalContext } from "../context";

function AddTodoItem() {
  const { data, setData } = useGlobalContext();
  const [value, setValue] = useState("");

  function addInTodo(e) {
    e.preventDefault();
    if (!value) return;
    setData([...data, { id: `${Date.now()}`, title: value, completed: false }]);
    setValue("");
  }

  return (
    <div className="addTodoItem">
      <CircleIcon />
      <form onSubmit={addInTodo}>
        <input
          className="addTodoInput"
          type="text"
          spellCheck="false"
          placeholder="Create a new todo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">
          <VscAdd size="1.4em" color="hsl(233, 14%, 35%)" />
        </button>
      </form>
    </div>
  );
}

export default AddTodoItem;
