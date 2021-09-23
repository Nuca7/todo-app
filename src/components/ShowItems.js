import React from "react";
import { useGlobalContext } from "../context";

function ShowItems() {
  const { data, setCurrentData, active } = useGlobalContext();

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
    <div className="show">
      <p>{active} items left</p>
      <button onClick={() => show("all")}>All</button>
      <button onClick={() => show("active")}>Active</button>
      <button onClick={() => show("completed")}>Completed</button>
    </div>
  );
}

export default ShowItems;
