import React from "react";
import { COMPARE_FEATURE_DATA } from "../utils/helper";

const CampareFeature = () => {
  return (
    <div id="features" className="bg-[#000000] px-4 relative">
      <div className="max-w-[1140px] mx-auto pt-[46px] md:pt-12 lg:pt-20 pb-[60px] sm:pb-14 md:pb-24 lg:pb-36">
        <h4 className="font-semibold text-xl sm:text-2xl leading-[160%] text-[#ffffff] mb-6">
          Compare Features
        </h4>
        <div className="overflow-x-auto rounded-lg border border-[#261C27] custom-scrollbar">
          <table className="min-w-[700px] w-full border-collapse">
            <thead className="bg-[#140016] text-[#ffffff]">
              <tr>
                <th className="p-4 sm:px-6 md:px-8  sm:text-lg md:text-xl leading-[130%] font-semibold text-left">
                  Features
                </th>
                <th className="p-4 sm:px-6 md:px-8  sm:text-lg md:text-xl leading-[130%] font-semibold text-center">
                  Free
                </th>
                <th className="p-4 sm:px-6 md:px-8  sm:text-lg md:text-xl leading-[130%] font-semibold text-center">
                  Pro
                </th>
                <th className="p-4 sm:px-6 md:px-8  sm:text-lg md:text-xl leading-[130%] font-semibold text-center">
                  Creator
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_FEATURE_DATA.map((obj, index) => (
                <tr
                  key={index}
                  className="border-b border-[#261C27] bg-[#070108BD] "
                >
                  <td className="py-3 px-4 sm:px-6 md:px-8  sm:text-base leading-[160%] bg-[#0E030F] text-sm  text-[#ffffff] opacity-70 lg:w-[258px] max-w-[258px] whitespace-nowrap">
                    {obj.feature}
                  </td>
                  <td className="py-3 px-4 sm:px-6 md:px-8  sm:text-base leading-[160%] text-center text-sm  text-[#ffffff] opacity-70 lg:w-[362px] whitespace-nowrap">
                    {obj.free}
                  </td>
                  <td className="py-3 px-4 sm:px-6 md:px-8  sm:text-base leading-[160%] text-center text-sm  text-[#ffffff] opacity-70 whitespace-nowrap">
                    {obj.pro}
                  </td>
                  <td className="py-3 px-4 sm:px-6 md:px-8  sm:text-base leading-[160%] text-center text-sm  text-[#ffffff] opacity-70 whitespace-nowrap">
                    {obj.creator}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CampareFeature;
