import React from 'react'

function PinnedTask({pinnedTask}) {
  return (
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
              <h5 className="fw-bold">{pinnedTask?.title}</h5>
              <h6 className="text-dark mb-2">{pinnedTask?.startDate}</h6>
              <span className="badge rounded-pill bg-primary text-dark myt-2 mb-3 px-2">
                Personal
              </span>
              <div className="fw-normal text-muted">
                {pinnedTask?.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PinnedTask