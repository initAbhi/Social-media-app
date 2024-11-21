import React, { useContext, useRef } from "react";
import { Toast, ToastContainer, Button } from "react-bootstrap";
import { Context } from "../store/social-media-store";
import ToastExample from "./Toast";

const CreatePost = () => {
  let { updatePostList, setMode, toggleShow,show } = useContext(Context);

  let title = useRef();
  let content = useRef();
  let tags = useRef();

  const handleSubmit = (event) => {
    if(title.current.value != ""){
    event.preventDefault();
    let Title = title.current.value;
    let Content = content.current.value;
    let Tags = tags.current.value;

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: Title,
        body: Content,
        tags: Tags,
        userId: 5,
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        updatePostList(res);
      });

    // updatePostList(Title, Content, Tags);
    title.current.value = "";
    content.current.value = "";
    tags.current.value = "";
    setMode("Home");
    toggleShow();
    }
  };

  return (
    <div>
      <form
        className="row g-3 needs-validation custom-form no-outline"
        onSubmit={(event) => handleSubmit(event)}
        noValidate=""
      >
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            Post title
          </label>
          <input
            type="text"
            className="form-control custom-input no-outline"
            id="validationCustom01"
            ref={title}
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Post Content
          </label>
          <input
            ref={content}
            type="text"
            className="form-control custom-input"
            id="validationCustom02"
            required=""
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">
            tags
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              #
            </span>
            <input
              ref={tags}
              type="text"
              className="form-control custom-input"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required=""
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        <div className="col-12">
          <button className="btn b-purple" type="submit">
            create post
          </button>
        </div>
        {/* <ToastExample></ToastExample> */}
        
      </form>
      <div
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      ></div>
    </div>
  );
};

export default CreatePost;
