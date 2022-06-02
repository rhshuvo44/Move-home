import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo_main.png";
import TopNavbar from "./TopNavbar";
const Navbar = () => {
  return (
    <div className="px-20">
      <TopNavbar />
      <div className="header">
        <div class="navbar bg-base-100 px">
          <div class="flex-1">
            <img src={logo} alt="" />
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal p-0 text-white font-bold text-xl">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Service</Link>
              </li>
              <li>
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
