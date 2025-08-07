import React from "react";
import Heading from "../common/Heading";
import Description from "../common/Description";
import { ACTION_DATA } from "../utils/helper";
import actionImg from "../assets/images/action-img.png";
import actionEllipse from "../assets/images/action-ellipse (1).png";
import CustomBorder from "../common/CustomBorder";

const Action = () => {
  return (
    <>
      <div
        id="about"
        className="px-3 relative pb-[60px] sm:pb-20 md:pb-35 bg-[#000000]"
      >
        <img
          className="absolute max-w-[400px] max-h-[400px] w-full -top-27 -left-20 pointer-events-none"
          src={actionEllipse}
          alt="ellipse"
        />
        <div className="max-w-[1144px] mx-auto">
          <Heading headingText={"StreamBliss in Action"} />
          <Description
            descriptionClass={"text-center pt-4"}
            descriptionText={
              "See how easy it is to upload and share your videos."
            }
          />
          <CustomBorder />
          <div className="flex flex-wrap gap-3 justify-between sm:mt-[27px]">
            <div className="max-[1088px]:mx-auto max-w-[558px]">
              {ACTION_DATA.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    className="min-[1088px]:max-w-[558px] transition-all duration-200 ease-linear relative group box w-full bg-[#11001880] hover:bg-[#110018] hover:shadow-[0px_4px_62.1px_0px_#E649A21F] border rounded-2xl hover:border-transparent border-[#FFFFFF24] p-4.5 mt-6"
                    key={index}
                  >
                    <div className="flex gap-4 items-start">
                      <div className="!bg-[linear-gradient(321.29deg,_rgba(255,_255,_255,_0.2)_22.72%,_rgba(255,_255,_255,_0)_74.04%)] box-border-gradient relative group-hover:shadow-[0px_0px_17.23px_0px_#B851E066] rounded-xl h-[51px] min-w-[50px] flex items-center justify-center">
                        <IconComponent />
                      </div>
                      <div>
                        <h3 className="text-[#ffffff] font-semibold text-lg">
                          {item.title}
                        </h3>
                        <p className="text-[#ffffff] opacity-70 leading-[160%]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <img
              className="max-h-[478px] mt-3.5 w-full max-w-[494px] max-xl:mx-auto xl:flex xl:justify-end pointer-events-none"
              src={actionImg}
              alt="upload img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Action;
