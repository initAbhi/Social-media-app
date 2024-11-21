import React, { createContext, useContext, useState } from "react";
import "../App.css";
import { Toast, ToastContainer, Button } from "react-bootstrap";
import { Context } from "../store/social-media-store";

const Sidebar = () => {
  let tools = useContext(Context);

  return (
    <div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg- custom-sidebar "
        style={{ width: "219px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4 f-purple">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li
            className="nav-item"
            onClick={() => {
              tools.setMode("Home");
              // tools.setContextPostList([]);
              // tools.setInitialPostList();
            }}
          >
            <a
              href="#"
              className={` custom-nav-link t-white center ${
                tools.mode === "Home" && "b-purple"
              }`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </a>
          </li>
          <li
            onClick={() => {
              tools.setMode("Create post");
            }}
          >
            <a
              href="#"
              className={`custom-nav-link center t-white ${
                tools.mode === "Create post" && "b-purple"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create post
            </a>
          </li>
          <li
            onClick={() => {
              tools.setMode("Offline");
              // tools.setOffLinePostList();
            }}
          >
            <a
              href="#"
              className={`custom-nav-link center t-white ${
                tools.mode === "Offline" && "b-purple"
              }`}
            >
              <ToastContainer position="bottom-start" className="p-3">
                <Toast
                  show={tools.show}
                  onClose={tools.toggleShow}
                  delay={3000}
                  autohide
                >
                  <Toast.Header>
                    <strong className="me-auto" style={{color: "#b87df0"}}>Home</strong>
                    <small style={{color: "#b87df0"}} >Just now</small>
                  </Toast.Header>
                  <Toast.Body>New Post Created!</Toast.Body>
                </Toast>
              </ToastContainer>
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Offline
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
