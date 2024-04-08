import { createBrowserRouter } from "react-router-dom";
import Root from "../Root.jsx";
import Home from "./Pages/Home.jsx";
import UpdateProfile from "./Pages/UpdateProfile.jsx";
import UserProfile from "./Pages/UserProfile.jsx";
import Login from "./Pages/Login.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/updateprofile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/userprofile",
        element: <UserProfile></UserProfile>,
      },
    ],
  },
]);

export default Router;
