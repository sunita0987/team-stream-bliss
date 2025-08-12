import React from "react";

const CustomButton = ({ btnClass, btnIcon, btnText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`font-semibold whitespace-nowrap cursor-pointer text-lg leading-[160%] rounded-[65px] transition-all duration-300 ease-in-out text-white bg-gradient-to-b from-[#B851E0] to-[#EB489B] hover:bg-[#E649A1] hover:border-[#E649A1] ${btnClass}`}
    >
      {btnIcon} {btnText}
    </button>
  );
};
export default CustomButton;
