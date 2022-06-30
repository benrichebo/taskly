import React from "react";

function Password({ setPassword }) {
  return (
    <input
      className="bg-light shadow-none form-control form-control-lg"
      type="password"
      name="password"
      placeholder="Enter password"
      autoComplete="on"
      required=""
      onChange={(e) => setPassword(e.target.value)}
    />
  );
}

export default Password;
