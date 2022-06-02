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
import logo from "../../../images/logo_main.png";

const FooterTop = () => {
  return (
    <footer class="footer footer-center p-10 text-primary-content">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 text-white my-10">
        <div class="card w-96 bg-secondary">
          <figure class="px-10 pt-10">
          <div class="avatar p-5  text-primary">
              <div class="w-16 rounded">
              <FaMapMarkerAlt className="text-5xl"/>

              </div>
            </div>
          </figure>
          <div class="card-body items-center text-center">
        
          <h2 class="card-title">Dhaka,Bangladesh</h2>

          </div>
        </div>
        <div class="card w-96 bg-secondary">
          <figure class="px-10 pt-10 ">
            <div class="avatar p-5 text-primary">
              <div class="w-16 rounded">
              <FaEnvelope className="text-5xl"/>

              </div>
            </div>
          </figure>

          <div class="card-body items-center text-center">
            <h2 class="card-title">demo@gmail.com</h2>
            
          </div>
        </div>
        <div class="card w-96 bg-secondary">
          <figure class="px-10 pt-10">
          <div class="avatar p-5 text-primary">
              <div class="w-16 rounded">
              <FaPhone className="text-5xl"/>

              </div>
            </div>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Call : +01 1234564567890</h2>
          
          </div>
        </div>
      </div>
      <div>
          <h1 className="text-5xl text-center text-white mb-10 uppercase">Follow Us</h1>
        <div class="grid grid-flow-col gap-4">
          <FaFacebookF className="bg-white text-5xl text-primary"/>
          <FaTwitter className="bg-white text-5xl text-primary"/>
          <FaInstagram className="bg-white text-5xl text-primary"/>
          <FaYoutube className="bg-white text-5xl text-primary"/>
        </div>
      </div>
    </footer>
  );
};

export default FooterTop;
