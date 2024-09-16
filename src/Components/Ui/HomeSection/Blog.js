import React from "react";
import Slider from "react-slick";
import { blogData } from "../../Common/DamyData/Data";
// import BlogCard from "../../Common/Cards/BlogCard";
// import BlogC from "../../Common/Cards/BlogC";
import SectionHeader from "../../Common/Wrapper/SectionHeader";
import BlogCard from "../../Common/Cards/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
const Blog = () => {
  return (
    <>
      <div className="block my-[60px] mx-auto">
        <SectionHeader
          title="recent news"
          subTitle="Write your blog with AI"
          mainTag="Features"
          className=" "
        />
        {/* <div className="mt-[78px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogData?.map((e, i) => {
            return <BlogCard key={i} data={e} />;
          })}
        </div> */}


        <Swiper
          className="custom-swiper w-[90vw] h-[650px] sm:h-[700px] md:h-[600px] lg:h-[750px]  mt-8 mb-[16px]  border-[#fff]"
          modules={[Pagination, Scrollbar, Autoplay]}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          // scrollbar={{ draggable: false }}
          slidesPerView="auto"
          spaceBetween={6}
          // centeredSlides={true} // add this line to center the active slide
          // slideVisibleClass="swiper-slide-visible"
          // spaceBetween={50}
          autoplay
          breakpoints={{
            250: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            540: {
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
          <div className="swipper-class">
          {blogData?.map((e, i) => {
            return (
              <SwiperSlide className="">
                {/* <BlogCard key={i} data={e} /> */}
                <div className="flex flex-col">
                  <BlogCard key={i} data={e} />
                </div>
              </SwiperSlide>
            );
          })}
          </div>
          {/* <div class="blog swiper-pagination swiper-pagination-lock swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span></div> */}
        </Swiper>
      </div>
    </>
  );
};

export default Blog;
