import { useState } from "react";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import PageNotFound from "./components/Home/PageNotFound";
import AddPost from "./components/Pages/AddPost";
import PostDetail from "./components/Pages/PostDetail";
import EditPost from "./components/Pages/EditPost";
import AllTag from "./components/Tags/AllTag";
import { ContextProvioder } from "./components/Context/Context";
function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: ":id", element: <PostDetail /> },
        { path: "/edit/:id", element: <EditPost /> },
        { path: "/tags", element: <AllTag /> },

        { path: "add-post", element: <AddPost /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);
  return (
    <>
      <ContextProvioder>
        <RouterProvider router={router}></RouterProvider>
      </ContextProvioder>
    </>
  );
}

export default App;
