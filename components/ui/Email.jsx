import React from 'react'

function Email({setEmail}) {
  return (
    <input
      className="bg-light shadow-none form-control form-control-lg"
      type="text"
      name="title"
      placeholder="Enter email"
      autoComplete="on"
      required=""
      onChange={(e) => setEmail(e.target.value)}
    />
  );
}

export default Email