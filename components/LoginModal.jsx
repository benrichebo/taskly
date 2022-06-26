import React from "react";

function LoginModal() {
  return (
    <div className="modal fade" role="dialog" tabindex="-1" id="onboarding">
      <div
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down"
        role="document">
        <div className="modal-content">
          <div className="modal-header bg-primary border-primary px-md-3 px-lg-5 border-0">
            <h4 className="modal-title">Welcome back</h4>
            <button
              type="button"
              className="btn-close rounded p-3 bg-light"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body px-md-3 px-lg-5">
            <h4 className="text-start mb-4">Log in to your account</h4>
            <form>
              <div className="fs-5 fw-bold my-3">
                <label className="form-label">Email</label>
                <input
                  className="bg-light shadow-none form-control form-control-lg"
                  type="text"
                  name="title"
                  placeholder="Enter email"
                  autocomplete="on"
                  required=""
                />
              </div>
              <div className="fs-5 fw-bold my-3">
                <label className="form-label">Password</label>
                <input
                  className="bg-light shadow-none form-control form-control-lg"
                  type="text"
                  name="title"
                  placeholder="Enter password"
                  autocomplete="on"
                  required=""
                />
                <div className="d-flex justify-content-between my-4">
                  <a
                    className="fs-6 fw-normal text-decoration-none text-dark"
                    href="/">
                    Create account
                  </a>
                  <a
                    className="fs-6 fw-normal text-decoration-none text-dark"
                    href="/">
                    Forgot password?
                  </a>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer px-md-3 px-lg-5 border-0">
            <button
              className="btn btn-light btn-lg px-4 rounded"
              type="button"
              data-bs-dismiss="modal">
              Cancel
            </button>
            <button className="btn btn-primary btn-lg px-4 rounded" type="button">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
