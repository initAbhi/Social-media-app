import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import OfflinePostList from "./components/OfflinePostList.jsx"
import './App.css';
import CreatePost from './components/CreatePost.jsx';
import ContentArea from './components/ContentArea.jsx';

let router = createBrowserRouter([{
  path: "/", element: <App />
},{
  path: '/offline', element: <OfflinePostList />
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
