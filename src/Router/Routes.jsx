import { createBrowserRouter } from "react-router";
import React from "react";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        }
    ]
  },
]);

export default router;