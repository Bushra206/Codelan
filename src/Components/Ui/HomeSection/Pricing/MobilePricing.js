import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import SectionHeader from "../../../Common/Wrapper/SectionHeader";
import Star from "../../../Common/StarRating/Star";
import { pricingDataMonthly, themeData } from "../../../Common/DamyData/Data";

const MobilePricing = () => {
  return (
    <div className="lg:hidden">
      <div className="mt-[70px]">
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={60}
          grabCursor={true}
          scrollbar={true}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
            },
          }}>
          {/* {pricingDataMonthly?.map((e, i) => {
            return <PricingCard key={i} data={e} />;
          })} */}
          {pricingDataMonthly?.map((e, i) => {
            return (
              <SwiperSlide
                className="w-[361px] lg:w-[661px] h-[465px] lg:h-[692px] border border-[#FFFFFF26] rounded-[10px]"
                style={{
                  background:
                    "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                  border: "1px solid #FFFFFF26",
                }}>
                <div
                  className="w-[340px] h-[569px] rounded-[10px] px-[21px] py-[30px] z-10"
                  style={{
                    background:
                      "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                    border: "1px solid #FFFFFF26",
                  }}>
                  <p
                    className={`text-[18px] font-bold ${
                      e?.label == "Premium"
                        ? "text-[#2244FF]"
                        : "text-[#D7D7D7]"
                    }`}>
                    {e?.label}
                  </p>
                  <p className="text-[42px] font-bold text-[#D7D7D7]">
                    {e?.price}
                  </p>
                  <p className="text-[18px] font-normal text-[#D7D7D7]">
                    {e?.description}
                  </p>

                  {e?.buttonText == "Start free trial" ? (
                    <button className="w-[160px] h-[52px] bg-[#2244FF] rounded-[4px] text-[18px] font-medium mt-[47px] flex justify-center items-center">
                      {e?.buttonText}
                    </button>
                  ) : (
                    <div className="relative w-[160px] h-[52px] rounded-md bg-gradient-to-tr from-[#FFFFFF] to-[#2244FF] p-0.5 shadow-lg  mt-[47px]">
                      <div className="bg-[#16171A] px-[15px]  lg:px-[22px]  py-[8px] lg:py-[11px] rounded-[4px] cursor-pointer flex justify-start items-center">
                        <p className="font-medium text-[18px] text-nowrap text-center">
                          {e?.buttonText}
                        </p>
                      </div>
                    </div>
                  )}

                  <p className="text-[16px] font-bold text-[#D7D7D7] mt-[15px] leading-[28px]">
                    What’s included:
                  </p>

                  <div className="text-[18px] font-bold text-[#EEEEEE] mt-[15px] leading-[34px]">
                    {e?.includedItems.map((item, index) => (
                      <React.Fragment key={index}>
                        {item}
                        {index !== e.includedItems.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MobilePricing;
