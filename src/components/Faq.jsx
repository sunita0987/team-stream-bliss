import React, { useState } from "react";
import { FAQ_DATA } from "../utils/helper";
import Heading from "../common/Heading";
import Description from "../common/Description";
import blurLayer from "../assets/images/header-ellipse.png";
import CustomBorder from "../common/CustomBorder";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex justify-center items-center py-[60px] sm:py-20 md:py-[130px] bg-black relative">
      <div className="w-full max-w-[816px] mx-auto px-3">
        <Heading
          headingText="Frequently Asked Questions"
          headingClass="!mb-4 !text-white max-md:text-3xl"
        />
        <Description
          descriptionText="Choose the plan that works best for you"
          descriptionClass="!text-center !mb-5"
        />
        <CustomBorder />
        <div className="footer-border mb-6"></div>
        <div className="bg-transparent">
          {FAQ_DATA.map((faq, idx) => (
            <div key={faq.question} className="border-b border-white/20">
              <button
                className={`w-full flex justify-between items-center py-6 focus:outline-none cursor-pointer ${
                  openIndex === idx ? "pb-4" : ""
                }`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-left md:text-2xl text-xl  font-semibold text-white">
                  {faq.question}
                </span>
                <span className="text-2xl text-white font-bold select-none">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? "max-h-40 pb-6" : "max-h-0"
                } text-white/70`}
              >
                <div className="pb-4 max-w-[694px]">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 max-w-[379px] top-[3%] pointer-events-none">
        <img src={blurLayer} alt="blurLayer" className="mix-blend-multiply" />
      </div>
    </div>
  );
};

export default Faq;
