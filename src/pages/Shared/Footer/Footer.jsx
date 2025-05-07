import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../../assets/Footer/summer_camp.jpg";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <img className="w-20 h-20" src={logo} alt="" />
          {/* <FaFacebook /> */}
          <p>
            LanguageGuide Summer Camp School
            <br />
            Copyright © All rights reserved.
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaFacebook />
            </a>
            <a>
              <FaYoutube />
            </a>
            <a>
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
