import React from "react";

const FeatureNotifyPart = () => {
  return (
    <div
      className="max-w-[360px] lg:max-w-[1560px] h-[504px] mx-auto bg-[#2244FF] rounded-[8px] px-[134px] py-[50px] lg:py-[80px]  relative z-10 flex lg:flex-row flex-col justify-normal items-center gap-[5px] lg:gap-[188px] mt-[100px] lg:mt-[200px]"
      id="contact">
      <p className="text-[25px] lg:text-[48px] font-bold leading-[35px] lg:text-left text-left lg:leading-[76.8px] lg:px-0 px-2 w-[300px] lg:w-[547px] h-[125px] lg:h-[308px]">
      Get found online with our expert SEO tips!
      </p>

      <div className="w-[300px] lg:w-[556px] h-[211px]">
        <p className="text-[16px] lg:text-[22px] lg:text-left text-normal font-normal leading-[25px] px-3 lg:px-0">
        Boost your visibility and attract more visitors with these easy-to-implement strategies.
        </p>
        <div className="flex lg:flex-row flex-col justify-normal items-center gap-[12px] mt-[40px]">
          <input
            className="w-[280px] lg:w-[348px] h-[52px] lg:h-[72px] bg-white rounded-[8px] px-8 text-black"
            type="text"
            placeholder="Enter Your work email"
          />
          <div className="bg-[#2244FF] w-[145px] mt-2 lg:mt-0 lg:w-[176px] h-[48px] lg:h-[72px] border border-[#EEEEEE] rounded-[8px] text-[15px] lg:text-[18px] font-semibold flex justify-center items-center">
            Get started
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureNotifyPart;
