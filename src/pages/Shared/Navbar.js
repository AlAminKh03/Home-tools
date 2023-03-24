import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuBars = (
    <ul className="lg:flex">
      <li>
        <Link to="/home" className="text-amber-600 font-bold">
          Home
        </Link>
      </li>
      <li>
        <Link to="/blogs" className="text-amber-600 font-bold">
          Blogs
        </Link>
      </li>
      <li>
        <Link to="/about" className="text-amber-600 font-bold">
          About
        </Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard" className="text-amber-600 font-bold">
            Dashboard
          </Link>
        </li>
      )}
      <li>
        {user ? (
          <button onClick={logout} className="btn btn-ghost text-red-500">
            Sign out
          </button>
        ) : (
          <Link to="/login" className="text-black font-bold">
            Login
          </Link>
        )}
      </li>
    </ul>
  );

  return (
    <div className="navbar fixed top-0 left-0 right-0 w-full z-50 bg-transparent backdrop-blur-2xl ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {menuBars}
          </ul>
        </div>
        <Link
          to="/home"
          className="btn btn-ghost normal-case text-xl text-amber-600 font-extrabold"
        >
          {" "}
          Home tools
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal p-0 flex justify-end ">
          {menuBars}
        </ul>
      </div>
      <div className="navbar-end">
        <label
          tabIndex="1"
          htmlFor="dashboard-sidebar"
          className="btn btn-ghost lg:hidden"
        >
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
      </div>
    </div>
  );
};

export default Navbar;
