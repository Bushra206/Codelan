// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { FiLock } from "react-icons/fi";
// import Button from "../../Common/Buttons/Button";
// import { AiOutlineRise } from "react-icons/ai";
// import imgSlide from "../../../assets/banner/1slide.png";
// import { CiCloud } from "react-icons/ci";
// import SectionWrapper from "../../Common/Wrapper/SectionWrapper";
// import { bannerData } from "../../Common/DamyData/Data";
// import { useRef } from "react";
// import { BackgroundCircles } from "../../Common/Hero";
// import gradientBg from "../../../assets/gradientbg.png";
// const Banner = () => {
//   const parallaxRef = useRef(null);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//   };
//   return (
//     <SectionWrapper>
//       <div className="hidden lg:block" ref={parallaxRef}>
//         <div className="relative h-[300px] z-20">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-4 lg:gap-y-0 lg:gap-x-12 items-center mt-[100px]">
//             <div>
//               <p className="text-[30px] lg:text-[78px] font-bold leading-[34px] lg:leading-[78px] text-center lg:text-left z-10">
//                 Discover the Future of eCommerce
//               </p>
//               <p className="text-[16px] lg:text-[24px] mt-[12px] lg:mt-[24px] text-[#D7D7D7] pb-[32px] text-center lg:text-left px-2 lg:px-0">
//                 Automate tasks, manage your store efficiently, and free up your
//                 time to focus on what matters most.
//               </p>
//               <div className="flex lg:justify-normal justify-center items-center mt-[32px]">
//                 <Button text="Start for free" />
//               </div>
//             </div>

//             <div className="flex justify-center items-center overflow-hidden">
//               <div
//                 className="absolute -top-[14%] left-[64%] w-[230%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[9%] hidden lg:block rotate-12"
//                 style={{
//                   width: "600px",
//                   background: "#111111",
//                   zIndex: "-1",
//                   opacity: "0.05px",
//                 }}>
//                 <img
//                   src={gradientBg}
//                   alt=""
//                   className="w-full"
//                   style={{ filter: "blur(140px)" }}
//                   height={1800}
//                   width={1440}
//                 />
//               </div>
//               <Slider {...settings} className="w-[380px] lg:w-[800px]">
//                 {bannerData?.map((e, i) => {
//                   return (
//                     <div className="!flex justify-center items-center py-[50px]">
//                       <div
//                         className="border border-[#FFFFFF26] w-[305px] lg:w-[630px] h-[371px] lg:h-[600px] rounded-[10px] relative"
//                         style={{
//                           background:
//                             "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
//                         }}>
//                         <div className="absolute top-[-20px] left-[-39px] lg:left-[-61px]">
//                           <div
//                             className="bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15 w-[200px] lg:w-[317px] h-[40px] lg:h-[62px] rounded-[500px] border border-[#FFFFFF26] text-[12px] lg:text-[18px] font-medium flex justify-center items-center gap-2"
//                             style={{
//                               background:
//                                 "linear-gradient(137.34deg, rgb(99 101 137 / 16%) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
//                             }}>
//                             <FiLock /> {e?.lockUrl}
//                           </div>
//                         </div>
//                         <div className="absolute top-[90px] lg:top-[150px] left-[-20px] lg:left-[-40px]">
//                           <div
//                             className=" bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 w-[48px] lg:w-[88px] h-[38px] lg:h-[77px] rounded-[5px] lg:rounded-[10px] border border-[#FFFFFF26] text-[18px] font-medium flex justify-center items-center gap-2 z-10"
//                             style={{
//                               background:
//                                 "linear-gradient(137.34deg, rgb(99 101 137 / 16%) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
//                             }}>
//                             <AiOutlineRise className=" text-[20px] lg:text-[40px]" />
//                           </div>
//                         </div>
//                         <div className="absolute bottom-[-43px] left-[-20px] lg:left-[-40px]">
//                           <div className="h-[158px] lg:h-[314.69px] w-[95px] lg:w-[184px] rounded-[8px]">
//                             <img
//                               src={e?.cardImage}
//                               alt=""
//                               className="h-full w-full object-fill rounded-[8px]"
//                             />
//                           </div>
//                         </div>
//                         <div className="absolute bottom-[50px] right-[-30px] lg:right-[-60px]">
//                           <div className="w-[129px] h-[51px] lg:w-[229px] lg:h-[71px]">
//                             <img
//                               src={imgSlide}
//                               alt=""
//                               className="h-full object-fill w-full"
//                             />
//                           </div>
//                         </div>
//                         <div className="w-[260px] lg:w-[570px] h-[319px] lg:h-[549px] rounded-[10px] lg:rounded-[16px] mx-auto my-5 z-[-1]">
//                           <img
//                             src={e?.image}
//                             alt=""
//                             className="h-full w-full object-fill rounded-[16px]"
//                           />
//                         </div>
//                         <div className="absolute bottom-[170px] lg:bottom-[280px] right-[-19px] lg:right-[-30px]">
//                           <div
//                             className=" bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 w-[48px] lg:w-[88px] h-[38px] lg:h-[77px] rounded-[5px] lg:rounded-[10px] border border-[#FFFFFF26] text-[18px] font-medium flex justify-center items-center gap-2 z-10"
//                             style={{
//                               background:
//                                 "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
//                             }}>
//                             <CiCloud className="text-[20px] lg:text-[40px]" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </Slider>
//             </div>
//           </div>
//         </div>
//         <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 z-10">
//           <BackgroundCircles />
//         </div>
//       </div>

//       {/* small device */}
//       <div className="lg:hidden grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-4 lg:gap-y-0 lg:gap-x-12 items-center mt-[100px]">
//         <div>
//           <p className="text-[30px] lg:text-[78px] font-bold leading-[34px] lg:leading-[78px] text-center lg:text-left z-10">
//             Discover the Future of eCommerce
//           </p>
//           <p className="text-[16px] lg:text-[24px] mt-[12px] lg:mt-[24px] text-[#D7D7D7] pb-[32px] text-center lg:text-left px-2 lg:px-0">
//             Automate tasks, manage your store efficiently, and free up your time
//             to focus on what matters most.
//           </p>
//           <div className="flex lg:justify-normal justify-center items-center mt-[-5px]">
//             <Button text="Start for free" />
//           </div>
//         </div>

//         <div className="flex justify-center items-center overflow-hidden">
//           <Slider {...settings} className="w-[380px] lg:w-[800px]">
//             {bannerData?.map((e, i) => {
//               return (
//                 <div className="!flex justify-center items-center py-[50px]">
//                   <div
//                     className="border border-[#FFFFFF26] w-[305px] lg:w-[630px] h-[371px] lg:h-[600px] rounded-[10px] relative"
//                     style={{
//                       background:
//                         "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
//                     }}>
//                     <div className="absolute top-[-20px] left-[-39px] lg:left-[-61px]">
//                       <div
//                         className="bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15 w-[200px] lg:w-[317px] h-[40px] lg:h-[62px] rounded-[500px] border border-[#FFFFFF26] text-[12px] lg:text-[18px] font-medium flex justify-center items-center gap-2"
//                         style={{
//                           background:
//                             "linear-gradient(137.34deg, rgb(99 101 137 / 16%) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
//                         }}>
//                         <FiLock /> {e?.lockUrl}
//                       </div>
//                     </div>
//                     <div className="absolute top-[90px] lg:top-[150px] left-[-20px] lg:left-[-40px]">
//                       <div
//                         className=" bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 w-[48px] lg:w-[88px] h-[38px] lg:h-[77px] rounded-[5px] lg:rounded-[10px] border border-[#FFFFFF26] text-[18px] font-medium flex justify-center items-center gap-2 z-10"
//                         style={{
//                           background:
//                             "linear-gradient(137.34deg, rgb(99 101 137 / 16%) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
//                         }}>
//                         <AiOutlineRise className=" text-[20px] lg:text-[40px]" />
//                       </div>
//                     </div>
//                     <div className="absolute bottom-[-43px] left-[-20px] lg:left-[-40px]">
//                       <div className="h-[158px] lg:h-[314.69px] w-[95px] lg:w-[184px] rounded-[8px]">
//                         <img
//                           src={e?.cardImage}
//                           alt=""
//                           className="h-full w-full object-fill rounded-[8px]"
//                         />
//                       </div>
//                     </div>
//                     <div className="absolute bottom-[50px] right-[-30px] lg:right-[-60px]">
//                       <div className="w-[129px] h-[51px] lg:w-[229px] lg:h-[71px]">
//                         <img
//                           src={imgSlide}
//                           alt=""
//                           className="h-full object-fill w-full"
//                         />
//                       </div>
//                     </div>
//                     <div className="w-[260px] lg:w-[570px] h-[319px] lg:h-[549px] rounded-[10px] lg:rounded-[16px] mx-auto my-5 z-[-1]">
//                       <img
//                         src={e?.image}
//                         alt=""
//                         className="h-full w-full object-fill rounded-[16px]"
//                       />
//                     </div>
//                     <div className="absolute bottom-[170px] lg:bottom-[280px] right-[-19px] lg:right-[-30px]">
//                       <div
//                         className=" bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 w-[48px] lg:w-[88px] h-[38px] lg:h-[77px] rounded-[5px] lg:rounded-[10px] border border-[#FFFFFF26] text-[18px] font-medium flex justify-center items-center gap-2 z-10"
//                         style={{
//                           background:
//                             "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
//                         }}>
//                         <CiCloud className="text-[20px] lg:text-[40px]" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </Slider>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// };

// export default Banner;

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiLock } from "react-icons/fi";
import Button from "../../Common/Buttons/Button";
import { AiOutlineRise } from "react-icons/ai";
import imgSlide from "../../../assets/banner/1slide.png";
import { CiCloud } from "react-icons/ci";
import SectionWrapper from "../../Common/Wrapper/SectionWrapper";
import { bannerData } from "../../Common/DamyData/Data";
import { useRef } from "react";
import { BackgroundCircles } from "../../Common/Hero";
import gradientBg from "../../../assets/gradientbg.png";
const Banner = () => {
  const parallaxRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <SectionWrapper>
      <div className="hidden lg:block" ref={parallaxRef}>
        <div className="relative h-[300px] z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-4 lg:gap-y-0 lg:gap-x-12 items-center mt-[100px]">
            <div>
              <p className="text-[30px] lg:text-[78px] font-bold leading-[34px] lg:leading-[78px] text-center lg:text-left z-10">
                Discover the Future of eCommerce
              </p>
              <p className="text-[16px] lg:text-[24px] mt-[12px] lg:mt-[24px] text-[#D7D7D7] pb-[32px] text-center lg:text-left px-2 lg:px-0">
              Streamline your operations, optimize store management, and reserve your time for your core passions.
              </p>
              <div className="flex lg:justify-normal justify-center items-center mt-[32px]">
                <Button text="Start for free" />
              </div>
            </div>

            <div className="flex justify-center items-center overflow-hidden">
              <div
                className="absolute -top-[14%] left-[64%] w-[230%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[9%] hidden lg:block rotate-12"
                style={{
                  width: "600px",
                  background: "#111111",
                  zIndex: "-1",
                  opacity: "0.05px",
                }}>
                <img
                  src={gradientBg}
                  alt=""
                  className="w-full"
                  style={{ filter: "blur(140px)" }}
                  height={1800}
                  width={1440}
                />
              </div>
              <Slider {...settings} className="w-[380px] lg:w-[800px]">
                {bannerData?.map((e, i) => {
                  return (
                    <div className="!flex justify-center items-center py-[50px]">
                      <div
                        className="border border-[#FFFFFF26] w-[305px] lg:w-[630px] h-[371px] lg:h-[600px] rounded-[10px] relative"
                        style={{
                          background:
                            "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                        }}>
                        <div className="absolute top-[-20px] left-[-39px] lg:left-[-61px]">
                          <div
                            className="bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15 w-[200px] lg:w-[317px] h-[40px] lg:h-[62px] rounded-[500px] border border-[#FFFFFF26] text-[12px] lg:text-[18px] font-medium flex justify-center items-center gap-2"
                            style={{
                              background:
                                "linear-gradient(137.34deg, rgb(99 101 137 / 16%) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                            }}>
                            <FiLock /> {e?.lockUrl}
                          </div>
                        </div>
                        <div className="absolute top-[90px] lg:top-[150px] left-[-20px] lg:left-[-40px]">
                          <div
                            className=" bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 w-[48px] lg:w-[88px] h-[38px] lg:h-[77px] rounded-[5px] lg:rounded-[10px] border border-[#FFFFFF26] text-[18px] font-medium flex justify-center items-center gap-2 z-10"
                            style={{
                              background:
                                "linear-gradient(137.34deg, rgb(99 101 137 / 16%) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                            }}>
                            <AiOutlineRise className=" text-[20px] lg:text-[40px]" />
                          </div>
                        </div>
                        <div className="absolute bottom-[-43px] left-[-20px] lg:left-[-40px]">
                          <div className="h-[158px] lg:h-[314.69px] w-[95px] lg:w-[184px] rounded-[8px]">
                            <img
                              src={e?.cardImage}
                              alt=""
                              className="h-full w-full object-fill rounded-[8px]"
                            />
                          </div>
                        </div>
                        <div className="absolute bottom-[50px] right-[-30px] lg:right-[-60px]">
                          <div className="w-[129px] h-[51px] lg:w-[229px] lg:h-[71px]">
                            <img
                              src={imgSlide}
                              alt=""
                              className="h-full object-fill w-full"
                            />
                          </div>
                        </div>
                        <div className="w-[260px] lg:w-[570px] h-[319px] lg:h-[549px] rounded-[10px] lg:rounded-[16px] mx-auto my-5 z-[-1]">
                          <img
                            src={e?.image}
                            alt=""
                            className="h-full w-full object-fill rounded-[16px]"
                          />
                        </div>
                        <div className="absolute bottom-[170px] lg:bottom-[280px] right-[-19px] lg:right-[-30px]">
                          <div
                            className=" bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 w-[48px] lg:w-[88px] h-[38px] lg:h-[77px] rounded-[5px] lg:rounded-[10px] border border-[#FFFFFF26] text-[18px] font-medium flex justify-center items-center gap-2 z-10"
                            style={{
                              background:
                                "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                            }}>
                            <CiCloud className="text-[20px] lg:text-[40px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 z-10">
          <BackgroundCircles />
        </div>
      </div>

      {/* small device */}
      <div className="lg:hidden grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-4 lg:gap-y-0 lg:gap-x-12 items-center mt-[100px]">
        <div>
          <p className="text-[30px] lg:text-[78px] font-bold leading-[34px] lg:leading-[78px] text-center lg:text-left z-10">
            Discover the Future of eCommerce
          </p>
          <p className="text-[16px] lg:text-[24px] mt-[12px] lg:mt-[24px] text-[#D7D7D7] pb-[32px] text-center lg:text-left px-2 lg:px-0">
            Automate tasks, manage your store efficiently, and free up your time
            to focus on what matters most.
          </p>
          <div className="flex lg:justify-normal justify-center items-center mt-[-5px]">
            <Button text="Start for free" />
          </div>
        </div>

        <div className="flex justify-center items-center overflow-hidden">
          <Slider {...settings} className="w-[380px] lg:w-[800px]">
            {bannerData?.map((e, i) => {
              return (
                <div className="!flex justify-center items-center py-[50px]">
                  <div
                    className="border border-[#FFFFFF26] w-[305px] lg:w-[630px] h-[315px] lg:h-[600px] rounded-[10px] relative"
                    style={{
                      background:
                        "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                    }}>
                    <div className="absolute top-[-20px] left-[-39px] lg:left-[-61px]">
                      <div
                        className="bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15 w-[200px] lg:w-[317px] h-[40px] lg:h-[62px] rounded-[500px] border border-[#FFFFFF26] text-[12px] lg:text-[18px] font-medium flex justify-center items-center gap-2"
                        style={{
                          background:
                            "linear-gradient(137.34deg, rgb(99 101 137 / 16%) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                        }}>
                        <FiLock /> {e?.lockUrl}
                      </div>
                    </div>
                    <div className="absolute top-[90px] lg:top-[150px] left-[-20px] lg:left-[-40px]">
                      <div
                        className=" bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 w-[48px] lg:w-[88px] h-[38px] lg:h-[77px] rounded-[5px] lg:rounded-[10px] border border-[#FFFFFF26] text-[18px] font-medium flex justify-center items-center gap-2 z-10"
                        style={{
                          background:
                            "linear-gradient(137.34deg, rgb(99 101 137 / 16%) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                        }}>
                        <AiOutlineRise className=" text-[20px] lg:text-[40px]" />
                      </div>
                    </div>
                    <div className="absolute bottom-[-43px] left-[-20px] lg:left-[-40px]">
                      <div className="h-[158px] lg:h-[314.69px] w-[95px] lg:w-[184px] rounded-[8px]">
                        <img
                          src={e?.cardImage}
                          alt=""
                          className="h-full w-full object-fill rounded-[8px]"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-[50px] right-[-30px] lg:right-[-60px]">
                      <div className="w-[129px] h-[51px] lg:w-[229px] lg:h-[71px]">
                        <img
                          src={imgSlide}
                          alt=""
                          className="h-full object-fill w-full"
                        />
                      </div>
                    </div>
                    <div className="w-[260px] lg:w-[570px] h-[270px] lg:h-[549px] rounded-[10px] lg:rounded-[16px] mx-auto my-5 z-[-1]">
                      <img
                        src={e?.image}
                        alt=""
                        className="h-full w-full object-fill rounded-[16px]"
                      />
                    </div>
                    <div className="absolute bottom-[170px] lg:bottom-[280px] right-[-19px] lg:right-[-30px]">
                      <div
                        className=" bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 w-[48px] lg:w-[88px] h-[38px] lg:h-[77px] rounded-[5px] lg:rounded-[10px] border border-[#FFFFFF26] text-[18px] font-medium flex justify-center items-center gap-2 z-10"
                        style={{
                          background:
                            "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                        }}>
                        <CiCloud className="text-[20px] lg:text-[40px]" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Banner;
