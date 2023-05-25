import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleLogOut = () => {
    logOut()
      .then((res) => {
        setError(res.user);
      })
      .catch((err) => setError(err));
  };

  return (
    <div className="navbar bg-base-100 justify-between">
      <div className="navbar-start w-0 block md:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-blue-500" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-blue-500" : "")}
                to="blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-blue-500" : "")}
                to="about"
              >
                About
              </NavLink>
            </li>
            {!user && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : ""
                  }
                  to="login"
                >
                  Login
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : ""
                  }
                  to="register"
                >
                  Register
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-center gap-1 font-bold text-3xl">
        Hire <span className="text-purple-700"> Chef</span>
      </div>

      <nav className="hidden font-semibold text-lg md:flex items-center gap-4">
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="blog"
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="about"
        >
          About
        </NavLink>
        {!user && (
          <span className="flex items-center gap-4">
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
              to="login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
              to="register"
            >
              Register
            </NavLink>
          </span>
        )}
      </nav>
      {user && (
        <div className="">
          <div className="dropdown dropdown-end">
            <label
              title={user.displayName}
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar z-50"
            >
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link>Settings</Link>
              </li>
              <li onClick={handleLogOut}>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
