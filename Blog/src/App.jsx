import { useState } from "react";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import PageNotFound from "./components/Home/PageNotFound";
import AddPost from "./components/Posts/AddPost";
import PostDetail from "./components/Posts/PostDetail";
import EditPost from "./components/Posts/EditPost";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: ":id", element: <PostDetail /> },
        { path: "/edit/:id", element: <EditPost /> },

        { path: "add-post", element: <AddPost /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
