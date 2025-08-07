import React from "react";
import { GET_STARTED_LIST, SECURITY_FEATURES } from "../utils/helper";
import CustomButton from "../common/CustomButton";
import Heading from "../common/Heading";
import Description from "../common/Description";

const Ready = () => {
  return (
    <div
      id="work"
      className="flex justify-center items-center bg-gradient-to-br  px-4 bg-[#000000]"
    >
      <div className="bg-[#E649A208] rounded-2xl shadow-lg relative ready-box-border w-full max-w-[1238px] lg:py-[50px] lg:px-16 py-8 md:px-5 px-3">
        <div className="max-w-[1150px]">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex flex-col justify-center">
              <Heading
                headingText="Ready to Get Started?"
                headingClass="!mb-4 z-1 md:!text-left"
              />
              <Description
                descriptionText="Join thousands of creators who trust StreamBliss"
                descriptionClass="mb-10 max-md:text-center z-1"
              />
              <CustomButton
                btnText="Start Uploading "
                btnClass="!px-[45px] z-1 hover:bg-gradient-to-t hover:from-[#B851E0] hover:to-[#EB489B] transition-all duration-500 !py-[12px] w-fit max-md:mx-auto"
              />
            </div>
            <div className="flex-1 flex flex-col gap-6 z-1 mx-auto max-w-[558px] w-full">
              {GET_STARTED_LIST.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-4 bg-[#11001880] border max-w-[558px] border-[#2d2236] rounded-xl p-[18px]"
                >
                  <div className="flex items-center justify-center size-13 box-border-gradient relative rounded-xl !bg-[linear-gradient(321.29deg,_rgba(255,_255,_255,_0.2)_22.72%,_rgba(255,_255,_255,_0)_74.04%)]">
                    <feature.img />
                  </div>
                  <div>
                    <div className="text-[#ffffff] font-semibold pb-[6px]">
                      {feature.title}
                    </div>
                    <div className="text-[#B6B2B7] max-md:text-sm">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#28202C99] z-1 relative rounded-xl mt-14">
            <div className="flex max-xl:flex-wrap md:gap-6 gap-3 md:p-6 p-3 xl:gap-[59px] lg:gap-x-24 lg:gap-y-6">
              {SECURITY_FEATURES.map((badge, index) => (
                <div
                  key={badge.title}
                  className={`flex z-1 items-center gap-4 pb-4 lg:pb-2 lg:border-b-0 last:border-none
                 ${
                   index === 0
                     ? "xl:w-[375px]"
                     : index === 1
                     ? "xl:w-[247px]"
                     : index === 2
                     ? "xl:w-[325px]"
                     : ""
                 }`}
                >
                  <div className="flex items-center justify-center size-13 box-border-gradient relative !bg-[linear-gradient(321.29deg,_rgba(255,_255,_255,_0.2)_22.72%,_rgba(255,_255,_255,_0)_74.04%)] rounded-xl">
                    <badge.img />
                  </div>
                  <div>
                    <div className="text-[#ffffff] text-xl pb-[6px] font-semibold">
                      {badge.title}
                    </div>
                    <div className="text-[#B6B2B7] lg:whitespace-nowrap max-md:text-sm">
                      {badge.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
