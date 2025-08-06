import React from "react";
import { FOOTER_DATA } from "../utils/helper";
import footerLogo from "../assets/images/header-logo-2.svg";
import Description from "../common/Description";
import CustomBorder from "../common/CustomBorder";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
      <div className="bg-[#110018] text-gray-200 md:pt-20 pt-[60px] pb-6 px-6">
        <div className="max-w-[1138px] mx-auto flex flex-col md:flex-wrap lg:flex-row justify-between gap-12">
          <div className="lg:w-1/3">
            <div className="flex items-center mb-4">
              <img
                src={footerLogo} 
                alt="footerLogo"
                className="lg:w-[60px] object-contain pointer-events-none"
              />
            </div>
            <Description
              descriptionText="StreamBliss is a secure, high-speed cloud platform designed for creators to store, share, and collaborate on videos, images, and documents."
              descriptionClass="!text-base max-lg:!w-full"
            />
          </div>
          <div className="flex flex-wrap justify-between xl:gap-27 lg:gap-22 max-md:gap-y-8">
            {FOOTER_DATA.map((obj) => (
              <div key={obj.title}>
                <h3 className="text-lg font-bold mb-4">{obj.title}</h3>
                <ul className="space-y-2 opacity-70">
                  {obj.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.link}
                        className="hover:text-pink-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <CustomBorder borderClass={"max-w-full mt-[65px] opacity-30"} />
        <div className="footer-border opacity-30 mt-12 pt-4 text-center text-white/70 text-sm">
          © {new Date().getFullYear()} StreamBliss. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
