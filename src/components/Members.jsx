import React from "react";
import Heading from "../common/Heading";
import Description from '../common/Description';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { MEMBERS_DATA } from "../utils/helper";
import memberIcon from '../assets/images/member-icon.svg'
import CustomBorder from "../common/CustomBorder";

const Members = () => {
  return (
    <>
      <div className="px-4">
        <div className="bg-black">
          <div className="max-w-[1920px] mx-auto pb-[60px] md:pb-[80px] lg:pb-[140px]">
            <Heading
              headingClass="text-white mb-4"
              headingText="What Members Are Saying"
            />
            <Description
              descriptionClass="text-center mb-5"
              descriptionText="We've compiled some helpful reviews for you here."
            />
            <CustomBorder />
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={30}
              centeredSlides={true}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                640: { slidesPerView: 1, spaceBetween: 30 },
                768: { slidesPerView: 2, spaceBetween: 40 },
                1024: { slidesPerView: 3, spaceBetween: 60 },
              }}
              className="mx-auto mt-[50px] h-full">
              {MEMBERS_DATA.map((Obj, index) => (
                <SwiperSlide key={index} className="transition-all duration-500">
                  <div className="flex flex-col justify-between w-full max-w-[437px] mx-auto h-auto sm:h-[260px] md:h-[290px] lg:h-[320px] xl:h-[260px]">
                    <div>
                      <div className="mb-6">
                        <img className="pointer-events-none" src={memberIcon} alt="member-icon" />
                      </div>
                      <p className="text-white mb-6 text-base leading-[160%]">
                        {Obj.text}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <img className="pointer-events-none" src={Obj.image} alt={Obj.name} />
                      <div className="text-left">
                        <div className="font-medium text-white text-base leading-[160%]">{Obj.name}</div>
                        <div className="text-sm text-white/70 leading-[160%]">{Obj.role}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;