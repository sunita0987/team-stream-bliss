import React, { useState } from "react";
import Heading from "../common/Heading";
import Description from "../common/Description";
import leftEllipse from "../assets/images/action-ellipse.png";
import rightEllipse from "../assets/images/action-ellipse.png";
import CustomBorder from "../common/CustomBorder";
import { PRICING_DATA, YEARLYPRICING_DATA } from "../utils/helper";

const ToggleButton = ({ label, active, onClick, badge }) => (
  <button
    onClick={onClick}
    className={`py-[10px] px-[20px] sm:py-[12px] sm:px-[28px] md:py-[15px] md:px-[34px]  flex items-center rounded-full  transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg cursor-pointer ${
      active
        ? "bg-gradient-to-b from-[#B851E0] to-[#EB489B] text-[#ffffff]"
        : "bg-transparent text-gray-300 hover:text-[#ffffff]"
    }`}
  >
    {label}
    {badge && (
      <span className="ml-2 whitespace-nowrap text-[10px] sm:text-xs flex items-center justify-center w-[60px] sm:w-[70px] md:w-[83px] h-[20px] sm:h-[22px] md:h-[24px] gap-[5px] rounded-[34px] border border-white pt-[1px] px-[8px] bg-[#D04DBF1F]">
        {badge}
      </span>
    )}
  </button>
);

const PricingCard = ({ item, index }) => (
  <div className="w-full lg:w-1/3 max-w-sm max-lg:mb-6 bg-[#000000]">
    <div
      className={`flex flex-col p-6 rounded-[20px] backdrop-blur-[16px] transition-all duration-300 h-full border border-[#1F1D1F] relative ${
        index % 2 ? "even-card" : ""
      }`}
    >
      <div className="flex-grow flex flex-col">
        <div className="flex items-center gap-[10px] mb-4">
          <p className="text-[#ffffff] font-semibold text-2xl">{item.text}</p>
          {index === 1 && item.popular && (
            <div className="most-popular-badge">{item.popular}</div>
          )}
        </div>
        <div className="flex items-baseline mb-6">
          <p className="text-[#ffffff] text-[40px] font-semibold">
            {item.amount}
          </p>
          <p className="text-[#ffffff] text-[32px] leading-[120%] ml-1">
            {item.month}
          </p>
        </div>
        <p className="text-[#ffffff] font-bold text-lg mb-8 text-left">
          {item.para}
        </p>
        <div className="space-y-4 mb-8">
          {[item.list1, item.list2, item.list3, item.list4, item.list5].map(
            (feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <item.icon />
                <p className="text-white/90">{feature}</p>
              </div>
            )
          )}
        </div>
        <div className="mt-[97px]">
          <button
            className={`py-[14px] mx-auto flex px-[87px] xl:px-[104px] cursor-pointer z-2 !relative ${
              index % 2
                ? "even-btn"
                : "border border-[#B3B3B3] rounded-[65px] hover:bg-[#E649A1] hover:border-[#E649A1] hover:text-white transition-all duration-200 ease-linear text-[#B4B3B4]"
            }`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Pricing = () => {
  const [page, setPage] = useState("home");
  const currentData = page === "home" ? PRICING_DATA : YEARLYPRICING_DATA;

  return (
    <div
      id="pricing"
      className="relative bg-[#000000] text-[#ffffff] pt-5 sm:pt-16"
    >
      <img
        className="max-w-[379px] max-h-[379px] w-full absolute -bottom-25 left-0 pointer-events-none bg-[#000000]"
        src={leftEllipse}
        alt="ellipse"
      />
      <img
        className="max-w-[379px] max-h-[379px] w-full absolute top-0 right-0 hidden xl:block mix-blend-multiply pointer-events-none bg-black"
        src={rightEllipse}
        alt="ellipse"
      />
      <div className="max-w-[1140px] mx-auto px-3 bg-[#000000]">
        <div className="text-center mb-12">
          <Heading headingText="Simple, Transparent Pricing" />
          <Description
            descriptionText="Choose the plan that works best for you"
            descriptionClass="pt-4 text-center text-lg"
          />
          <CustomBorder />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex border border-[#FFFFFF3D] rounded-full p-[8px] bg-[#ffffff0d] shadow-[inset_0px_0px_6.5px_0px_#D74CB661]">
            <ToggleButton
              label="Monthly"
              active={page === "home"}
              onClick={() => setPage("home")}
            />
            <ToggleButton
              label="Yearly"
              active={page === "about"}
              onClick={() => setPage("about")}
              badge="SAVE 20%"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-8 -mx-3">
          {currentData.map((item, index) => (
            <PricingCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
