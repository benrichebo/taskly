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
            <h4 className="card-title mb-2">
              Unleash the freelance super power
            </h4>
            <div className="text-muted d-flex justify-content-start mt-3">
              <p className="fs-6">
                Unlimited task, premium features and much more
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="me-3">
                <img
                  className="img-fluid"
                  src="/images/front.png"
                  width={170}
                />
              </div>
              <span className="bg-primary me-2 bg-primary p-3 rounded">
                <MdEast className="fs-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default UserAside;
