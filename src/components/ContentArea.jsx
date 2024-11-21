import React, { useContext } from 'react'
import Sidebar from "./Sidebar";
import PostList from "./PostList";
import CreatePost from "./CreatePost";
import { Context } from '../store/social-media-store';
import EmptyPage from './EmptyPage';
import LoadingScreen from "./LoadingScreen.jsx"
import OfflinePostList from "./OfflinePostList.jsx"

const   ContentArea = () => {

  let tools = useContext(Context);
  // console.log(tools.contextPostList)

  return (
      <div className="middle-container">
        <Sidebar></Sidebar>
        {tools.isLoadingScreen && tools.mode === "Home" && tools.contextPostList.length  === 0 && <LoadingScreen></LoadingScreen>}
        {tools.contextPostList.length  === 0 && tools.mode === "Home" && !tools.isLoadingScreen &&  <EmptyPage />}
        {tools.mode === "Home" && tools.contextPostList.length > 0 &&  <PostList></PostList> }
        {tools.mode === "Create post"  &&  <CreatePost></CreatePost>}
        {tools.mode === "Offline" && tools.defaultPostList.length  > 0  && <OfflinePostList></OfflinePostList>}
        {tools.mode === "Offline" && tools.defaultPostList.length  === 0  && <EmptyPage />}
      </div>
  )
}

export default ContentArea;
