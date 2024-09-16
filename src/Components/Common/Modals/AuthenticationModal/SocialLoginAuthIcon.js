import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLoginAuthIcon = () => {
  return (
    <div>
      <button className="w-full  h-[34px] placeholder:text-[13px] rounded-[4px] text-[14px] font-medium border border-[#39393A] bg-[#405992] flex justify-center items-center gap-2 mt-2">
        <FaFacebook className="text-2xl text-[#FFFFFF]" /> Register with
        Facebook
      </button>
      <button className="w-full  h-[34px] placeholder:text-[13px] rounded-[4px] text-[14px] font-medium border border-[#39393A] bg-[#111111] my-3 flex justify-center items-center gap-2">
        <FaXTwitter className="text-2xl text-[#FFFFFF]" /> Register with X
      </button>
      <button className="w-full  h-[34px] placeholder:text-[13px] rounded-[4px] text-[14px] font-medium border border-[#39393A] bg-[#D95040] flex justify-center items-center gap-2">
        <FaGoogle className="text-2xl text-[#FFFFFF]" /> Register with Google
      </button>
    </div>
  );
};

export default SocialLoginAuthIcon;
