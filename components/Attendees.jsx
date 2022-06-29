import React from 'react'

const Attendees = ({ attendees }) => {
  return (
    <ul className="list-unstyled list-inline">
      {attendees?.map((attendee) => (
        <li className="list-inline-item avatar-list-item">
          <span className="rounded-circle img-fluid avatar-img border">
            {attendee.name.charAt(0)}
          </span>
        </li>
      ))}

      <li className="text-muted list-inline-item avatar-list-item ms-2">
        +{attendees?.length} attendees
      </li>
    </ul>
  );
};
export default Attendees