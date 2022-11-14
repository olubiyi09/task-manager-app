import React from "react";
import "./Confirm.css";

const Confirm = () => {
  return (
    <div className="confirm">
      <div className="confirm-modal">
        <div className="header">
          <div className="title">Delete Task</div>
          <button className="close"> &times; </button>
        </div>

        <div className="content">
          <p>You are about to delete this task</p>
        </div>

        <div className="buttons">
          <button className="btn btn-ok">Ok</button>
          <button className="btn btn-cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
