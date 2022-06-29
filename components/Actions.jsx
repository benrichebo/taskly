import React from "react";
import { useTasks } from "../hooks/useTasks";

const Actions = ({ id }) => {
  //fetch tasks
  const { task } = useTasks("tasks");

  const pinTask = (id) => {
    task.pinTask(id);
  };

  const deleteTask = (id) => {
    task.deleteTask(id);
  };

  return (
    <div className="dropdown">
      <a
        className="btn btn-secondary"
        type="button"
        id="triggerId"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <MdMoreVert />
      </a>
      <div className="dropdown-menu" aria-labelledby="triggerId">
        <a
          className="dropdown-item disabled"
          href="#"
          onClick={() => deleteTask(id)}>
          Delete task
        </a>
        <a className="dropdown-item" href="#">
          Add attendee
        </a>
        <a className="dropdown-item" href="#" onClick={() => pinTask(id)}>
          Pin task
        </a>
      </div>
    </div>
  );
};

export default Actions;
