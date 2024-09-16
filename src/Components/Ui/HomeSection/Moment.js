import React from "react";
import calenderWatch from "../../../assets/calender-watch.png";
import gradientBg from "../../../assets/gradientbg.png";
import imgMoment from "../../../assets/moments/moment.png";
import SectionWrapper from "../../Common/Wrapper/SectionWrapper";
import SectionHeader from "../../Common/Wrapper/SectionHeader";

const Moment = () => {
  return (
    <SectionWrapper>
      <div className="flex lg:flex-row flex-col-reverse justify-center items-start gap-0 lg:gap-[100px] mt-[100px] lg:mt-[200px]">
        <div className="w-[370px] lg:w-[763px] h-[341px] lg:h-[646px] relative">
          <img src={imgMoment} alt="" />
          <div
            className="hidden lg:block absolute -top-[54%] left-[60%] w-[70%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:top-[8%] z-[-1]"
            style={{
              width: "600px",
              background: "#111111",
              opacity: "0.05px",
            }}>
            <img
              src={gradientBg}
              alt=""
              className="w-full"
              style={{ filter: "blur(140px)" }}
              height={500}
              width={740}
            />
          </div>
          <div className="absolute top-[-10px] right-[-10px]">
            <div
              className="w-[80px] lg:w-[142px] h-[80px] lg:h-[142px] border border-[#FFFFFF26] rounded-[10px] flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                border: "1px solid #FFFFFF26",
              }}>
              <img src={calenderWatch} alt="" />
            </div>
          </div>
        </div>
        <div className="w-[380px] lg:w-[638px] h-[400px] lg:h-[560px] mt-[50px] lg:mt-[10px]">
          <div>
            <SectionHeader
              title="Social media integration"
              subTitle="Integrate & schedule your social media post within a short
                "
              mainTag="Moment"
            />
            <p className="text-[16px] lg:text-left text-center lg:text-[18px] font-normal my-6 w-[375px] lg:w-[585px]">
            Post more, work less with WebFusionX. Schedule posts ahead of time and keep your feeds vibrant across all your social platforms, including Instagram, Pinterest, TikTok, Facebook,  YouTube, LinkedIn, and X (Twitter).


            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Moment;
