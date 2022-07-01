import { useRouter } from "next/router";
import React, { useState } from "react";
import { useUser } from "../../hooks/useUser";
import Spinner from "../ui/Spinner";
import Email from "../ui/Email";
import Password from "../ui/Password";

function Login({ setPage }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, message, user, error, clear } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await user.loginWithEmailAndPassword(
      { email, password },
      "/api/account/login"
    );
    message && router.push("/tasks");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="modal-body px-md-3 px-lg-5">
          <h5 className="text-start mb-4">Enter your details to login</h5>
          <div className="my-3">
            <label className="form-label fs-6">Email</label>
            <Email setEmail={setEmail} />
          </div>
          <div className="my-3">
            <label className="form-label fs-6">Password</label>
            <Password setPassword={setPassword} />
          </div>
          <div className="d-flex justify-content-between my-4">
            <a
              type="button"
              className="fs-6 fw-normal text-decoration-none text-dark"
              onClick={() => setPage("signUp")}>
              Create account
            </a>
            <a
              type="button"
              className="fs-6 fw-normal text-decoration-none text-dark"
              onClick={() => setPage("forgotPassword")}>
              Forgot password?
            </a>
          </div>
        </div>
        {error && <p className="text-danger small px-md-3 px-lg-5">{error}</p>}
        <div className="modal-footer px-md-3 px-lg-5 border-0">
          <div className="w-100 d-flex justify-content-between">
            <button
              className="btn btn-light btn-lg px-4 rounded"
              type="button"
              data-bs-dismiss="modal"
              onSubmit={clear}>
              Cancel
            </button>
            <button
              className="btn btn-primary btn-lg px-4 rounded"
              type="submit"
              disabled={loading}>
              {loading ? (
                <Spinner className="ms-2" />
              ) : (
                <span className="">Log in</span>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
