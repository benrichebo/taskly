import React, { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import Spinner from "./Spinner";

function AddAttendeeModal({ attendee }) {
  const [name, setName] = useState(attendee?.description || "");
  const [email, setEmail] = useState(attendee?.startDate || "");
  const id = Math.random().toString(36).substring(2, 12);

  const { loading, message, task, error } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //if editing task
    if (attendee) {
      const { name, email } = attendee;
      await task.updateTask(
        { name, email },
        `/api/tasks/collaborators/collaborators/${id}`
      );
    } else {
      await task.addTask(
        { name, email },
        "/api/tasks/collaborators/add-collaborator"
      );
    }

    if (message) {
      setName("");
      setEmail("");
    }
  };

  return (
    <div className="modal fade" role="dialog" tabIndex="-1" id="addTask">
      <div
        className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down"
        role="document">
        <div className="modal-content">
          <div className="modal-header bg-primary border-primary px-md-3 px-lg-5 border-0">
            <h4 className="modal-title">Add attendee</h4>
            <button
              type="button"
              className="btn-close rounded p-3 bg-light"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body px-md-3 px-lg-5">
              <div className="my-3">
                <label className="form-label fs-5 fw-bold" htmlFor="name">
                  Name
                </label>
                <input
                  className="bg-light border-light shadow-none form-control form-control-lg"
                  type="text"
                  id="name"
                  placeholder="Add user name"
                  autoComplete="on"
                  required=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label className="form-label fs-5 fw-bold" htmlFor="email">
                  Email
                </label>
                <input
                  className="bg-light border-light shadow-none form-control form-control-lg"
                  type="email"
                  id="email"
                  placeholder="Add user email"
                  autoComplete="on"
                  required=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            {message && (
              <p className="text-success small px-md-3 px-lg-5">{message}</p>
            )}
            {error && (
              <p className="text-danger small px-md-3 px-lg-5">{error}</p>
            )}
            <div className="modal-footer px-md-3 px-lg-5 border-0">
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-light btn-lg px-4 rounded"
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
                    <span className="">Add user</span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAttendeeModal;
