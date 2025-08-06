import React from "react";

const CustomBorder = ({ borderClass }) => {
  return (
    <div
      className={`max-w-[694px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mt-5 mx-auto ${borderClass}`}
    ></div>
  );
};

export default CustomBorder;
