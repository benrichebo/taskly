import React from "react";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import SignUp from "./SignUp";

function OnboardingModal() {
  const [page, setPage] = useState("login")
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
          {page == "login" && <Login setPage={setPage} />}
          {page == "signUpp" && <SignUp setPage={setPage} />}
          {page == "forgotPassword" && <ForgotPassword setPage={setPage} />}
        </div>
      </div>
    </div>
  );
}

export default OnboardingModal;
