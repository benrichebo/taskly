import React from "react";
import { MdAdd } from "react-icons/md";
import { useTasks } from "../hooks/useTasks";
import PinnedTasks from "./tasks/PinnedTasks";

function WeeklyAside({ setAllTasks, setTaskData}) {
  //fetch tasks
  const { pinnedTasks } = useTasks("pinned-tasks");
  return (
    <>
      <aside className="p-xxl-3">
        <div className="my-4 d-none d-sm-block">
          <header>
            <div className="d-flex justify-content-start align-items-center">
              <MdAdd className="fs-5 bg-primary me-2 p-1 rounded-circle" />
              <h5 className="mb-0">taskly</h5>
            </div>
          </header>
        </div>
        <div className="mt-4">
          <div className="d-flex justify-content-between align-items-center pt-md-5">
            <h4 className="mb-0">Weekly pinned</h4>
            <a
              className="link-warning text-decoration-none"
              href="#"
              onClick={() => setAllTasks(pinnedTasks)}>
              View all
            </a>
          </div>
        </div>
        {pinnedTasks && <PinnedTasks pinnedTasks={pinnedTasks} />}

        <div className="my-4"></div>
      </aside>
    </>
  );
}

export default WeeklyAside;
