import React from "react";
import { useGlobalContext } from "../context";

function ClearItems() {
  const { data, setData } = useGlobalContext();

  function clear(val) {
    if (val === "completed") {
      const active = data.filter((item) => item.completed === false);
      setData(active);
    } else {
      setData([]);
    }
  }

  return (
    <div className="clear">
      <button onClick={() => clear("all")}>Clear All</button>
      <button onClick={() => clear("completed")}>Clear Completed</button>
    </div>
  );
}

export default ClearItems;
