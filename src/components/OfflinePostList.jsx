import React, { useContext, useState } from "react";
import Post from "./Post";
import { Context } from "../store/social-media-store";
import OfflinePost from "./OfflinePost.jsx";

const PostList = () => {
  let tools = useContext(Context);
  

  const RemoveFromDefultPostList = (id) => {
    let newList = tools.defaultPostList.filter((value) => value.id !== id);
    tools.setDefaultPostList(newList);
  };

  return (
    <div className="postlist-container">
      {tools.defaultPostList.map((value) => {
        return (
          <OfflinePost
            key={value.id}
            RemoveFromDefultPostList={RemoveFromDefultPostList}
            post={value}
          />
        );
      })}
    </div>
  );
};

export default PostList;
