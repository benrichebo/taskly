import React, { useState } from "react";
import ForgotPassword from ".//forms/ForgotPassword";
import Login from "./forms/Login";
import SignUp from ".//forms/SignUp";
import { useUser } from "../hooks/useUser";

function OnboardingModal() {
  const [page, setPage] = useState("login");
  const { clear } = useUser();
  return (
    <div className="modal fade" role="dialog" tabIndex="-1" id="onboarding">
      <div
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down"
        role="document">
        <div className="modal-content">
          <div className="modal-header bg-primary border-primary px-md-3 px-lg-5 border-0">
            <h4 className="modal-title">
              {page == "forgotPassword" && "Reset your password"}
              {page == "signUp" && "Create an account"}
              {page == "login" && "Log into your account"}
            </h4>
            <button
              type="button"
              className="btn-close rounded p-3 bg-light"
              data-bs-dismiss="modal"
              aria-label="Close"
              onSubmit={clear}></button>
          </div>
          {page == "login" && <Login setPage={setPage} />}
          {page == "signUp" && <SignUp setPage={setPage} />}
          {page == "forgotPassword" && <ForgotPassword setPage={setPage} />}
        </div>
      </div>
    </div>
  );
}

export default OnboardingModal;
