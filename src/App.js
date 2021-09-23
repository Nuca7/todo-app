import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { VscAdd } from "react-icons/vsc";
import CircleIcon from "./CircleIcon";

function App() {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [value, setValue] = useState("");
  const [active, setActive] = useState(0);

  useEffect(() => {
    setCurrentData(data);
    const active = data.filter((item) => item.completed === false);
    setActive(active.length);
  }, [data]);

  function addInTodo(e) {
    e.preventDefault();
    if (!value) return;
    setData([...data, { id: `${Date.now()}`, title: value, completed: false }]);
    setValue("");
  }

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

  function clear(val) {
    if (val === "completed") {
      const active = data.filter((item) => item.completed === false);
      setData(active);
    } else {
      setData([]);
    }
  }

  function show(val) {
    if (val === "all") {
      setCurrentData(data);
    } else if (val === "active") {
      const active = data.filter((item) => item.completed === false);
      setCurrentData(active);
    } else {
      const completed = data.filter((item) => item.completed === true);
      setCurrentData(completed);
    }
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
          <button type="submit">
            <VscAdd size="1.4em" color="hsl(233, 14%, 35%)" />
          </button>
        </form>
      </div>
      <ul className="todoList">
        {currentData.map((item) => {
          const { id, title, completed } = item;
          return (
            <li key={id} className="listBox">
              <button onClick={() => toggleCompleted(id)}>
                <CircleIcon show={completed} />
              </button>
              <div className="listContent">
                <p className={`item ${completed ? "completed" : ""}`}>
                  {title}
                </p>
                <button onClick={() => removeFromTodo(id)}>
                  <AiOutlineClose size="1.4em" color="hsl(233, 14%, 35%)" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        <div className="show">
          <p>{active} items left</p>
          <button onClick={() => show("all")}>All</button>
          <button onClick={() => show("active")}>Active</button>
          <button onClick={() => show("completed")}>Completed</button>
        </div>
        <div className="clear">
          <button onClick={() => clear("all")}>Clear All</button>
          <button onClick={() => clear("completed")}>Clear Completed</button>
        </div>
      </div>
    </main>
  );
}

export default App;
