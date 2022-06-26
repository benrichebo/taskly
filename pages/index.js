import React from "react";
import Layout from "../components/Layout";
import LoginModal from "../components/LoginModal";

function Home() {
  return (
    <>
    <Layout>
      <div className="container">
        <div className="row vh-100">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center align-self-end align-self-md-center text-center text-md-start">
            <div className="col-sm-12 col-md-10 col-xxl-9">
              <h1 className="display-5 fw-bold">Get your task in one place</h1>
              <h2 className="text-muted my-4">
                Your meetings, workout and daily activities all in one place
              </h2>
              <button
                className="btn btn-primary btn-lg"
                type="button"
                data-bs-target="#onboarding"
                data-bs-toggle="modal">
                Get started
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-sm-center align-items-center">
            <div>
              <img
                className="img-fluid"
                src="/images/hero.png"
                alt="hero-img"
              />
            </div>
          </div>
        </div>
      </div>
      <LoginModal />
      </Layout>
    </>
  );
}

export default Home;
