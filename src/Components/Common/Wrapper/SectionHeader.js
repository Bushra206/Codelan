import React from "react";
import { PiStarFourFill } from "react-icons/pi";

const SectionHeader = ({ title, subTitle, mainTag }) => {
  return (
    <>
      {mainTag == "Hassle" ||
      mainTag == "Themes" ||
      mainTag == "Features" ||
      mainTag == "Business" ||
      mainTag == "FAQs" ? (
        <div
          className={`w-[320px] ${
            mainTag == "Themes" ? "lg:w-[1130px]" : "lg:w-[960px]"
          } mx-auto mt-[100px] lg:mt-[150px]`}>
          <div className="flex justify-center items-start gap-1">
            <p
              className={`text-[16px] lg:text-[18px] ${
                mainTag == "FAQs" ? "text-center" : " text-normal"
              } font-bold text-[#888888] tracking-[0.25rem] uppercase`}>
              {title}
            </p>
            <PiStarFourFill className="text-xl text-[#888888] -rotate-12 mt-1" />
          </div>
          <p
            className={`text-[30px] ${
              mainTag == "Themes" ? "lg:text-[56px]" : "lg:text-[64px]"
            } font-bold leading-[40px] lg:leading-[76.8px] text-center mt-[12px]`}>
            {subTitle}
            {mainTag == "Themes" ||
            mainTag == "Features" ||
            mainTag == "FAQs" ? (
              <br />
            ) : (
              ""
            )}
            <span
              className="text-[#2244FF]"
              style={{ fontFamily: "'Kaushan Script', cursive" }}>
              {mainTag}
            </span>
          </p>
        </div>
      ) : (
        <div className="w-[320px] lg:w-[638px] mx-auto lg:mx-0">
          <div className="flex justify-center lg:justify-start items-start gap-1">
            <p className="lg:text-start text-center text-[16px] lg:text-[18px] font-bold text-[#888888] tracking-[3px] lg:tracking-[0.25rem] uppercase text-nowrap">
              {title}
            </p>
            <PiStarFourFill className="text-xl text-[#888888] -rotate-12 mt-0 lg:mt-1" />
          </div>
          <p className="text-[30px] text-center lg:text-start lg:text-[64px] font-bold leading-[40px] lg:leading-[76.8px] mt-[12px]">
            {subTitle}
            <br />
            <span
              className="text-[#2244FF]"
              style={{ fontFamily: "'Kaushan Script', cursive" }}>
              {mainTag}
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default SectionHeader;
