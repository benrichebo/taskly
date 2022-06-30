import React, { useEffect, useState } from "react";
import AddTaskModal from "../../components/AddTaskModal";
import { MdAdd, MdEast } from "react-icons/md";
import Layout from "../../components/Layout";
import { useUser } from "../../hooks/useUser";
import { useRouter } from "next/router";
import { useTasks } from "../../hooks/useTasks";
import Spinner from "../../components/Spinner";
import PinnedTask from "../../components/PinnedTask";
import TodaysTask from "../../components/TodaysTask";
import RegularTask from "../../components/RegularTask";
import TimeCard from "../../components/TimeCard";
import User from "../../components/User";
import AddAttendeeModal from "../../components/AddAttendeeModal";

function Tasks() {
  const { userData } = useUser("user");

  const [taskData, setTaskData] = useState();

  const router = useRouter();

  //fetch tasks
  const { data, loading, error, task, pinnedTask } = useTasks("tasks");

  useEffect(() => {
    if (!userData?.id) {
      //router.push("/");
    }
  }, []);

  const todaysTasks = data; //filter and check todays date

  return (
    <>
      <Layout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xxl-4 bg-light px-md-3 px-lg-4 px-xxl-5 vh-100 order-last order-sm-first sticky-sidebar overflow-auto">
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
                    <a className="link-warning text-decoration-none" href="#">
                      View all
                    </a>
                  </div>
                </div>
                {pinnedTask && <PinnedTask pinnedTask={pinnedTask} />}

                <div className="my-4">
                  <div className="my-3">
                    <div className="card border-0 shadow-none rounded">
                      <div className="card-body">
                        <div className="d-flex justify-content-start align-items-center">
                          <div className="bg-primary rounded p-2 h-100 d-flex justify-content-center me-3">
                            <img
                              className="img-fluid rounded"
                              src="/images/avatar.jpg"
                              width="35"
                              alt="avatar"
                            />
                          </div>
                          <div className="w-100">
                            <div className="d-flex justify-content-between mt-2">
                              <h6 className="fw-bold">Call doctor for test</h6>
                              <h6 className="fw-normal">22 Mar, 2022</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="card border-0 shadow-none rounded">
                      <div className="card-body">
                        <div className="d-flex justify-content-start align-items-center">
                          <a
                            className="fs-6 fw-bold link-dark text-decoration-none d-flex align-items-center w-100"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#addTask">
                            <MdAdd className="fs-2 bg-primary me-2 p-1 rounded me-3 p-1 text-dark" />
                            <span>Add new task</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-4"></div>
              </aside>
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
              {loading && (
                <div className="d-flex justify-content-center align-items-center">
                  <Spinner />
                </div>
              )}
              {error && (
                <div className="d-flex justify-content-center align-items-center">
                  <div className="text-center">
                    <h6 className="text-muted">
                      There was an error loading tasks
                    </h6>
                    <button
                      className="btn btn-primary my-3"
                      onClick={() => task.getTasks()}>
                      Fetch tasks
                    </button>
                  </div>
                </div>
              )}
              {/*    {todaysTasks && todaysTasks?.length > 0
                ? todaysTasks?.map((task) => (
                    <TodaysTask key={task?.id} task={task} />
                  ))
                : "There are no tasks available for today"} */}

              {data?.map((task) => (
                <RegularTask key={task?.id} task={task} />
              ))}

              <header></header>
            </div>
            <div className="col-12 d-none d-lg-block col-lg-3 px-md-3 px-lg-3 px-xxl-5 sticky-sidebar overflow-auto">
              <User user={userData} />
              <TimeCard />
              <div className="my-3">
                <div className="card border-0 shadow-none rounded bg-light p-lg-1 p-xl-3">
                  <div className="card-body px-0 px-md-3">
                    <h3 className="fw-bold card-title mb-2">
                      Unleash the freelance super power
                    </h3>
                    <div className="text-muted d-flex justify-content-start mt-3">
                      <p className="fs-5">
                        Unlimited task, premium features and much more
                      </p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="me-3">
                        <img className="img-fluid" src="/images/front.png" />
                      </div>
                      <MdEast className="fs-1 bg-primary me-2 bg-primary p-1 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AddTaskModal taskData={taskData} />
        <AddAttendeeModal />
      </Layout>
    </>
  );
}

export default Tasks;
