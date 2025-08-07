import React from "react";
import Header from "./Header";
import Description from "../common/Description";
import CustomButton from "../common/CustomButton";
import heroImg from "../assets/images/hero.png";
import heroLayer from "../assets/images/hero-layer.png";
import {
  CameraIcon,
  UploadIcon,
  CloudIcon,
  StorageCloud,
  LeftArrow,
  RightArrow,
  EncryptionIcon,
} from "../utils/icon";
import heroEllipse from "../assets/images/header-ellipse-2.png";

const Hero = () => {
  return (
    <div className="overflow-hidden bg-[#000000]">
      <div className="mx-auto">
        <Header />
      </div>
      <div id="home" className="px-3 relative pb-15 min-[1024px]:pb-0">
        <img
          className="absolute max-w-[435px] max-h-[435px] -right-40 top-43 mix-blend-multiply hidden lg:block pointer-events-none"
          src={heroEllipse}
          alt="ellipse"
        />
        <div className="max-w-[1140px] mx-auto relative">
          <div className="max-w-[239px] absolute top-45 left-9 hidden lg:block">
            <div className="flex  justify-end">
              <LeftArrow />
            </div>
            <div className="flex bg-[linear-gradient(180deg,rgba(184,81,224,0.08)_0%,rgba(235,72,155,0.08)_100%)] max-w-[226px] rounded-[95px] items-center gap-2 py-1.5 px-5.5 border border-[#8B858D]">
              <StorageCloud />
              <span className="text-[#FCFCFC] font-semibold whitespace-nowrap">
                Unlimited Storage
              </span>
            </div>
          </div>
          <div className="max-w-[264px] absolute max-[1140px]:top-42 top-52 right-6 hidden lg:block">
            <div className="flex  justify-start">
              <RightArrow />
            </div>
            <div className="flex max-w-[264px] bg-[linear-gradient(180deg,rgba(184,81,224,0.08)_0%,rgba(235,72,155,0.08)_100%)] rounded-[95px] items-center gap-2 py-[7.5px] px-5.5 border border-[#8B858D]">
              <EncryptionIcon />3
              <span className="text-[#FCFCFC] font-semibold whitespace-nowrap">
                End-to-End Encryption
              </span>
            </div>
          </div>
          <div className="justify-center flex pt-17">
            <h1 className="font-bold text-[35px] sm:text-[52px] md:text-[58px] leading-[130%] text-center max-w-[576px] text-white">
              The Creative Cloud for Everyone
            </h1>
          </div>
          <div className="flex justify-center">
            <Description
              descriptionClass={"text-center max-w-[554px] pt-4"}
              descriptionText={
                "Store, share, and collaborate on videos, images, docs, and more — all in one secure, lightning-fast platform."
              }
            />
          </div>
          <div className="flex flex-wrap items-center gap-6 justify-center pt-10 z-1 relative">
            <CustomButton
              btnClass={
                "py-[13.5px] px-[54.5px] hover:bg-gradient-to-t hover:from-[#B851E0] hover:to-[#EB489B] transition-all duration-500"
              }
              btnText={"Start For Free"}
            />
            <CustomButton
              btnClass={
                "py-[13.5px] px-[23.5px] bg-none border border-[#B2B3B4] !text-[#B3B6B7] hover:!text-white"
              }
              btnText={"See Platform in Action"}
            />
          </div>
        </div>
        <div className="max-w-[994px] mx-auto">
          <img
            className="mx-auto pt-17 max-h-[630px] w-full pointer-events-none"
            src={heroImg}
            alt="hero-img"
          />
          <div className="flex flex-wrap max-lg:gap-4 lg:justify-between z-1 relative max-sm:pt-6 justify-center max-[681px]:-translate-y-10 min-[1017px]:-translate-y-15">
            <div className="py-[14px] px-[87px] relative border-0 border-gradient items-center !rounded-xl text-[#ffffff] !font-medium !text-base flex gap-[10px] !bg-[linear-gradient(321.29deg,_rgba(255,_255,_255,_0.2)_22.72%,_rgba(255,_255,_255,_0)_74.04%)]">
              <CameraIcon /> <span>461 watching</span>
            </div>
            <div className="p-[14px] relative border-0 border-gradient items-center !rounded-xl text-[#ffffff] !font-medium !text-base flex gap-[10px] !bg-[linear-gradient(321.29deg,_rgba(255,_255,_255,_0.2)_22.72%,_rgba(255,_255,_255,_0)_74.04%)]">
              <UploadIcon /> <span>2,000+ Creators uploading now</span>
            </div>
            <div className="py-[14px] px-[61.5px] relative border-0 border-gradient items-center !rounded-xl text-[#ffffff] !font-medium !text-base flex gap-[10px] !bg-[linear-gradient(321.29deg,_rgba(255,_255,_255,_0.2)_22.72%,_rgba(255,_255,_255,_0)_74.04%)]">
              <CloudIcon /> <span> 2069 uploads today</span>
            </div>
          </div>
        </div>
        <img
          className="absolute pointer-events-none bottom-0 h-full !max-h-[600px] min-[620px]:!max-h-[670px] min-[665px]:!max-h-[650px] min-[681px]:!max-h-[530px] min-[850px]:!max-h-[550px] min-[1017px]:!max-h-[425px] min-[1024px]:!max-h-[350px]  left-0 w-full"
          src={heroLayer}
          alt="hero-layer"
        />
      </div>
    </div>
  );
};

export default Hero;
