import React from "react";
import logo from "../../../assets/logo.png";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";

const MobileFooter = () => {
  return (
    <div className="lg:hidden">
      <footer className="max-w-[90vw] md:max-w-[89vw] mx-auto footer pt-[197px] px-3 flex flex-col justify-between items-center">
        <div>
          <div className="flex mx-auto justify-normal items-center gap-1">
            <img src={logo} alt="logo" />
            <h2 className="text-[19px] font-bold leading-[29px] text-white">
              CodeLane
              <span className="text-[#396afd]">.</span>
            </h2>
          </div>
          <p className="pl-6 my-6 w-[371px] mx-auto text-[16px] font-normal text-center">
            Something about codelane ecommerce solution.
          </p>
          <div className="grid grid-cols-2 gap-x-[2px] sm:gap-x-[70px] lg:gap-x-[100px] gap-y-4">
            {" "}
            <div className="pl-4">
              <div className="flex items-center gap-4">
                <FaPhone className="text-xl text-[#2244FF]" />
                <div>
                  <p className="text-[15px] font-medium">Phone</p>
                  <p className="text-[13px] font-medium text-[#A3A4A7] mt-1">
                    (088) 444-5555
                  </p>
                </div>
              </div>
              <div className="flex justify-normal items-center gap-3 my-4">
                <IoMail className="text-xl text-[#2244FF]" />
                <div>
                  <p className="text-[15px] font-medium">Email</p>
                  <p className="text-[12px] font-medium text-[#A3A4A7] mt-1">
                    support@codellane.com
                  </p>
                </div>
              </div>
              <div className="flex justify-normal items-center gap-3">
                <FaLocationDot className="text-xl text-[#2244FF]" />
                <div className="pl-2">
                  <p className="text-[15px] font-medium">Address</p>
                  <p className="text-[12px] font-medium text-[#A3A4A7] mt-1">
                    123 road, B green road. Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
            <div className="pl-6">
              <p className="text-[15px] font-semibold ">Platform</p>
              <div className="mt-[17px] space-y-4 ">
                <p className="text-[14px] font-normal">Why CodeLane</p>
                <p className="text-[14px] font-normal">Ecommerce solution</p>
                <p className="text-[14px] font-normal">AI content generation</p>
                <p className="text-[14px] font-normal">Integration</p>
                <p className="text-[14px] font-normal flex justify-normal items-center">
                  Services{" "}
                  <span className="text-[11px] font-normal bg-[#2244FF] w-[43px] h-[18px] flex justify-center items-center ml-2 rounded-full">
                    New
                  </span>
                </p>
              </div>
            </div>
            <div className="ml-10 mt-5 ">
              <p className="text-[15px] font-semibold">Company</p>
              <div className="mt-[17px] space-y-4">
                <p className="text-[14px] font-normal">About us</p>
                <p className="text-[14px] font-normal">Platform</p>
                <p className="text-[14px] font-normal flex justify-normal items-center">
                  Solution
                  <span className="text-[11px] font-normal bg-[#2244FF] w-[43px] h-[17px] flex justify-center items-center ml-2 rounded-full">
                    New
                  </span>
                </p>
                <p className="text-[14px] font-normal">Customer</p>
                <p className="text-[14px] font-normal">Pricing</p>
              </div>
            </div>
            <div className="mt-5 pl-6">
              <p className="text-[15px] font-semibold">Resources</p>
              <div className="mt-[17px] space-y-4">
                <p className="text-[14px] font-normal">Blog</p>
                <p className="text-[14px] font-normal">Help center</p>
                <p className="text-[14px] font-normal">Webinar</p>
                <p className="text-[14px] font-normal">FAQs</p>
                <p className="text-[14px] font-normal">Status</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="max-w-[370px] mx-auto h-[2px] border border-[#39393A] mt-[70px] mb-[40px]"></div>
      <div className="max-w-[370px] mx-auto flex flex-col justify-between items-center mb-12 pb-5">
        <p className="text-[14px] font-normal text-nowrap">© 2024 Codelane</p>
        <div className="text-[#888888] flex justify-normal items-start gap-6 my-3">
          <p className="text-[14px] font-normal text-nowrap">
            Terms of Service
          </p>
          <p className="text-[14px] font-normal text-nowrap">
            Privacy & Cookies policy
          </p>
        </div>
        <div className="flex justify-normal items-start gap-[10px] mt-4">
          <FaTwitterSquare className="text-2xl" />
          <RiInstagramFill className="text-2xl" />
          <FaFacebookSquare className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
