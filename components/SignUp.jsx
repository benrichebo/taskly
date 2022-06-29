import React, { useState } from "react";
import { useUser } from "../hooks/useUser";
import Spinner from "./Spinner";
import Email from "./ui/Email";
import Password from "./ui/Password";

function SignUp({ setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, message, user, error } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await user.signUpWithCredentials(
      { name, email, password },
      "/api/account/signup"
    );
    message && router.push("/tasks");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="modal-body px-md-3 px-lg-5">
          <h5 className="text-start mb-4">Log in to your account</h5>

          <div className="my-3">
            <label className="form-label fs-6">Username</label>
            <input
              className="bg-light shadow-none form-control form-control-lg"
              type="text"
              name="username"
              placeholder="Enter a username"
              autocomplete="on"
              required=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-3">
            <label className="form-label fs-6">Email</label>
            <Email setEmail={setEmail} />
          </div>
          <div className="my-3">
            <label className="form-label fs-6">Password</label>
            <Password setPassword={setPassword} />
          </div>
          <div className="d-flex justify-content-center my-4">
            <a
              type="button"
              className="fs-6 fw-normal text-decoration-none text-dark"
              onClick={() => setPage("login")}>
              Already have an account? Login
            </a>
          </div>
        </div>
        <div className="modal-footer px-md-3 px-lg-5 border-0">
          {error && <p className="text-danger small">{error}</p>}
          <button
            className="btn btn-light btn-lg px-4 rounded"
            type="button"
            data-bs-dismiss="modal">
            Cancel
          </button>
          <button
            className="btn btn-primary btn-lg px-4 rounded"
            type="button"
            disabled={loading}>
            {loading ? (
              <Spinner className="ms-2" />
            ) : (
              <span className="">Sign up</span>
            )}
          </button>
        </div>
      </form>
    </>
  );
}

export default SignUp;
