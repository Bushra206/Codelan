import React from "react";
import businessEmailImage from "../../../assets/businessEmailImage.png";
import SectionHeader from "../../Common/Wrapper/SectionHeader";
import SectionWrapper from "../../Common/Wrapper/SectionWrapper";
import Button from "../../Common/Buttons/Button";

const Email = () => {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[70px] lg:gap-[150px] mt-[100px] lg:mt-[200px]">
        <div className="lg:block hidden">
          <img src={businessEmailImage} alt="" />
        </div>

        <div className="">
          <SectionHeader
            title="Business email"
            subTitle="Establish your business"
            mainTag="Email"
          />
          <p className="my-[24px] text-[18px] font-normal lg:w-[750px] w-[360px] mx-auto lg:mx-0 text-center lg:text-start">
          Enjoy simple and secure web-based email hosting with a fast and user-friendly interface.
          </p>

          <div className="flex lg:justify-normal justify-center items-center mt-[34px]">
            <Button text="Setup your email" />
          </div>
        </div>
        <div className="block lg:hidden">
          <img src={businessEmailImage} alt="" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Email;
