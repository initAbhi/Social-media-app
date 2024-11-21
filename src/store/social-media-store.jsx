import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { Toast, ToastContainer, Button } from "react-bootstrap";

//context where data is passed - used in every file where the data is used.
export const Context = createContext({
  contextPostList: [],
  setContextPostList: () => {},
  updatePostList: () => {},
  removeFromPostList: () => {},
  mode: "",
  setMode: () => {},
  setInitialPostList: () => {},
  isLoadingScreen: Boolean,
  setIsLoadingScreen: () => {},
  defaultPostList: [],
  setDefaultPostList: () => {},
  toggleShow: () =>{},
  show: Boolean,
});

//wrapper component used in app.jsx file only to wrap
export const ContextProvider = ({ children }) => {
  //Postlist Functions ------------------------------------------------------------------------------------------------------------------------------------------------>
  // const [contextPostList, setContextPostList] = useState([]);

  const postListReducer = (currentList, action) =>{
    switch(action.type){
      case 'ADD_POST':
        return [action.post,...currentList];
        case 'REMOVE_POST':
          return currentList.filter(post => post.id !== action.id);
          case 'Initial_Postlist':
            return action.post;
            default:
              return currentList;
              }
              };

  
  const [contextPostList, dispatchPostList] = useReducer(postListReducer, []);

  const setInitialContextPostList = (list) => {
    dispatchPostList({ type: "Initial_Postlist", post: list });
  }

  const updatePostList = (newPost) => {
    // let newObj = {
    //   id: Math.random(),
    //   title: title,
    //   body: body,
    //   tags: tags,
    // };
    dispatchPostList({type: 'ADD_POST', post: newPost});

    // setContextPostList([newPost, ...contextPostList]);
  };

  const removeFromPostList = (id) => {
    // setContextPostList(contextPostList.filter((post) => post.id !== id));
    dispatchPostList({type: 'REMOVE_POST', id: id});
  };

  //Initial postList ------------------------------------------------------------------------------------------------------------------------------------->
  useEffect(() => {
    setIsLoadingScreen(true);

    fetch("https://dummyjson.com/posts?limit=8")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.posts);
        setInitialContextPostList(res.posts);
        setIsLoadingScreen(false);
      });

    return () => {
      console.log("Cleaning up");
      // controller.abort();
    };
  }, []);

  //Loading Screen --------------------------------------------------------------------------------------------------------------------------------->
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  const setInitialPostList = () => {
    setIsLoadingScreen(true);
    fetch("https://dummyjson.com/posts?limit=8")
      .then((res) => res.json())
      .then((res) => {
        setInitialContextPostList(res.posts);
        // setContextPostList([...contextPostList,...res.posts]);
        setIsLoadingScreen(false);
      });
  };

  //Set Sidebar Mode -------------------------------------------------------------------------------------------------------------------------------------------------->
  const [mode, setMode] = useState("Home");

  //Offline PostList ---------------------------------------------------------------------------------------->

  const [defaultPostList, setDefaultPostList] = useState(madeDefaultPostList);

  //Bootstrap Toggle --------------------------------------------------------------------------------------------------------->
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return (
    <Context.Provider
      value={{
        contextPostList,
        // setContextPostList,
        updatePostList,
        removeFromPostList,
        mode,
        setMode,
        setInitialPostList,
        isLoadingScreen,
        setIsLoadingScreen,
        defaultPostList,
        setDefaultPostList,
        toggleShow,
        show
      }}
    >
      {children}
    </Context.Provider>
  );
};






const madeDefaultPostList = [
  {
    id: 1,
    title: "The Joys of Gardening",
    body: " Gardening is a wonderful hobby that provides both relaxation and satisfaction. It's amazing to see the seeds you plant grow into beautiful flowers or delicious vegetables. The process of nurturing plants can be therapeutic, offering a break from the hustle and bustle of daily life.",
    tags: "#gardening #hobby #nature #wellness",
  },
  {
    id: 2,
    title: "Exploring the Great Outdoors",
    body: "Hiking in the mountains is an exhilarating experience. The fresh air, the stunning views, and the physical challenge all combine to create an unforgettable adventure. Whether you're an experienced hiker or a beginner, there's always something new to discover in the great outdoors.",
    tags: "#hiking #outdoors #adventure #nature",
  },
  {
    id: 3,
    title: "The Future of Technology",
    body: "The pace at which technology is advancing is truly remarkable. Innovations like artificial intelligence, machine learning, and blockchain are transforming industries and changing the way we live. It's exciting to think about what the future holds and how these technologies will continue to evolve.",
    tags: "#technology #innovation #future #AI",
  },
  {
    id: 4,
    title: "Cooking for Beginners",
    body: "Learning to cook can be a daunting task, but it's also incredibly rewarding. Start with simple recipes and gradually build your skills. Cooking at home allows you to control what goes into your meals, ensuring they are healthy and delicious. Plus, it's a great way to impress your friends and family!",
    tags: "#cooking #beginners #healthy #recipes",
  },
  {
    id: 5,
    title: "Benefits of Regular Exercise",
    body: " Incorporating regular exercise into your routine can have profound effects on your health. It helps to improve cardiovascular health, strengthen muscles, and boost mental well-being. Even  ",
    tags: "#exercise #health #fitness #wellbeing",
  },
  {
    id: 6,
    title: " The Importance of Mental Health",
    body: "Mental health is just as important as physical health. It's essential to take care of your mind by practicing self-care, seeking support when needed, and finding ways to manage stress. Remember, it's okay to ask for help and prioritize your mental well-being.",
    tags: " #mentalhealth #selfcare #wellness #support",
  },
]