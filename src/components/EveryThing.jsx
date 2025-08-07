import React from "react";
import Heading from "../common/Heading";
import Description from "../common/Description";
import Marquee from "react-fast-marquee";
import { EVERYTHING_DATA } from "../utils/helper";
import leftEllipse from "../assets/images/action-ellipse.png";
import CustomBorder from "../common/CustomBorder";

const Everything = () => {
  return (
    <>
      <div className="text-[#ffffff] max-w-[1920px] w-full mx-auto relative bg-[#000000]">
        <img
          className="absolute max-w-[379px] max-h-[379px] w-full top-19 -left-10 pointer-events-none"
          src={leftEllipse}
          alt="ellipse"
        />
        <div className="max-w-[1140px] mx-auto px-3">
          <div>
            <Heading headingText={"Everything You Need"} />
            <Description
              descriptionText={
                "Simple yet powerful features for all your video and image needs"
              }
              descriptionClass={"text-center pt-[16px]"}
            />
            <CustomBorder />
          </div>
        </div>
        <div className="py-10 sm:py-20">
          <Marquee speed={200}>
            <div className="flex gap-8 my-[50px]">
              {EVERYTHING_DATA.map((item, index) => {
                const rotation =
                  index % 2 === 0
                    ? "rotate-[8deg] lg:rotate-[15deg]"
                    : "rotate-[-15deg] lg:rotate-[-8deg]";
                const backgroundColor = index % 2 === 0 ? "#1F0C1D" : "#110018";
                return (
                  <div
                    key={index}
                    className={`w-[300px] lg:w-[364px] lg:min-h-[374px] transition-transform duration-300 hover:scale-105 hover:rotate-0 rounded-[16px] border border-[#322438] p-[28px] flex-shrink-0 ${rotation}`}
                    style={{ backgroundColor }}
                  >
                    <item.icon />
                    <p className="font-semibold text-2xl lg:text-3xl xl:text-[32px] leading-tight max-w-[280px] lg:max-w-[317px] pt-[21px]">
                      {item.heading}
                    </p>
                    <p className="leading-[160%] max-w-[260px] lg:max-w-[308px] pt-[50px] lg:pt-[100px]">
                      {item.para}
                    </p>
                  </div>
                );
              })}
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Everything;
