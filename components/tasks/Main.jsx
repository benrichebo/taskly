import React, { useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import Spinner from "../ui/Spinner";
import RegularTask from "./RegularTask";
import TodaysTask from "./TodaysTask";

function Main({ setTaskData }) {
  //fetch tasks
  const { data, loading, error, task } = useTasks("tasks");

  //use this to change tasks
  const [allTasks, setAllTasks] = useState(data);

  const todaysTasks = allTasks; //filter and check todays date

  const notTodaysTasks = allTasks; //filter and check todays date
  return (
    <>
      {loading && !error && (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner />
        </div>
      )}
      {error && !loading && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h6 className="text-muted">There was an error loading tasks</h6>
            <button
              className="btn btn-primary my-3"
              onClick={() => task.getTasks()}>
              Fetch tasks
            </button>
          </div>
        </div>
      )}
      {allTasks?.length == 0 && <div>There are no tasks</div>}
      {todaysTasks?.map((task) => (
        <TodaysTask key={task?.id} task={task} setTaskData={setTaskData} />
      ))}

      {notTodaysTasks?.map((task) => (
        <RegularTask key={task?.id} task={task} setTaskData={setTaskData} />
      ))}
    </>
  );
}

export default Main;
