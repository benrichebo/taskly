import React, { useState } from "react";
import AddTaskModal from "../components/AddTaskModal";
import { MdAdd, MdAccessAlarm, MdCheck, MdEast } from "react-icons/md";
import { HiMinus } from "react-icons/hi";
import moment from "moment";
import Layout from "../components/Layout";
import { useUser } from "../hooks/useUser";
import { useRouter } from "next/router";
import { useTasks } from "../hooks/useTasks";
import Spinner from "../components/Spinner";

const Attendees = ({ attendees }) => {
  return (
    <ul className="list-unstyled list-inline">
      {attendees?.map((attendee) => (
        <li className="list-inline-item avatar-list-item">
          <span className="rounded-circle img-fluid avatar-img border">
            {attendee.name.charAt(0)}
          </span>
        </li>
      ))}

      <li className="text-muted list-inline-item avatar-list-item ms-2">
        +{attendees?.length} attendees
      </li>
    </ul>
  );
};

const Actions = () => {
  return (
    <div class="dropdown">
      <a
        class="btn btn-secondary"
        type="button"
        id="triggerId"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Dropdown
      </a>
      <div class="dropdown-menu" aria-labelledby="triggerId">
        <a class="dropdown-item" href="#">
          Edit task
        </a>
        <a class="dropdown-item disabled" href="#">
          Delete task
        </a>
        <a class="dropdown-item" href="#">
          Add attendee
        </a>
      </div>
    </div>
  );
};

function Tasks() {
  const [time, setTime] = useState(moment().format("h:mm:ss a"));
  const { userData } = useUser("user");

  //fetch tasks
  const { data, loading, error, task } = useTasks("tasks");

  const router = useRouter();

  if (!userData.id) {
    router.push("/");
  }

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
                <div className="my-4">
                  <div className="card border-0 shadow rounded">
                    <div className="card-body pb-1">
                      <div className="d-flex">
                        <div className="bg-primary rounded p-2 h-100 d-flex justify-content-center me-3">
                          <img
                            className="img-fluid rounded"
                            src="/images/avatar.jpg"
                            width="35"
                            alt="avatar"
                          />
                        </div>
                        <div>
                          <h5 className="fw-bold">Call doctor for test</h5>
                          <h6 className="text-dark mb-2">
                            15 Mar, 2020 - 9:00 AM
                          </h6>
                          <span className="badge rounded-pill bg-primary text-dark myt-2 mb-3 px-2">
                            Personal
                          </span>
                          <p className="fw-normal text-muted">
                            Ask for a blood test and GYM certificate
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  <h4>There was an error loading tasks</h4>
                  <button
                    className="btn btn-primary my-3"
                    onClick={task?.getTasks("/api/tasks")}>
                    Fetch tasks
                  </button>
                </div>
              )}
              {data &&
                data?.map((task) => (
                  <div className="my-3 d-flex align-items-center">
                    <MdCheck className="fs-3 text-primary me-1" />
                    <HiMinus className="fs-3 text-muted me-1" />
                    <div className="card border-0 shadow-none rounded bg-light w-100">
                      <div className="card-body pb-0">
                        <div className="d-flex justify-content-start">
                          <div className="me-3 bg-white rounded p-1 h-100">
                            <MdAccessAlarm className="fs-1" />
                          </div>
                          <div className="w-100">
                            <div className="d-flex justify-content-between">
                              <h6 className="fw-bold">{task?.title}</h6>
                              <div className="d-flex justify-content-start align-items-center">
                                <h6 className="fw-normal mb-2 ms-md-4">
                                  14:00 PM
                                </h6>
                                <Actions className="ms-3" />
                              </div>
                            </div>
                            <div className="col-md-9 col-lg-10 col-xxl-8">
                              {task?.description}
                              {task.attendees?.length > 0 ? (
                                <Attendees />
                              ) : (
                                <a type="button" className="text-muted small">
                                  Add attendee
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              <header></header>
            </div>
            <div className="col-12 d-none d-lg-block col-lg-3 px-md-3 px-lg-3 px-xxl-5 sticky-sidebar overflow-auto">
              <div className="d-flex justify-content-between align-items-top mt-4 mb-5">
                <div>
                  <h4 className="mb-0">Mark Collins</h4>
                  <h5 className="text-primary">My settings</h5>
                </div>
                <div>
                  <img
                    className="img-fluid rounded-circle"
                    src="/images/avatar.jpg"
                    width="60"
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="my-5">
                <div className="card border-0 shadow-none rounded bg-light p-lg-1 p-xl-3">
                  <div className="card-body px-0 px-md-3">
                    <h1 className="display-4 fw-bold card-title mb-2">
                      {time}
                    </h1>
                    <div className="d-flex justify-content-start">
                      <i
                        className="fas fa-cloud-sun fs-4 text-primary"
                        data-bss-hover-animate="wobble"></i>
                      <p className="fs-5 ms-2">Now is almost sunny</p>
                    </div>
                  </div>
                </div>
              </div>
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
        <AddTaskModal />
      </Layout>
    </>
  );
}

export default Tasks;
