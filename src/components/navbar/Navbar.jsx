import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white p-4 border-b border-gray-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-12 w-auto"
                src="/src/image/logo.jpg"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              HOME
            </Link>
            <Link
              to="/men"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              MEN
            </Link>
            <Link
              to="/women"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              WOMEN
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              BLOG
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              CONTACT US
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/search" className="text-gray-700 hover:text-black">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.5em"
                width="1.5em"
              >
                <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
              </svg>
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-black">
              <svg
                viewBox="0 0 448 512"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4z" />
              </svg>
            </Link>
            <Link to="/favorites" className="text-gray-700 hover:text-black">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
              >
                <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
              </svg>
            </Link>
            <Link
              to="/cart"
              className="text-gray-700 hover:text-black relative pr-6 py-4"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.5em"
                width="1.5em"
              >
                <path d="M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.49.598l-1 5a.5.5 0 01-.465.401l-9.397.472L4.415 11H13a.5.5 0 010 1H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2z" />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center h-6 w-6 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                0
              </span>
            </Link>
            <button
              type="button"
              className="text-gray-700 hover:text-black sm:hidden"
              onClick={toggleMobileMenu}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 100 80"
                width="30"
                height="30"
              >
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              HOME
            </Link>
            <Link
              to="/men"
              className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              MEN
            </Link>
            <Link
              to="/women"
              className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              WOMEN
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              BLOG
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
