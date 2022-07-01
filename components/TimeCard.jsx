import moment from "moment";
import React from "react";
import { MdOutlineWbCloudy } from "react-icons/md";

function TimeCard() {
  let time = moment().format("h:mm:ss a");
  
  return (
    <div className="my-5">
      <div className="card border-0 shadow-none rounded bg-light p-lg-1 p-xl-3">
        <div className="card-body px-0 px-md-3">
          <h1 className="card-title mb-2 display-4">{time}</h1>
          <div className="d-flex justify-content-start">
            <MdOutlineWbCloudy
              className="fs-4 text-primary"
              data-bss-hover-animate="wobble"
            />
            <p className="fs-5 ms-2">Now is almost sunny</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeCard;
