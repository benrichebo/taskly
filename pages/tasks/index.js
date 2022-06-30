import React, { useEffect, useState } from "react";
import AddTaskModal from "../../components/AddTaskModal";
import { MdAdd, MdEast } from "react-icons/md";
import Layout from "../../components/Layout";
import { useTasks } from "../../hooks/useTasks";
import Spinner from "../../components/ui/Spinner";
import PinnedTasks from "../../components/tasks/PinnedTasks";
import TodaysTask from "../../components/TodaysTask";
import RegularTask from "../../components/RegularTask";
import AddAttendeeModal from "../../components/AddAttendeeModal";
import UserAside from "../../components/UserAside";
import Main from "../../components/tasks/Main";

function Tasks() {
  const [taskData, setTaskData] = useState();

  return (
    <>
      <Layout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xxl-4 bg-light px-md-3 px-lg-4 px-xxl-5 vh-100 order-last order-sm-first sticky-sidebar overflow-auto">
              <WeeklyAside
                setAllTasks={setAllTasks}
                setTaskData={setTaskData}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-7 col-lg-5 col-xxl-5 px-md-3 px-lg-5 pb-5">
              <header className="mt-4 d-sm-none">
                <div className="d-flex justify-content-start align-items-center">
                  <MdAdd className=" fs-5 bg-warning me-2 bg-opacity-50 p-1 rounded-circle" />
                  <h5 className="mb-0">taskly</h5>
                </div>
              </header>
              <div className="d-flex justify-content-between">
                <div className="my-4">
                  <h2>Todays schedule</h2>
                  <h2 className="text-primary">Thursday 11</h2>
                </div>
                <div className="my-4">
                  <a
                    className="text-decoration-none text-dark"
                    href="#"
                    data-bs-target="#addTask"
                    data-bs-toggle="modal">
                    <MdAdd className=" fs-2 bg-primary me-2 p-1 rounded-circle" />
                  </a>
                </div>
              </div>
              <Main setTaskData={setTaskData} />
              <header></header>
            </div>
            <div className="col-12 d-none d-lg-block col-lg-3 px-md-3 px-lg-3 px-xxl-5 sticky-sidebar overflow-auto">
              <UserAside setTaskData={setTaskData} />
            </div>
          </div>
        </div>
        <AddTaskModal taskData={taskData} setTaskData={setTaskData} />
        <AddAttendeeModal />
      </Layout>
    </>
  );
}

export default Tasks;
