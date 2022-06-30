import React from 'react'

function Spinner() {
  return (
    <div className="spinner-border spinner-border-sm text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Spinner
