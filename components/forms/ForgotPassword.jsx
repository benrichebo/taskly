import React, { useState } from "react";
import { useUser } from "../../hooks/useUser";
import Spinner from "../ui/Spinner";
import Email from "../ui/Email";

function ForgotPassword({ setPage }) {
  const [email, setEmail] = useState("");

  const { setLoading, setError, loading, message, user, error } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await user.resetUserPassword({ email }, "/api/v1.1.1/user/account/login");
    message && router.push("/services");
  };

  const clear = () => {
    setLoading(false);
    setError("");
    setPage("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="modal-body px-md-3 px-lg-5">
          <h5 className="text-start mb-4">Forgot your password</h5>

          <div className="my-3">
            <label className="form-label fs-6">Email</label>
            <Email setEmail={setEmail} />
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
        {error && <p className="text-danger small px-md-3 px-lg-5">{error}</p>}
        <div className="modal-footer px-md-3 px-lg-5 border-0">
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
              <span className="">Submit</span>
            )}
          </button>
        </div>
      </form>
    </>
  );
}

export default ForgotPassword;
