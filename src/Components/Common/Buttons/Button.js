import React from "react";

const Button = ({ text }) => {
  return (
    <div
      className={`${
        text == "Setup your email" ? "lg:w-[190px]" : "lg:w-[162px]"
      } w-[120px] h-[40px] lg:h-[52px] bg-[#2244FF] rounded-[4px] text-[14px] lg:text-[18px] font-medium flex justify-center items-center cursor-pointer`}>
      {text}
    </div>
  );
};

export default Button;
