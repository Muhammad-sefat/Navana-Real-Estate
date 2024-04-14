import { createBrowserRouter } from "react-router-dom";
import Root from "../Root.jsx";
import Home from "./Pages/Home.jsx";
import UpdateProfile from "./Pages/UpdateProfile.jsx";
import UserProfile from "./Pages/UserProfile.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import NotFound from "./NotFound.jsx";
import DetailsEstate from "./Pages/DetailsEstate.jsx";
import PrivateRoute from "./Pages/PrivateRoute.jsx";
import ContactUs from "./Pages/ContactUs.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cardstate/:id",
        element: (
          <PrivateRoute>
            <DetailsEstate></DetailsEstate>
          </PrivateRoute>
        ),
        loader: () => fetch("../residential.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateprofile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/userprofile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/aboutus",
        element: (
          <PrivateRoute>
            <ContactUs></ContactUs>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
