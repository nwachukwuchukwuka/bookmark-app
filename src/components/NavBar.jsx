import React from "react";
import logoBookmark from '../assets/logo-bookmark.svg'
import iconHamburger from '../assets/icon-hamburger.svg'

const NavBar = () => {
  return (
    <div>
    
      <div className="flex justify-between pb-7 items-center">
        <img
          className="sm: w-24 h-7"
          src={logoBookmark}
          alt="ilustration"
        />
        <div onClick={toggleNav} className="cursor-pointer">
          <img
            className="w-5 h-4"
            src={iconHamburger}
            alt="ilustration"
          />
        </div>
        <ul className="flex justify-between text-gray-600 sm: hidden">
          <li className="px-3">Features</li>
          <li className="px-3">Pricing</li>
          <li className="px-3">Contact</li>
          <button className="px-5 py-1 ml-5 bg-red-400 rounded text-white">
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
