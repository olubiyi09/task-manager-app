import React from "react";
import { FaCheckDouble, FaEdit, FaTrashAlt } from "react-icons/fa";

const Task = ({
  id,
  name,
  date,
  complete,
  editTask,
  deleteTask,
  completeTask,
}) => {
  return (
    <div key={id} className={complete ? "task complete" : "task"}>
      <span>
        <p>
          <b>Task:</b> {""} {name}
        </p>
        <p>
          <b>Date:</b> {""}
          {date}
        </p>
      </span>
      <span>
        <button onClick={() => editTask(id)}>
          <FaEdit color="green" />
        </button>
        <button>
          <FaTrashAlt color="red" onClick={() => deleteTask(id)} />
        </button>
        <button>
          <FaCheckDouble color="purple" onClick={() => completeTask(id)} />
        </button>
      </span>
    </div>
  );
};

export default Task;
