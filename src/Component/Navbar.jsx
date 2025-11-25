import React, { useContext } from "react";
import { Link } from "react-router";
import Logo from "../assets/pet-paw.png";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Navbar = () => {

  const {user} = useContext(AuthContext);


  const handleSignOut = () =>{
    signOut(auth);
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-20" src={Logo} alt="logo" />
          {/* <h3 className=" font-semibold text-3xl">Warm Paw</h3> */}
          <h3 className="font-semibold text-3xl bg-gradient-to-r from-rose-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Warm Paw
          </h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold text-xl">
            <Link to="/services">Services</Link>
          </li>
          <li className="font-semibold text-xl">
            <Link to="/Profile">My Profile</Link>
          </li>
        </ul>
      </div>
      {
        user && <div className="navbar-end">
        <button onClick={handleSignOut}
          className="px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 hover:from-yellow-400 hover:via-orange-500 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-lg">Logout
        </button>
      </div>
      }
      {
        !user && <div className="navbar-end">
        <Link
          to={"/Login"}
          className="px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 hover:from-yellow-400 hover:via-orange-500 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-lg">Login
        </Link>
      </div>
      }
      
    </div>
  );
};

export default Navbar;
