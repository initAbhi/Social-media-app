import React, { useContext, useEffect } from "react";
import Post from "./Post";
import { Context } from "../store/social-media-store";

const PostList = () => {
  let tools = useContext(Context);

  // const controller = new AbortController();
  // console.log(tools.contextPostList)
  // const signal = controller.signal;

  return (
    <div className="postlist-container">
      {tools.contextPostList.map((value) => {
        return <Post key={value.id} post={value} />;
      })}
    </div>
  );
};

export default PostList;
