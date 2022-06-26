import React from "react";

function AddTaskModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <div class="modal fade" role="dialog" tabindex="-1" id="addTask">
      <div
        class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down"
        role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary border-primary px-md-3 px-lg-5 border-0">
            <h4 class="modal-title">Add task</h4>
            <button
              type="button"
              class="btn-close rounded p-3 bg-light"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body px-md-3 px-lg-5">
            <form>
              <div class="fs-5 fw-bold my-3">
                <label class="form-label">Title</label>
                <input
                  class="bg-light border-light shadow-none form-control form-control-lg"
                  type="text"
                  name="title"
                  placeholder="Add task title"
                  autocomplete="on"
                  required=""
                />
              </div>
              <div class="my-4">
                <label class="form-label fs-5 fw-bold">Desciption</label>
                <textarea
                  class="bg-light border-light shadow-none form-control"
                  spellcheck="true"
                  autocomplete="on"
                  required=""
                  maxlength="100"
                  rows="4"></textarea>
              </div>
              <div class="my-4 row">
                <div class="col">
                  <label class="form-label fs-5 fw-bold">Start date</label>
                  <input
                    class="bg-light border-light shadow-none form-control form-control-lg"
                    type="datetime-local"
                    name="start-date"
                  />
                </div>
                <div class="fs-5 fw-bold col">
                  <label class="form-label fs-5 fw-bold">End date</label>
                  <input
                    class="bg-light border-light shadow-none form-control form-control-lg"
                    type="datetime-local"
                    name="start-date"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer px-md-3 px-lg-5 border-0">
            <button
              class="btn btn-light btn-lg px-4 rounded"
              type="button"
              data-bs-dismiss="modal">
              Cancel
            </button>
            <button class="btn btn-primary btn-lg px-4 rounded" type="button">
              Save task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;
