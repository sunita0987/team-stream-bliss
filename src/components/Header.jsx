import React, { useState, useEffect } from "react";
import CustomButton from "../common/CustomButton";
import { HEADER_LIST } from "../utils/helper";
import { ProfileIcon } from "../utils/icon";
import headerLogo from "../assets/images/streamlogo.png";
import headerLogoTwo from "../assets/images/streamlogo.png";
import headerEllipse from "../assets/images/header-ellipse (1).png";
import headerEllipseTwo from "../assets/images/header-ellipse-2.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("overflow-hidden", !menuOpen);
  };
  useEffect(() => {
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  const linkClick = () => {
    setMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };
  return (
    <>
      <div className="px-3 relative">
        <img
          className="w-full max-w-[425px] absolute top-[-135px] -left-49 pointer-events-none"
          src={headerEllipse}
          alt="header Ellipse"
        />
        <img
          className="absolute max-w-[238px] max-h-[67px] w-full left-[43%] top-[47px] pointer-events-none"
          src={headerEllipseTwo}
          alt="header ellipse"
        />
        <nav className="max-w-[1140px] mx-auto py-4.5 md:py-[21.5px]">
          <div className="flex justify-between items-center">
            <a className=" hidden sm:block" href="/">
              <img
                className="pointer-events-none"
                src={headerLogo}
                alt="nav-logo"
              />
            </a>
            <a className="sm:hidden" href="/">
              <img
                className="pointer-events-none"
                src={headerLogoTwo}
                alt="nav-logo"
              />
            </a>
            <div
              onClick={toggleNavbar}
              className="z-50 lg:hidden flex flex-col justify-between w-6 h-5 cursor-pointer"
            >
              <span
                className={`block h-1 rounded-3xl bg-[#ffffff] transition-transform duration-300 ease-in-out ${
                  menuOpen && "rotate-45 translate-y-2"
                }`}
              ></span>
              <span
                className={`block h-1 rounded-3xl bg-[#ffffff] transition-transform duration-300 ease-in-out ${
                  menuOpen && "opacity-0"
                }`}
              ></span>
              <span
                className={`block h-1 rounded-3xl bg-[#ffffff] transition-transform duration-300 ease-in-out ${
                  menuOpen && "-rotate-45 -translate-y-2"
                }`}
              ></span>
            </div>
            <ul
              id="nav-name"
              className={`list-unstyled flex justify-center items-center nav-link gap-7 lg:gap-[35px] mb-0 max-lg:fixed max-lg:w-full max-lg:min-h-screen max-lg:flex-col max-lg:bottom-0 max-lg:-right-full max-lg:top-0 max-lg:z-3 max-lg:bg-black transition-all duration-300 ease-in-out ${
                menuOpen ? "max-lg:right-0" : ""
              }`}
            >
              {HEADER_LIST.map((item, index) => (
                <li key={index}>
                  <a
                    onClick={linkClick}
                    className="text-[#ffffff] header-link leading-[160%] transition-all duration-200 ease-linear"
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <li className="lg:hidden">
                <CustomButton
                  onClick={linkClick}
                  btnClass={
                    "px-[55px] py-3.5 !border border-[#B2B3B4] !bg-none !text-[#B3B6B7] hover:!text-white"
                  }
                  btnText={"Dashboard"}
                />
              </li>
              <li className="lg:hidden">
                <a
                  onClick={linkClick}
                  className="border-[#B3B3B4] border size-[57px] rounded-full flex items-center justify-center hover:bg-[#E649A1] hover:border-[#E649A1]"
                  href="/"
                >
                  <ProfileIcon />
                </a>
              </li>
            </ul>
            <ul className="max-lg:hidden flex gap-4 items-center justify-center">
              <li>
                <CustomButton
                  onClick={linkClick}
                  btnClass={
                    "px-[54.2px] py-[13.2px] !border border-[#B2B3B4] !bg-none !text-[#B3B6B7] hover:!text-white"
                  }
                  btnText={"Dashboard"}
                />
              </li>
              <li>
                <a
                  className="border-[#B3B3B4] border size-[57px] rounded-full flex items-center justify-center hover:bg-[#E649A1] hover:border-[#E649A1] transition-all duration-200 ease-linear"
                  href="/"
                >
                  <ProfileIcon />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="border border-[#FFFFFF1F]"></div>
    </>
  );
};

export default Header;
