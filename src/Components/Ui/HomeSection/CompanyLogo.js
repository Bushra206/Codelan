import React from "react";
import img1 from "../../../assets/companyImage/1.png";
import img2 from "../../../assets/companyImage/2.png";
import img3 from "../../../assets/companyImage/3.png";
import img4 from "../../../assets/companyImage/4.png";
import img5 from "../../../assets/companyImage/5.png";
import img6 from "../../../assets/companyImage/6.png";
import SectionWrapper from "../../Common/Wrapper/SectionWrapper";
const CompanyLogo = () => {
  return (
    <SectionWrapper>
      <p className="text-[17px] lg:text-[22px] font-medium leading-[20px] lg:leading-[33px] text-center mt-[100px] lg:mt-[550px] px-5">
        Used Daily More Than 200 Small And Medium Companies
      </p>
      <div className="w-[380px] lg:w-[1560px] mx-auto grid grid-cols-3 lg:grid-cols-6 py-[30px] lg:py-[40px] items-center justify-items-center gap-[30px] lg:gap-[130px] mt-[35px] px-5">
        <img src={img1} alt="" className="w-[100px] lg:w-[145px]" />
        <img src={img2} alt="" className="w-[100px] lg:w-[145px]" />
        <img src={img3} alt="" className="w-[100px] lg:w-[145px]" />
        <img src={img4} alt="" className="w-[100px] lg:w-[145px]" />
        <img src={img5} alt="" className="w-[100px] lg:w-[145px]" />
        <img src={img6} alt="" className="w-[100px] lg:w-[145px]" />
      </div>
    </SectionWrapper>
  );
};

export default CompanyLogo;
