import React, { useState } from "react";
import { useUser } from "../hooks/useUser";
import Spinner from "./Spinner";
import Email from "./ui/Email";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const { loading, message, user, error } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await user.resetUserPassword({ email }, "/api/v1.1.1/user/account/login");
    message && router.push("/services");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="modal-body px-md-3 px-lg-5">
          <h4 className="text-start mb-4">Log in to your account</h4>

          <div className="my-3">
            <label className="form-label fs-5">Email</label>
            <Email setEmail={setEmail} />
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
          <button className="btn btn-primary btn-lg px-4 rounded" type="button">
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
