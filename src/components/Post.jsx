import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Context } from "../store/social-media-store";

const Post = ({ post }) => {

  let {removeFromPostList} = useContext(Context);

  return (
    <div>
      <div className="card custom-card f-purple" >
      <span className="position-absolute top-0 start-100 translate-middle badge  custom-badge" onClick={()=>{
        removeFromPostList(post.id)
      }}>
      <AiOutlineClose /> 
  </span>
        <div className="card-body b-black border-rad-5 purple-glow">
          <h5 className="card-title" >{post.title} </h5>
          <p className="card-text"style={{marginTop: "45px"}}>{post.body}</p>
          <a href="#" className="card-link">
            {post.tags}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
