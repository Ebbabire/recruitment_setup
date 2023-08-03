import React from "react";
import facebook from "../../public/assets/facebook.svg";
import youtube from "../../public/assets/youtbe.svg";
import linkedin from "../../public/assets/linkedin.svg";
import twitter from "../../public/assets/twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black py-4">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <p>
          &copy; {new Date().getFullYear()} Recruitify. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="/" className="hover:scale-110">
            <img src={facebook} alt="" className="w-8 h-8" />
          </a>
          <a href="/" className="hover:scale-110">
            <img src={youtube} alt="" className="w-8 h-8" />
          </a>
          <a href="/" className="hover:scale-110">
            <img src={linkedin} alt="" className="w-7 h-7" />
          </a>
          <a href="/" className="hover:scale-110">
            <img src={twitter} alt="" className="w-7 h-7" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
