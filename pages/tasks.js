import React from "react";
import AddTaskModal from "../components/AddTaskModal";
import { MdAdd, MdAccessAlarm, MdCheck, MdEast } from "react-icons/md";
import { HiMinus } from "react-icons/hi";

function Tasks() {
  return (
    <>
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
            <div className="my-3 d-flex align-items-center">
              <MdCheck className="fs-3 text-primary me-1" />

              <div className="card border-0 shadow-none rounded bg-primary w-100">
                <div className="card-body">
                  <div className="d-flex justify-content-start align-items-center">
                    <div className="me-3 bg-white rounded p-1 h-100 me-2">
                      <MdAccessAlarm className="fs-1" />
                    </div>
                    <div className="w-100">
                      <div className="d-flex justify-content-between mt-2">
                        <h6 className="fw-bold">Wake up buddy</h6>
                        <h6 className="fw-normal">8:00 AM</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-3 d-flex align-items-center">
              <HiMinus className="fs-3 text-muted me-1" />
              <div className="card border-0 shadow-none rounded bg-light w-100">
                <div className="card-body pb-0">
                  <div className="d-flex justify-content-start align-items-top">
                    <div className="me-3 bg-white rounded p-1 h-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="fs-1">
                        <path
                          d="M20.2739 9.86883L16.8325 4.95392L18.4708 3.80676L21.9122 8.72167L20.2739 9.86883Z"
                          fill="currentColor"></path>
                        <path
                          d="M18.3901 12.4086L16.6694 9.95121L8.47783 15.687L10.1985 18.1444L8.56023 19.2916L3.97162 12.7383L5.60992 11.5912L7.33068 14.0487L15.5222 8.31291L13.8015 5.8554L15.4398 4.70825L20.0284 11.2615L18.3901 12.4086Z"
                          fill="currentColor"></path>
                        <path
                          d="M20.7651 7.08331L22.4034 5.93616L21.2562 4.29785L19.6179 5.445L20.7651 7.08331Z"
                          fill="currentColor"></path>
                        <path
                          d="M7.16753 19.046L3.72607 14.131L2.08777 15.2782L5.52923 20.1931L7.16753 19.046Z"
                          fill="currentColor"></path>
                        <path
                          d="M4.38208 18.5549L2.74377 19.702L1.59662 18.0637L3.23492 16.9166L4.38208 18.5549Z"
                          fill="currentColor"></path>
                      </svg>
                    </div>
                    <div className="w-100">
                      <div className="d-flex justify-content-between">
                        <h6 className="fw-bold">Daily workout</h6>
                        <h6 className="fw-normal mb-2 ms-md-4">9:00 AM</h6>
                      </div>
                      <div className="col-md-9 col-lg-10 col-xxl-8">
                        <ul>
                          <li>Squat 10X3</li>
                          <li>Push up10X3</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-3 d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                className="fs-3 text-muted me-1">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 10C5 9.44772 5.44772 9 6 9L14 9C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11L6 11C5.44772 11 5 10.5523 5 10Z"
                  fill="currentColor"></path>
              </svg>
              <div className="card border-0 shadow-none rounded bg-light w-100">
                <div className="card-body pb-0">
                  <div className="d-flex justify-content-start">
                    <div className="me-3 bg-white rounded p-1 h-100">
                      <img
                        className="img-fluid rounded"
                        src="assets/img/Big%20Shoes%20-%20Torso.png"
                        width="40"
                        alt="avatar"
                      />
                    </div>
                    <div className="w-100">
                      <div className="d-flex justify-content-between">
                        <h6 className="fw-bold">Shift project kickoff</h6>
                        <h6 className="fw-normal mb-2 ms-md-4">14:00 PM</h6>
                      </div>
                      <div className="col-md-9 col-lg-10 col-xxl-8">
                        <p>
                          Zoom call, kick of with Elena and Jordan from shift
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-3 d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="none"
                className="fs-3 text-muted me-1">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 10C5 9.44772 5.44772 9 6 9L14 9C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11L6 11C5.44772 11 5 10.5523 5 10Z"
                  fill="currentColor"></path>
              </svg>
              <div className="card border-0 shadow-none rounded bg-light w-100">
                <div className="card-body pb-0">
                  <div className="d-flex justify-content-start">
                    <div className="me-3 bg-white rounded p-1 h-100">
                      <img
                        className="img-fluid rounded"
                        src="/images/avatar.jpg"
                        width="40"
                        alt="avatar"
                      />
                    </div>
                    <div className="w-100">
                      <div className="d-flex justify-content-between">
                        <h6 className="fw-bold">QR project meeting</h6>
                        <h6 className="fw-normal mb-2 ms-md-4">11:45 AM</h6>
                      </div>
                      <div className="col-md-9 col-lg-10 col-xxl-8">
                        <p>
                          Zoom call, kick of with Elena and Jordan from shift
                        </p>
                        <ul className="list-unstyled list-inline">
                          <li className="list-inline-item avatar-list-item">
                            <img
                              className="rounded-circle img-fluid avatar-img border"
                              src="/images/avatar.jpg"
                              width="35"
                            />
                          </li>
                          <li className="list-inline-item avatar-list-item">
                            <img
                              className="rounded-circle img-fluid avatar-img border"
                              src="/images/avatar.jpg"
                              width="35"
                            />
                          </li>
                          <li className="list-inline-item avatar-list-item">
                            <img
                              className="rounded-circle img-fluid avatar-img border"
                              src="/images/avatar.jpg"
                              width="35"
                            />
                          </li>
                          <li className="text-muted list-inline-item avatar-list-item ms-2">
                            +3 attendees
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  <h1 className="display-4 fw-bold card-title mb-2">8:45 AM</h1>
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
                      <img
                        className="img-fluid"
                        src="/images/front.png"
                      />
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
    </>
  );
}

export default Tasks;
