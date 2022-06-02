import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className="navbar -mt-2 bg-base-100 flex md:flex-row flex-col">
      <div className="flex-1 gap-3 text-primary">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 flex md:flex-row flex-col">
          <li>
            <span className="text-primary">
              <FaMapMarkerAlt />
            </span>
            <span>Dhaka,Bangladesh</span>
          </li>
          <li>
            <span className="text-primary">
              <FaEnvelope />
            </span>
            <span>demo@gmail.com</span>
          </li>
          <li className="bg-primary">
            <FaPhone />
            <span className="text-white">Call : +01 1234564567890</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
