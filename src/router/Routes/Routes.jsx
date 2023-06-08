import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../layouts/Dashboard";
import Main from "../../layouts/Main";
import Classes from "../../pages/Classes/Classes";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import MyCart from "../../pages/Dashboard/MyCart/MyCart";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
import Instructors from "../../pages/Instructors/Instructors";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "allusers",
        element: <AllUsers />,
      },
    ],
  },
]);

export default router;
