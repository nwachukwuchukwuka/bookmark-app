import React, { useState } from "react";

import "./App.css";
import Extension from "./components/Extension";
import Question from "./components/Question";
import Footer from "./components/Footer";
import illustrationHero from "./assets/illustration-hero.svg";
import illustrationFeatures from "./assets/illustration-features-tab-2.svg";
import illustrationFeatures1 from "./assets/illustration-features-tab-1.svg";
import illustrationFeatures3 from "./assets/illustration-features-tab-3.svg";
import logoBookmark from "./assets/logo-bookmark.svg";
import logoCancel from "./assets/logo-cancel.svg";
import iconHamburger from "./assets/icon-hamburger.svg";

const App = () => {
  const [tapped, setIsTapped] = useState(true);
  const [tapped1, setIsTapped1] = useState(false);
  const [tapped2, setIsTapped2] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    if (tapped1 || tapped2) {
      setIsTapped1(false);
      setIsTapped2(false);
    }
    setIsTapped(true);
  };

  const handleClick1 = () => {
    if (tapped || tapped2) {
      setIsTapped(false);
      setIsTapped2(false);
    }
    setIsTapped1(true);
  };

  const handleClick2 = () => {
    if (tapped || tapped1) {
      setIsTapped(false);
      setIsTapped1(false);
    }
    setIsTapped2(true);
  };

  const toggleNav = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div>
      <div
        style={{
          paddingTop: isOpened ? "0" : "5px",
          paddingLeft: isOpened ? "0" : "10px",
          paddingRight: isOpened ? "0" : "10px",
        }}
        className="max-w-5xl m-auto"
      >
        <div className="flex justify-between pb-7 items-center ">
          {!isOpened && (
            <img
              className="sm: w-24 h-7"
              src={logoBookmark}
              alt="ilustration"
            />
          )}
          <div
            style={{
              background: isOpened && "#242946",
              width: isOpened && "100%",
              height: isOpened && "100vh",
              position: "relative",
              zIndex: "1",
            }}
            className="flex-wrap cursor-pointer md:hidden"
          >
            {isOpened ? (
              <div onClick={toggleNav}>
                <img className="w-6 bg-white" src={logoCancel} alt="" />
              </div>
            ) : (
              <div onClick={toggleNav}>
                <img
                  className="w-5 h-4"
                  src={iconHamburger}
                  alt="ilustration"
                />
              </div>
            )}

            {isOpened && (
              <ul className="flex flex-col justify-center items-center mdtext-gray-600 text-gray-300">
                <li className="px-3 py-2 md:py-0 my-3">FEAUTURES</li>
                <li className="px-3 py-2 md:py-0 my-3">PRICING</li>
                <li className="px-3 py-2 md:py-0 my-3">CONTACT</li>
                <button
                  style={{ marginLeft: isOpened ? "0" : "5px" }}
                  className="px-5 py-1 my-3 md:my-0  bg-red-400 rounded text-white"
                >
                  LOGIN
                </button>
              </ul>
            )}
          </div>
          <ul className="flex justify-between text-gray-600 hidden md:flex">
            <li className="px-3">Features</li>
            <li className="px-3">Pricing</li>
            <li className="px-3">Contact</li>
            <button className="px-5 py-1 ml-5 bg-red-400 rounded text-white">
              Login
            </button>
          </ul>
        </div>
        <div className="flex justify-between flex-col md:flex-row items-center mt-6">
          <div>
            <h1 className="text-2xl font-bold text-center md:text-left text-gray-900 mb-3 ">
              A Simple Bookmark Manager
            </h1>
            <p className="text-center md:text-left text-gray-400 mb-3">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="pb-6 pt-4 flex justify-center md:inline">
              <button className="bg-blue-700 py-2 rounded-sm text-sm px-2 text-white shadow-md mr-2">
                Get it on Chrome
              </button>
              <button className="bg-gray-200 py-2 rounded-sm text-sm text-black px-2 shadow-md">
                Get it on Firefox
              </button>
            </div>
          </div>

          <div className="">
            <div className=" rounded-bl-full -z-50 absolute  right-[0] top-[320px] md:top-[150px]  w-64 md:w-[500px] h-56 md:h-[250px] bg-blue-700"></div>

            <div className="w-[350px] md:w-full">
              <img src={illustrationHero} alt="illustrationHero" />
            </div>
          </div>
        </div>
        {/* section-1*/}
        <h1 className="text-gray-900 mb-2 text-xl text-center font-bold mt-9">
          Features
        </h1>
        <p className="max-w-lg m-auto text-gray-900  md:text-gray-400 text-center mb-5">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go
        </p>
        <div className=" border-t md:border-0 max-w-xl m-auto text-center md:flex justify-between text-gray-500 font-bold">
          <p
            onClick={handleClick}
            style={{
              borderBottom: "1px solid gray",
              cursor: "pointer",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "10px",
            }}
          >
            Simple Bookmarking
            {tapped && (
              <div className="bg-[red] h-[3px] w-[200px] md:w-[150px] max-w-[250px] m-auto mt-[10px]"></div>
            )}
          </p>
          <p
            onClick={handleClick1}
            style={{
              borderBottom: "1px solid gray",

              cursor: "pointer",
              paddingLeft: "20px",
              paddingTop: "10px",
              paddingRight: "20px",
            }}
          >
            Speedy Searching
            {tapped1 && (
              <div className="bg-[red] h-[3px] w-[200px] md:w-[150px] max-w-[250px] m-auto mt-[10px]"></div>
            )}
          </p>
          <p
            onClick={handleClick2}
            style={{
              borderBottom: "1px solid gray",
              cursor: "pointer",
              paddingTop: "10px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            Easy Sharing
            {tapped2 && (
              <div className="bg-[red] h-[3px] w-[200px] md:w-[150px] max-w-[250px] m-auto mt-[10px]"></div>
            )}
          </p>
        </div>

        <div style={{ display: tapped ? "block" : "none" }}>
          <div className="text-center md:text-left grid md:grid-cols-2 mt-14 gap-10 items-center">
            <div>
              <img
                className="w-11/12 max-w-[98%] m-auto md:max-w-full md:m-0"
                src={illustrationFeatures1}
                alt="illustrationFeatures1"
              />
            </div>

            <div>
              <h1 className="font-semibold mb-3 text-xl">
                Bookmark in one click
              </h1>
              <p className="text-gray-400 mb-6">
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
              <button className="p-3 bg-blue-600 text-white text-sm shadow-md rounded-sm">
                More info
              </button>
            </div>
          </div>
        </div>

        <div style={{ display: tapped1 ? "block" : "none" }}>
          <div className="text-center md:text-left  grid md:grid-cols-2  mt-14 gap-10 items-center">
            <img className="w-11/12 max-w-[98%] m-auto md:max-w-full md:m-0" src={illustrationFeatures} alt="" />
            <div>
              <h1 className="font-semibold mb-3 text-xl">
                Intelligent search
              </h1>
              <p className="text-gray-400 mb-6">
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
              <button className="p-3 bg-blue-600 text-white text-sm shadow-md rounded-sm">
                More info
              </button>
            </div>
          </div>
        </div>

        <div style={{ display: tapped2 ? "block" : "none" }}>
          <div className="text-center md:text-left  grid md:grid-cols-2  mt-14 gap-10 items-center">
            <img
              className="w-11/12 max-w-[98%] m-auto md:max-w-[full]"
              src={illustrationFeatures3}
              alt="illustrationFeatures3"
            />

            <div>
              <h1 className="font-semibold mb-3 text-xl">
                Share your bookmarks
              </h1>
              <p className="text-gray-400 mb-6">
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
              <button className="p-3 bg-blue-600 text-white text-sm shadow-md rounded-sm">
                More info
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-lg m-auto text-center mt-5">
          <h1 className="font-semibold mb-3 text-xl mt-14">
            Download the extension
          </h1>
          <p className="text-gray-400 mb-6">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>

        <div>
          <Extension />
          <Question />
        </div>
      </div>
      <div className=" bg-blue-600">
        <Footer />
      </div>
    </div>
  );
};

export default App;
