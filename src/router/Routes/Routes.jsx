import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../layouts/Dashboard";
import Main from "../../layouts/Main";
import Classes from "../../pages/Classes/Classes";
import AdminHome from "../../pages/Dashboard/AdminsPages/AdminHome/AdminHome";
import AllUsers from "../../pages/Dashboard/AdminsPages/AllUsers/AllUsers";
import ManageAllBookings from "../../pages/Dashboard/AdminsPages/ManageAllBookings/ManageAllBookings";
import ManageAllClasses from "../../pages/Dashboard/AdminsPages/ManageAllClasses/ManageAllClasses";
import AddClass from "../../pages/Dashboard/InstructorsPages/AddClass/AddClass";
import AllInstructors from "../../pages/Dashboard/InstructorsPages/AllInstructors/AllInstructors";
import BookingClasses from "../../pages/Dashboard/InstructorsPages/BookingClasses/BookingClasses";
import InstructorHome from "../../pages/Dashboard/InstructorsPages/InstructorHome/InstructorHome";
import ManageClasses from "../../pages/Dashboard/InstructorsPages/ManageClasses/ManageClasses";
import MyCart from "../../pages/Dashboard/UsersPages/MyCart/MyCart";
import Payment from "../../pages/Dashboard/UsersPages/Payment/Payment";
import PaymentHistory from "../../pages/Dashboard/UsersPages/PaymentHistory/PaymentHistory";
import Reservations from "../../pages/Dashboard/UsersPages/Reservations/Reservations";
import UserHome from "../../pages/Dashboard/UsersPages/UserHome/UserHome";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import OurAllInstructors from "../../pages/OurAllInstructors/OurAllInstructors";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  // Main layout
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
        path: "/ourAllInstructors",
        element: <OurAllInstructors />,
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
  // Dashboard layout
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // here users pages
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "reservations",
        element: <Reservations />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "mycart",
        element: <MyCart />,
      },

      // here admins pages
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "manageAllClasses",
        element: <ManageAllClasses />,
      },
      {
        path: "manageAllBookings",
        element: <ManageAllBookings />,
      },
      {
        path: "allusers",
        element: <AllUsers />,
      },

      // here instructors pages
      {
        path: "instructorHome",
        element: <InstructorHome />,
      },
      {
        path: "addClass",
        element: <AddClass />,
      },
      {
        path: "manageClasses",
        element: <ManageClasses />,
      },
      {
        path: "bookingClasses",
        element: <BookingClasses />,
      },
      {
        path: "allInstructors",
        element: <AllInstructors />,
      },
    ],
  },
]);

export default router;
