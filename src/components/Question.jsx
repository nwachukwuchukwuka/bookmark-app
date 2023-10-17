import React from "react";
import QuestionCard from "./QuestionCard";

const Question = () => {
  const FAQs = [
    {
      question: "What is Bookmark?",
      answer:
        " a bookmark is a Uniform Resource Identifier that is stored for later retrieval in any of various storage formats",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Select the Start button, and then type Default apps. In the search results, select Default apps. Under Web browser, select the browser currently listed, and then select Microsoft Edge or another browser.",
    },
    {
      question: "what about other chromium browser",
      answer:
        "Chromium is a free and open-source web browser project, mainly developed and maintained by Google. This codebase provides the vast majority of code for the Google Chrome browser.",
    },
    {
      question: "is there a mobile app?",
      answer:
        "Yes, there is a mobile app, features of the mobile app are being updated, you will get a notification as soon as we are done.",
    },
  ];

  return (
    <div className="max-w-lg m-auto text-center mt-5">
      <h1 className="font-semibold mb-3 text-xl mt-14">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-400 mb-6  pb-7">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>

      <div className="text-left">
        {FAQs.map((item, idx) => (
          <div key={idx}>
            <QuestionCard item={item} />
          </div>
        ))}
      </div>
      <button className="p-3 bg-blue-600 text-white text-sm shadow-md rounded-sm mt-10">
        More info
      </button>
    </div>
  );
};

export default Question;
