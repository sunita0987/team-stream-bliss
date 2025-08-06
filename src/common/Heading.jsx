import React from "react";

const Heading = ({ headingClass, headingText }) => {
  return (
    <h2
      className={`text-white font-semibold text-3xl sm:text-[42px] leading-[130%] text-center ${headingClass}`}
    >
      {headingText}
    </h2>
  );
};

export default Heading;
