// import React from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/scrollbar";
// import "swiper/css/navigation";
// import "swiper/css";
// import "swiper/css/pagination";

// import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
// import SectionHeader from "../../Common/Wrapper/SectionHeader";
// import Star from "../../Common/StarRating/Star";
// import { themeData } from "../../Common/DamyData/Data";

// const Themes = () => {
//   return (
//     <div className="">
//       <SectionHeader
//         title="Themes collection"
//         subTitle="Decorate your store with unlimited"
//         mainTag="Themes"
//       />
//       <div className="mt-[70px]">
//         <Swiper
//           slidesPerView={2}
//           centeredSlides={true}
//           spaceBetween={60}
//           grabCursor={true}
//           scrollbar={true}
//           modules={[Keyboard, Scrollbar, Navigation, Pagination]}
//           className="mySwiper"
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//               spaceBetween: 30,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//           }}>
//           {themeData?.map((e, i) => {
//             return (
//               <SwiperSlide
//                 className="w-[361px] lg:w-[661px] h-[465px] lg:h-[692px] border border-[#FFFFFF26] rounded-[10px]"
//                 style={{
//                   background:
//                     "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
//                   border: "1px solid #FFFFFF26",
//                 }}>
//                 <div className="w-[361px] lg:w-[661px] h-[329px] lg:h-[529px] rounded-t-md">
//                   <img
//                     src={e?.image}
//                     alt=""
//                     className="w-full h-full object-contain rounded-t-md"
//                   />
//                 </div>
//                 <div className="p-[16px] lg:p-[20px] px-[25px] lg:px-[30px]">
//                   <div className="flex justify-between items-center">
//                     <p className="text-[22px] lg:text-[24px] font-medium">
//                       {e?.title}
//                     </p>
//                     <p className="text-[18px] lg:text-[20px] font-normal">
//                       Install
//                     </p>
//                   </div>
//                   <div className="mt-2 lg:mt-4">
//                     <Star ratingPoint={e?.rating} />
//                     <p className="text-[18px] lg:text-[18px] font-normal text-[#888888] text-left mt-1.5">
//                       {e?.activeInstallations}
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Themes;

// import React from "react";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import SectionHeader from "../../Common/Wrapper/SectionHeader";
// import Star from "../../Common/StarRating/Star";
// import { themeData } from "../../Common/DamyData/Data";

// const Themes = () => {
//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     speed: 500,
//   };
//   return (
//     <div className="">
//       <SectionHeader
//         title="Themes collection"
//         subTitle="Decorate your store with unlimited"
//         mainTag="Themes"
//       />
//       <div className="mt-[70px]">
//         <Slider {...settings}>
//           {themeData?.map((e, i) => {
//             return (
//               <div>
//                 <div
//                   className="w-[361px] lg:w-[580px] h-[465px] lg:h-[642px] border border-[#FFFFFF26] rounded-[10px]"
//                   style={{
//                     background:
//                       "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
//                     border: "1px solid #FFFFFF26",
//                   }}>
//                   {" "}
//                   <div className="w-[361px] lg:w-[580px] h-[329px] lg:h-[434px] rounded-t-md">
//                     <img
//                       src={e?.image}
//                       alt=""
//                       className="w-full h-full object-contain rounded-t-md"
//                     />
//                   </div>
//                   <div className="p-[16px] lg:p-[20px] px-[25px] lg:px-[30px]">
//                     <div className="flex justify-between items-center">
//                       <p className="text-[22px] lg:text-[24px] font-medium">
//                         {e?.title}
//                       </p>
//                       <p className="text-[18px] lg:text-[20px] font-normal">
//                         Install
//                       </p>
//                     </div>
//                     <div className="mt-2 lg:mt-4">
//                       <Star ratingPoint={e?.rating} />
//                       <p className="text-[18px] lg:text-[18px] font-normal text-[#888888] text-left mt-1.5">
//                         {e?.activeInstallations}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Themes;

import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionHeader from "../../Common/Wrapper/SectionHeader";
import Star from "../../Common/StarRating/Star";
import { themeData } from "../../Common/DamyData/Data";

const Themes = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 7000,
  //   autoplaySpeed: 7000,
  //   cssEase: "linear",
  // };
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-[80vw]  lg:w-[1560px] mx-auto">
      <SectionHeader
        title="Themes collection"
        subTitle="Decorate your store with unlimited"
        mainTag="Themes"
      />
      <div className="theme-slider mt-[70px] mb-[0px] w-[80vw]  lg:w-[1560px] mx-auto lg:pl-8 h-[330px] lg:h-[600px]">
        <Slider {...settings}>
          {themeData?.map((e, i) => {
            return (
              <div className="ml-[50px]">
                <div
                  // className="w-[361px] lg:w-[580px] h-[465px] lg:h-[642px] border border-[#FFFFFF26] rounded-[10px]"
                  className="w-[100%] lg:w-[100%]  border border-[#FFFFFF26] rounded-[10px] "
                  style={{
                    background:
                      "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                    border: "1px solid #FFFFFF26",
                  }}
                >
                  {" "}
                  {/* <div className="w-[361px] lg:w-[580px] h-[329px] lg:h-[434px] rounded-t-md"> */}
                  <div className="w-[100%] lg:w-[100%] h-[220px] lg:h-[434px] rounded-t-md">
                    <img
                      src={e?.image}
                      alt=""
                      className="w-[100%] h-[100%] object-contain rounded-t-md"
                    />
                  </div>
                  <div className="p-[16px] lg:p-[20px] px-[25px] lg:px-[30px]">
                    <div className="flex justify-between items-center">
                      <p className="text-[22px] lg:text-[24px] font-medium">
                        {e?.title}
                      </p>
                      <p className="text-[18px] lg:text-[20px] font-normal">
                        Install
                      </p>
                    </div>
                    <div className="mt-2 lg:mt-4">
                      <Star ratingPoint={e?.rating} />
                      <p className="text-[18px] lg:text-[18px] font-normal text-[#888888] text-left mt-1.5">
                        {e?.activeInstallations}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Themes;
