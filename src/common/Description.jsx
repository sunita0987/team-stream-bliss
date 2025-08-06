import React from "react";

const Description = ({ descriptionText, descriptionClass }) => {
  return (
    <p
      className={`text-white leading-[160%] opacity-70 text-lg ${descriptionClass}`}
    >
      {descriptionText}
    </p>
  );
};

export default Description;
