import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReferAndEarn from "./pages/ReferAndEarn/ReferAndEarn";
import Layout from "./pages/Layout";
import FriendsFerrered from "./pages/FriendsReffered/FriendsFerrered";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.StrictMode>
        <Layout />
      </React.StrictMode>
    ),
    children: [
      {
        path: "/",
        element: <ReferAndEarn />,
      },
      {
        path: "referred",
        element: <FriendsFerrered />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
