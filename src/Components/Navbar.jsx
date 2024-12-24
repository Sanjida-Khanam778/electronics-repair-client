import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { AuthContext } from "../Provider/AuthProvider";
import { BiMoon, BiSun } from "react-icons/bi";

const Navbar = () => {
  const { user, handleSignOut, theme, handleToggle } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allServices"}>Services</NavLink>
      </li>

      {user && (
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="ml-3" onClick={toggleDropdown}>
            Dashboard
          </div>

          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow mt-4"
            >
              <li>
                <NavLink
                  onClick={closeDropdown}
                  className="py-2 px-4 hover:bg-slate-200 hover:rounded-lg"
                  to={"/add-service"}
                >
                  Add Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={closeDropdown}
                  className="py-2 px-4 hover:bg-slate-200 hover:rounded-lg"
                  to={`/manage-service/${user?.email}`}
                >
                  Manage Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={closeDropdown}
                  className="py-2 px-4 hover:bg-slate-200 hover:rounded-lg"
                  to={"/booked-service"}
                >
                  Booked-Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={closeDropdown}
                  className="py-2 px-4 hover:bg-slate-200 hover:rounded-lg"
                  to={"/service-to-do"}
                >
                  Service-To-Do
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      )}
    </>
  );
  return (
    <div className={`w-11/12 xl:w-10/12 mx-auto `}>
      <div className="navbar px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden px-0 pr-2"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img className="h-5 md:h-9 mr-2 md:mr-4" src={logo} alt="" />
          <Link
            className="font-bold font-logoFont text-red-700 text-xl md:text-2xl xl:text-4xl "
          >
            Electro<span className="text-yellow-400">Care</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className={`flex gap-5 items-center px-1 font-bold`}
          >
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className={`flex items-center xl:mr-2`}>
            <BiSun className="mr-1 text-xl hidden md:block"></BiSun>

            <input
              type="checkbox"
              value={theme}
              onChange={handleToggle}
              className={`toggle theme-controller mr-1 `}
            />
            <BiMoon className="text-xl hidden md:block"></BiMoon>
          </div>

          {user && user?.email ? (
            <>
              <div className="relative group mr-3">
                <img src={user?.photoURL} className="h-12 w-12 rounded-full" />
                <div className="absolute z-10 w-32 -bottom-8 -right-10 transform -translate-x-1/2 bg-white text-black text-sm px-3 py-1 opacity-0 group-hover:opacity-100 transition duration-300">
                  {user?.displayName}
                </div>
              </div>
              <Link onClick={handleSignOut}>
                <button className="btn bg-red-600 hover:bg-red-700 text-white border-none">
                  Logout
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link className=" mr-3" to={"/login"}>
                <button className="btn bg-red-600 px-2 md:px-4 hover:bg-red-700 text-white border-none">
                  Login
                </button>
              </Link>
              <Link className="" to={"/register"}>
                <button className="btn px-2 md:px-4 bg-red-600 hover:bg-red-700 text-white border-none">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
