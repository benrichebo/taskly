import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { MdEast } from "react-icons/md";
import { useUser } from "../hooks/useUser";
import TimeCard from "./TimeCard";
import User from "./User";

function UserAside({ setTaskData }) {
  const { userData } = useUser("user");

  const router = useRouter();

  useEffect(() => {
    if (!userData?.id) {
      //router.push("/");
    }
  }, []);

  return (
    <aside>
      <User user={userData} />
      <TimeCard />
      <div className="my-3">
        <div className="card border-0 shadow-none rounded bg-light p-lg-1 p-xl-3">
          <div className="card-body px-0 px-md-3">
            <h3 className="fw-bold card-title mb-2">
              Unleash the freelance super power
            </h3>
            <div className="text-muted d-flex justify-content-start mt-3">
              <p className="fs-5">
                Unlimited task, premium features and much more
              </p>
            </div>
            <div className="d-flex justify-content-start align-items-center">
              <div className="me-3">
                <img className="img-fluid" src="/images/front.png" />
              </div>
              <MdEast className="fs-1 bg-primary me-2 bg-primary p-1 rounded" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default UserAside;
