import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import PageNotFound from "./components/Home/PageNotFound";
import AddPost from "./components/Posts/AddPost";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
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
