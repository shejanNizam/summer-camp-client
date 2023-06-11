import React from "react";
import {
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaHospitalUser,
  FaShoppingCart,
  FaUserGraduate,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";
import useVarifyInstructor from "../hooks/useVarifyInstructor";

const Dashboard = () => {
  const [cartClass] = useCart();

  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useVarifyInstructor();
  // const isInstructor = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaUtensils></FaUtensils> Add an Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageAllClasses">
                  <FaWallet></FaWallet> Manage All Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageAllBookings">
                  <FaBook></FaBook> Manage All Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/instructorHome">
                  <FaHome></FaHome> Instructor Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addClass">
                  <FaUtensils></FaUtensils> Add a Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageClasses">
                  <FaWallet></FaWallet> Manage Classes (My Classes)
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookingClasses">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allInstructors">
                  <FaUsers></FaUsers> All Instructors
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaCalendarAlt></FaCalendarAlt> Reservations (My Enrolled
                  Classes)
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart> My Carts (Selected Classes)
                  <span className="badge inl badge-secondary">
                    +{cartClass?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <FaHospitalUser /> Our Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourAllInstructors">
              <FaUserGraduate /> Our Instructors
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
