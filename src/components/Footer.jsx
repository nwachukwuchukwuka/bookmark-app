import React from "react";
import iconTwitter from '../assets/icon-twitter.svg'
import iconFacebook from '../assets/icon-facebook.svg'
const Footer = () => {
  return (
    <div>
      <div className="text-white mt-10 max-w-md m-auto text-center">
        <p className="pt-7 text-sm">35,000+ already joined</p>
        <h1 className="font-semibold mb-5 text-2xl mt-3">
          Stay up-to-date with what
          <br />
          we’re doing
        </h1>
        <div className="pb-14">
          <input
            className="py-2 px-7 md:mr-3 mr-1 rounded-md"
            placeHolder="Enter your Email"
            type="email"
          />
          <button className="bg-red-500 py-2 rounded-md md:px-3 px-20  focus:outline-none mt-2 md:mt-0 mr-1 md:mr-0 ">
            Contact Us
          </button>
        </div>
      </div>

      <div style={{ background: "#242946" }}>
        <div className="flex flex-col md:flex-row items-center text-center md:text-left justify-between max-w-5xl m-auto py-6">
          <div className="flex text-gray-300 flex-col md:flex-row mb-3 md:mb-0">
            <ul className="flex flex-col md:flex-row ">
              <li className="px-2 cursor-pointer my-1 md:my-0">Contact Us</li>
              <li className="px-2 cursor-pointer my-1 md:my-0">Features</li>
              <li className="px-2 cursor-pointer my-1 md:my-0">Pricing</li>
              <li className="px-2 cursor-pointer my-1 md:my-0">Contact</li>
            </ul>
          </div>

          <div className="flex px-3 items-center mt-2 md:mt-0 justify-center">
            <img
              className="px-3 cursor-pointer"
              src={iconTwitter}
              alt="iconTwitter"
            />
            <img
              className="cursor-pointer"
              src={iconFacebook}
              alt="iconFacebook"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
