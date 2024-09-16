import React, { useState } from "react";
import facebookPost from "../../../assets/Facebook.png";
import SectionHeader from "../../Common/Wrapper/SectionHeader";
import linkedinPost from "../../../assets/linkedin.png";
import twitterPost from "../../../assets/twitter.png";
import pinterestPost from "../../../assets/pinterest.png";
import Button from "../../Common/Buttons/Button";
import SectionWrapper from "../../Common/Wrapper/SectionWrapper";

const Automation = () => {
  const [activeTab, setActiveTab] = useState("Facebook");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <SectionWrapper>
      <div
        className="flex lg:flex-row flex-col justify-center items-center gap-[70px] lg:gap-[148px] mt-[100px] lg:mt-[200px]"
        id="automation">
        <div>
          <SectionHeader
            title="AI automation"
            subTitle=" Create your social media post With AI"
            mainTag="Automation"
          />

          <p className="text-[14px] lg:text-[18px] font-normal my-6 w-[370px] lg:mx-0 mx-auto text-center lg:text-left lg:w-[620px]">
          Leverage advanced AI to craft your social media content and post it at your convenience.
          </p>

          <div className="flex lg:justify-normal justify-center items-center mt-[34px]">
            <Button text="Explore now" />
          </div>
        </div>
        <div
          className="w-[380px] lg:w-[639px] h-[450px] lg:h-[750px] py-[21px] px-[12px] lg:px-[44px] border border-[#FFFFFF26] rounded-[12px]"
          style={{
            background:
              "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
            border: "1px solid #FFFFFF26",
          }}>
          <div className="flex justify-normal items-center gap-[7px] lg:gap-[14px]">
            <div
              className={`w-[86px] h-[35px] border border-[#39393A] ${
                activeTab === "Facebook" ? "bg-[#2244FF]" : "bg-transparent"
              } text-[12px] lg:text-[14px] font-medium rounded-[4px] flex justify-center items-center cursor-pointer`}
              onClick={() => handleTabClick("Facebook")}>
              Facebook
            </div>
            <div
              className={`w-[86px] h-[35px] border border-[#39393A] ${
                activeTab === "Twitter /x" ? "bg-[#2244FF]" : "bg-transparent"
              } text-[12px] lg:text-[14px] font-medium rounded-[4px] flex justify-center items-center cursor-pointer`}
              onClick={() => handleTabClick("Twitter /x")}>
              Twitter /x
            </div>
            <div
              className={`w-[86px] h-[35px] border border-[#39393A] ${
                activeTab === "Linkedin" ? "bg-[#2244FF]" : "bg-transparent"
              } text-[12px] lg:text-[14px] font-medium rounded-[4px] flex justify-center items-center cursor-pointer`}
              onClick={() => handleTabClick("Linkedin")}>
              Linkedin
            </div>
            <div
              className={`w-[86px] h-[35px] border border-[#39393A] ${
                activeTab === "Instagram" ? "bg-[#2244FF]" : "bg-transparent"
              } text-[12px] lg:text-[14px] font-medium rounded-[4px] flex justify-center items-center cursor-pointer`}
              onClick={() => handleTabClick("Instagram")}>
              Instagram
            </div>
            <div
              className={`w-[86px] h-[35px] border border-[#39393A] ${
                activeTab === "Pinterest" ? "bg-[#2244FF]" : "bg-transparent"
              } text-[12px] lg:text-[14px] font-medium rounded-[4px] flex justify-center items-center cursor-pointer`}
              onClick={() => handleTabClick("Pinterest")}>
              Pinterest
            </div>
          </div>

          <div className="mt-[21px]">
            {activeTab === "Facebook" && (
              <div className="mt-[21px] w-[355px] lg:w-[551px] h-[363px]  lg:h-[643px] rounded-[4px]">
                <img
                  src={facebookPost}
                  alt=""
                  className="w-full h-full object-fill rounded-[4px]"
                />
              </div>
            )}
            {activeTab == "Linkedin" && (
              <div className="mt-[21px] w-[355px] lg:w-[551px] h-[363px] lg:h-[643px]  rounded-[4px]">
                <img
                  src={linkedinPost}
                  alt=""
                  className="w-full h-full object-fill rounded-[4px]"
                />
              </div>
            )}
            {activeTab == "Instagram" && (
              <div className="mt-[21px] w-[355px] lg:w-[551px] h-[363px] lg:h-[643px] rounded-[4px]">
                <p>Comming soon...</p>
              </div>
            )}
            {activeTab == "Twitter /x" && (
              <div className="mt-[21px] w-[355px] lg:w-[551px] h-[363px] lg:h-[643px] rounded-[4px] border border-[#FFFFFF26]">
                <img
                  src={twitterPost}
                  alt=""
                  className="w-full h-full object-fill rounded-[4px]"
                />
              </div>
            )}
            {activeTab == "Pinterest" && (
              <div className="mt-[21px] w-[355px] lg:w-[551px] h-[363px] lg:h-[643px] rounded-[4px]">
                <img
                  src={pinterestPost}
                  alt=""
                  className="w-full h-full object-fill rounded-[4px]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Automation;
