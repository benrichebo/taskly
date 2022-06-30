import React from "react";

function PinnedTasks({ pinnedTasks }) {
  const firstTask = pinnedTasks[0];
  const others = pinnedTasks.filter((task) => task.id != firstTask.id);
  return (
    <>
      {pinnedTasks?.length == 0 && "There are no pinned tasks"}
      {firstTask && (
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
                  <h5 className="fw-bold">{firstTask?.title}</h5>
                  <h6 className="text-dark mb-2">{firstTask?.startDate}</h6>
                  <span className="badge rounded-pill bg-primary text-dark myt-2 mb-3 px-2">
                    Personal
                  </span>
                  <div className="fw-normal text-muted">
                    {firstTask?.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {others && (
        <div className="my-4">
          {others.map((task) => (
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
          ))}

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
      )}
    </>
  );
}

export default PinnedTasks;
