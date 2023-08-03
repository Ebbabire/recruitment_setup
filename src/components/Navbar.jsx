import { useState } from "react";

import downArrow from "../../public/assets/down_arrow.svg";
import menuOpen from "../../public/assets/hamburger-menu-open.svg";
import menuClose from "../../public/assets/hamburger-menu-close.svg";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuBar = isMenuOpen ? menuOpen : menuClose;

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg ">
      <div className="container px-4 mx-auto relative">
        <div className="flex items-center justify-between h-16">
          <button className="flex items-center">
            <a href="/">
              <h1 className="text-xl font-bold">Recruitify</h1>
            </a>
          </button>

          {/* desktop */}
          <div className="items-center hidden sm:flex">
            <a href="/" className="text-gray-600 hover:text-gray-800 px-3 py-2">
              Home
            </a>
            <a
              href="/"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 flex items-center gap-2"
            >
              Jobs <img src={downArrow} alt="" className="w-2 h-2" />
            </a>
            <a
              href="/"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 relative mr-2 lg:mr-10 xl:mr-20"
            >
              Messages{" "}
              <span className="bg-blue-600 px-1 rounded-md text-white absolute top-0 -right-2">
                0
              </span>
            </a>
            <div className="flex items-center ml-4">
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* mobile */}
          {}
          <div className="sm:hidden" onClick={toggleMenu}>
            <img src={menuBar} alt="menu" className="w-10 h-10" />
          </div>

          {isMenuOpen && (
            <div className="flex items-center flex-col bg-white absolute top-16 right-0 px-2 rounded-md sm:hidden">
              <a
                href="/"
                className="text-gray-600 hover:text-gray-800 px-3 py-2"
              >
                Home
              </a>
              <a
                href="/"
                className="text-gray-600 hover:text-gray-800 px-3 py-2 flex items-center gap-2"
              >
                Jobs <img src={downArrow} alt="" className="w-2 h-2" />
              </a>
              <a
                href="/"
                className="text-gray-600 hover:text-gray-800 px-3 py-2 relative mr-2 lg:mr-10 xl:mr-20"
              >
                Messages{" "}
                <span className="bg-blue-600 px-1 rounded-md text-white absolute top-0 -right-2">
                  0
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
