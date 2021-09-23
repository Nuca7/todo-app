import React from "react";
import { CircleIcon, AiOutlineClose } from "../icons";
import { useGlobalContext } from "../context";

function TodoItems() {
  const { data, setData, currentData } = useGlobalContext();

  function removeFromTodo(id) {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  }

  function toggleCompleted(id) {
    const newData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setData(newData);
  }

  return (
    <ul className="todoItems">
      {currentData.map((item) => {
        const { id, title, completed } = item;
        return (
          <li key={id} className="todoItem">
            <button onClick={() => toggleCompleted(id)}>
              <CircleIcon show={completed} />
            </button>
            <div className="todoItemContent">
              <p className={`${completed ? "completed" : ""}`}>{title}</p>
              <button onClick={() => removeFromTodo(id)}>
                <AiOutlineClose size="1.4em" color="hsl(233, 14%, 35%)" />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoItems;
