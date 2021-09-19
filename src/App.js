import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { VscAdd } from "react-icons/vsc";
import CircleIcon from "./CircleIcon";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  function addInTodo(e) {
    e.preventDefault();
    if (!value) return;
    setData([...data, { id: `${Date.now()}`, title: value }]);
    setValue("");
  }
  function removeFromTodo(id) {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  }

  return (
    <main className="todo">
      <div className="title">
        <h1>TODO</h1>
      </div>
      <div className="addTodoBox">
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
          <button type="submit" className="addTodoBtn">
            <VscAdd size="1.4em" color="hsl(233, 14%, 35%)" />
          </button>
        </form>
      </div>
      <ul className="todoList">
        {data.map((item) => {
          const { id, title } = item;
          return (
            <li key={id} className="listBox">
              <CircleIcon />
              <div className="listContent">
                <p>{title}</p>
                <button onClick={() => removeFromTodo(id)} className="closeBtn">
                  <AiOutlineClose size="1.4em" color="hsl(233, 14%, 35%)" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
