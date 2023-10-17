import React from "react";
import Card from "./Card";
import logoOpera from '../assets/logo-opera.svg'
import logoFirefox from '../assets/logo-firefox.svg'
import logoChrome from '../assets/logo-chrome.svg'

const Extension = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center max-w-3xl m-auto">
      <div>
        <Card
          img={logoOpera}
          h1="Add to Opera"
          p="Minimum version 62 "
          logo=""
        />
      </div>
      <div className="mt-10">
        <Card
          img={logoFirefox}
          h1="Add to Firefox"
          p="Minimum version 62 "
          logo=""
        />
      </div>
      <div className="mt-20">
        <Card
          img={logoChrome}
          h1="Add to Chrome"
          p="Minimum version 62 "
          logo=""
        />
      </div>
    </div>
  );
};

export default Extension;
