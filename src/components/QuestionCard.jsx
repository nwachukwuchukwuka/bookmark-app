import React, { useState } from "react";
import logoArrow1 from "../assets/logo-arrow1.svg";
import logoArrow from "../assets/logo-arrow.svg";

const QuestionCard = ({ item }) => {
  const [drop, setDrop] = useState(false);

  const dropDown = () => {
    setDrop(!drop);
  };
  return (
    <div className="border-y p-3">
      <div className=" flex justify-between">
        <h1 className="font-semibold mb-3 text-md">{item.question}</h1>
        <div onClick={dropDown} className="w-5 cursor-pointer">
          {drop ? (
            <div>
              <img src={logoArrow} alt="logoArrow1" />
            </div>
          ) : (
            <div>
              <img src={logoArrow1} alt="logoArrow2" />
            </div>
          )}
        </div>
      </div>
      <p
        className="border-t"
        style={{
          display: drop ? "block" : "none",
        }}
      >
        {item.answer}
      </p>
    </div>
  );
};

export default QuestionCard;
