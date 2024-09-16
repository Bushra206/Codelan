import React, { useState } from "react";
// import Slider from "react-slick";
import { PiStarFourFill } from "react-icons/pi";
import { Switch } from "antd";
import gradientBg from "../../../../assets/gradientbg.png";
import {
  pricingData,
  pricingDataMonthly,
  pricingDataYearly,
} from "../../../Common/DamyData/Data";
import PricingCard from "../../../Common/Cards/PricingCard";
// import PricingC from "../../../Common/Cards/PricingC";
import SectionHeader from "../../../Common/Wrapper/SectionHeader";
import MobilePricing from "./MobilePricing";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const onChange = (checked) => {
    setIsMonthly(checked);
  };

  return (
    <>
      <div className=" mx-auto " id="pricing">
        <SectionHeader
          title="choose your plan"
          subTitle="Make a strategic decision for your "
          mainTag="Business"
        />

        <div className="flex justify-center items-center gap-2 mt-[62px] mb-5">
          <p
            className={`text-xl font-medium leading-[24.2px] ${
              isMonthly ? "text-white" : "text-gray-500"
            }`}
          >
            Monthly
          </p>
          <Switch defaultChecked={isMonthly} onChange={onChange} />
          <p
            className={`text-xl font-medium leading-[24.2px] ${
              !isMonthly ? "text-white" : "text-gray-500"
            }`}
          >
            Yearly
          </p>
        </div>

        {/* <div className="flex justify-center items-center">
        {isMonthly? (<div className=" w-[100vw] grid grid-cols-1 md:grid-cols-2   md:gap-2 lg:w-[] lg:grid-cols-4 lg:gap-[10px] space-y-2 mx-auto">
        {pricingDataMonthly.map((e,i)=>{
        return<PricingCard key={i} data={e} className=""/>
         })}
        </div>)
      : (<div className="grid grid-cols-1 md:grid-cols-2 md:gap-2  lg:grid-cols-4 lg:gap-3 mx-auto">
        {pricingDataYearly.map((e,i)=>{
          return<PricingCard key={i} data={e} className=" "/>
        })}
      </div>)
    }
     </div> */}

        <Swiper
          className="custom-swiper w-[95vw] h-[580px] sm:h-[700px] md:h-[650px] lg:h-[700px] xl:h-[600px] mx-auto"
          modules={[Pagination, Scrollbar, Autoplay]}
          pagination={{ clickable: true, type: "bullets" }}
          // scrollbar={{ draggable: false }}
          // spaceBetween={50}
          autoplay
          breakpoints={{
            250: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            720: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            960: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {/* <div className="mt-[78px] "> */}
          {/* {blogData?.map((e, i) => {
            return (
              <SwiperSlide className="">
                <div className="flex flex-col">
                  <BlogCard key={i} data={e} />
                </div>
              </SwiperSlide>
            );
          })} */}
          {isMonthly ? (
            <div>
              {pricingDataMonthly.map((e, i) => {
                return (
                  <SwiperSlide className="">
                    {/* <BlogCard key={i} data={e} /> */}
                    <div className="flex flex-col">
                      <PricingCard key={i} data={e} />
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          ) : (
            <div className="">
              {pricingDataYearly.map((e, i) => {
                return (
                  <SwiperSlide className="">
                    {/* <BlogCard key={i} data={e} /> */}
                    <div className="flex flex-col">
                      <PricingCard key={i} data={e} />
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          )}
          {/*
<div class="pricing swiper-pagination swiper-pagination-lock swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span></div> */}
          <div className="swiper-pagination swiper-pagination-lock swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
        </Swiper>
      </div>
    </>
  );
};

export default Pricing;
