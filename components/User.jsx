import React from "react";

function User({ user }) {
  return (
    <div className="d-flex justify-content-between align-items-top mt-4 mb-5">
      <div>
        <h4 className="mb-0">{user?.name}</h4>
        <h5 className="text-primary">My settings</h5>
      </div>
      <div>
        <img
          className="img-fluid rounded-circle"
          src="/images/avatar.jpg"
          width="60"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default User;
