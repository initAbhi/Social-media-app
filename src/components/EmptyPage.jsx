import React, { useContext } from "react";
import { Context } from "../store/social-media-store";

const EmptyPage = () => {
  let tools = useContext(Context);

  return (
      <div className="bg-dark text-secondary px-4 py-5 text-center custom-empty-page">
        <div className="py-5">
          <h1
            className="display-5 fw-bold text-white"
            style={{ marginTop: "50px " }}
          >
            There are no Posts to show
          </h1>
          <div className="col-lg-6 mx-auto">
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center ">
              <button
                type="button"
                className="btn btn-outline-info btn-lg px-4 me-sm-5 fw-bold "
                onClick={() => {
                  tools.setMode("Create post");
                }}
                style={{ marginTop: "100px " }}
              >
                Create one
              </button>
              <button
                type="button"
                className="btn btn-outline-light btn-lg px-4 fw-bold"
                onClick={() => {
                  console.log(tools.isLoadingScreen)
                  tools.setInitialPostList()
                  console.log(tools.isLoadingScreen)
                  tools.setMode("Home");
                }}
                style={{ marginTop: "100px " }}
                
              >
                Fecth from server
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default EmptyPage;
