import React, { useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import Spinner from "../ui/Spinner";

function AddTaskModal({ taskData }) {
  const [title, setTitle] = useState(taskData?.title || "");
  const [description, setDescription] = useState(taskData?.description || "");
  const [startDate, setStartDate] = useState(taskData?.startDate || "");
  const [endDate, setEndDate] = useState(taskData?.endDate || "");
  const id = Math.random().toString(36).substring(2, 12);

  const { loading, message, task, error } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //if editing task
    if (taskData) {
      const { id, title, description, startDate, endDate } = taskData;
      await task.updateTask(
        { id, title, description, startDate, endDate },
        `/api/tasks/${id}`
      );
    } else {
      await task.addTask(
        { id, title, description, startDate, endDate },
        "/api/tasks/add-task"
      );
    }

    if (message) {
      setTitle("");
      setDescription("");
      setStartDate("");
      setEndDate("");
    }
  };

  return (
    <div className="modal fade" role="dialog" tabIndex="-1" id="addTask">
      <div
        className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down"
        role="document">
        <div className="modal-content">
          <div className="modal-header bg-primary border-primary px-md-3 px-lg-5 border-0">
            <h4 className="modal-title">Add task</h4>
            <button
              type="button"
              className="btn-close rounded p-3 bg-light"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body px-md-3 px-lg-5">
              <div className="my-3">
                <label className="form-label fs-5 fw-bold" htmlFor="title">
                  Title
                </label>
                <input
                  className="bg-light border-light shadow-none form-control form-control-lg"
                  type="text"
                  id="title"
                  placeholder="Add task title"
                  autoComplete="on"
                  required=""
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="my-4">
                <label
                  className="form-label fs-5 fw-bold"
                  htmlFor="description">
                  Description
                </label>
                <textarea
                  className="bg-light border-light shadow-none form-control"
                  spellCheck="true"
                  autoComplete="on"
                  required=""
                  maxLength="100"
                  rows="4"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>
              <div className="my-4 row">
                <div className="col">
                  <label
                    className="form-label fs-5 fw-bold"
                    htmlFor="start-date">
                    Start date
                  </label>
                  <input
                    className="bg-light border-light shadow-none form-control form-control-lg"
                    type="datetime-local"
                    id="start-date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="col">
                  <label className="form-label fs-5 fw-bold" htmlFor="end-date">
                    End date
                  </label>
                  <input
                    className="bg-light border-light shadow-none form-control form-control-lg"
                    type="datetime-local"
                    id="end-date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {message && (
              <p className="text-success small px-md-3 px-lg-5">{message}</p>
            )}
            {error && (
              <p className="text-danger small px-md-3 px-lg-5">{error}</p>
            )}
            <div className="modal-footer px-md-3 px-lg-5 border-0">
              <div
                className={`w-100  ${
                  taskData && "d-flex justify-content-between"
                }`}>
                {taskData && (
                  <button
                    className="btn btn-danger btn-lg px-4 rounded"
                    type="button">
                    {loading ? (
                      <Spinner className="ms-2" />
                    ) : (
                      <span className="">Delete task</span>
                    )}
                  </button>
                )}
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-light btn-lg px-4 rounded me-2"
                    type="button"
                    data-bs-dismiss="modal">
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary btn-lg px-4 rounded"
                    type="button">
                    {loading ? (
                      <Spinner className="ms-2" />
                    ) : (
                      <span className="">Save task</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;
