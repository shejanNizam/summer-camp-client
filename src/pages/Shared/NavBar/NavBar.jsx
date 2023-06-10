import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import useVarifyInstructor from "../../../hooks/useVarifyInstructor";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [cartClass] = useCart();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useVarifyInstructor();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const navItems = (
    <>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li>
        <Link to="/ourAllInstructors"> Instructors </Link>
      </li>
      <li>
        <Link to="/classes"> Classes </Link>
      </li>
      {user?.email ? (
        <>
          <li>
            {isAdmin ? (
              <>
                <Link to="/dashboard/allusers ">Dashboard</Link>
              </>
            ) : isInstructor ? (
              <>
                <Link to="/dashboard/allInstructors ">Dashboard</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard/mycart ">
                  <button className="btn">
                    Dashboard
                    <div className="badge badge-secondary">
                      +{cartClass.length || 0}
                    </div>
                  </button>
                </Link>
              </>
            )}
          </li>
          <li>
            <Link>
              <button onClick={handleLogOut}> Log out </button>
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl h-12 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-3xl">
            LanguageGuide
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.photoURL ? (
            <>
              <h3 style={{ color: "orange" }} className="text-xl font-bold">
                {user?.displayName}
              </h3>
              <div
                className="tooltip tooltip-left"
                data-tip={user?.displayName}
              >
                <div className="avatar">
                  <div className="w-12 m-4 rounded-full ring ring-gray-600 ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <FaUserAlt style={{ fontSize: "2rem" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
