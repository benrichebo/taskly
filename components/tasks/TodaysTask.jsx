import React from 'react'
import { MdAccessAlarm, MdCheck } from 'react-icons/md';
import Actions from './Actions';
import Attendees from './Attendees';

function TodaysTask({ task, setTaskData }) {
  return (
    <>
      <div className="my-3 d-flex align-items-center">
        <MdCheck className="fs-3 text-primary me-1" />
        <div className="card bg-primary border-0 shadow-none rounded bg-light w-100">
          <div className="card-body pb-0">
            <div className="d-flex justify-content-start">
              <a
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#addTask"
                className="me-3 bg-white rounded p-1 h-100">
                <MdAccessAlarm className="fs-1" />
              </a>
              <div className="w-100">
                <div className="d-flex justify-content-between">
                  <h6 className="fw-bold">
                    <a
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#addTask">
                      {task?.title}
                    </a>
                  </h6>
                  <div className="d-flex justify-content-start align-items-center">
                    <h6 className="fw-normal mb-2 ms-md-4">14:00 PM</h6>
                    <Actions className="ms-3" id={task?.id} />
                  </div>
                </div>
                <div className="col-md-9 col-lg-10 col-xxl-8">
                  {task.attendees?.length > 0 ? (
                    <Attendees attendees={task?.attendees} />
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
    </>
  );
}

export default TodaysTask