import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

function CircleIcon({ show = false }) {
  return (
    <div className={`circleIcon ${show ? "completed" : ""}`}>
      {show && <AiOutlineCheck size="0.8em" color="white" />}
    </div>
  );
}

export default CircleIcon;
