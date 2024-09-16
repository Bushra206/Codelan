import React from "react";
import logo from "../../../assets/logo.png";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <div className="bg-[#111111BA] border-t border-[rgb(57,57,58)] mt-[-100px]">
      <footer className="max-w-[380px] lg:max-w-[97vw] mx-auto footer pt-[197px] px-3 lg:px-0 hidden lg:flex flex-col lg:flex-row justify-between items-start">
        <div>
          <div className="flex justify-center mx-auto lg:mx-0 lg:justify-normal items-center gap-1 lg:gap-2">
            <img src={logo} alt="logo" />{" "}
            <h2 className="text-[19px] lg:text-2xl font-bold leading-[29px] text-white">
              CodeLane
              <span className="text-[#396afd]">.</span>
            </h2>
          </div>
          <p className="my-6 lg:my-8 w-[371px] text-[16px] lg:text-xl font-normal lg:text-left text-center">
          Build, Market and Manage Your Online Business with Ease
          </p>
          <div className="lg:block hidden">
            <div className="flex lg:justify-normal items-center gap-4">
              <FaPhone className="text-xl text-[#2244FF]" />
              <div>
                <p className="text-[14px] lg:text-[16px] font-medium">Phone</p>
                <p className="text-[12px] lg:text-[14px] font-medium text-[#A3A4A7] mt-1">
                +44 7537 142826
                </p>
              </div>
            </div>
            <div className="flex justify-normal items-center gap-3 my-4">
              <IoMail className="text-xl text-[#2244FF]" />
              <div>
                <p className="text-[14px] lg:text-[16px] font-medium">Email</p>
                <p className="text-[12px] lg:text-[14px] font-medium text-[#A3A4A7] mt-1">
                ask@codelaneit.com
                </p>
              </div>
            </div>
            <div className="flex justify-normal items-center gap-3">
              <FaLocationDot className="text-xl text-[#2244FF]" />
              <div>
                <p className="text-[14px] lg:text-[16px] font-medium">
                  Address
                </p>
                <p className="text-[12px] lg:text-[14px] font-medium text-[#A3A4A7] mt-1">
                71-75 Shelton Street Covent Garden London WC2H 9JQ UNITED KINGDOM
                </p>
              </div>
            </div>
          </div>

          {/* small device */}
          <div className="mx-auto block lg:hidden">
            <div className="flex justify-center items-start gap-28">
              <div className="flex flex-col justify-center items-center">
                <div className="flex lg:justify-normal items-center gap-2">
                  <FaPhone className="text-[18px] lg:text-xl text-[#2244FF]" />
                  <p className="text-[14px] lg:text-[16px] font-medium">
                    Phone
                  </p>
                </div>
                <p className="text-[12px] lg:text-[14px] font-medium text-[#A3A4A7] mt-1">
                +44 7537 142826
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex lg:justify-normal items-center gap-2">
                  <IoMail className="text-[18px] lg:text-xl text-[#2244FF]" />
                  <p className="text-[14px] lg:text-[16px] font-medium">
                    Email
                  </p>
                </div>
                <p className="text-[12px] lg:text-[14px] font-medium text-[#A3A4A7] mt-1">
                ask@codelaneit.com
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-3">
              <div className="flex lg:justify-normal items-center gap-2">
                <FaLocationDot className="text-[18px] lg:text-xl text-[#2244FF]" />
                <p className="text-[14px] lg:text-[16px] font-medium">
                  Address
                </p>
              </div>
              <p className="text-[12px] lg:text-[14px] font-medium text-[#A3A4A7] mt-1">
              71-75 Shelton Street Covent Garden London WC2H 9JQ UNITED KINGDOM
              </p>
            </div>
            <div className="">
              <div className="mt-12">
                <p className="text-[16px] text-center font-semibold">
                  Platform
                </p>
                <div className="mt-[20px] space-y-6">
                  <p className="text-[14px] text-center font-normal">
                    Why WebFusionX
                  </p>
                  <p className="text-[14px] text-center font-normal">
                    Ecommerce solution
                  </p>
                  <p className="text-[14px] text-center font-normal">
                    AI content generation
                  </p>
                  <p className="text-[14px] text-center font-normal">
                    Integration
                  </p>
                  <p className="text-[14px] text-center font-normal flex justify-center items-center">
                    Services{" "}
                    <span className="text-[12px] font-normal bg-[#2244FF] w-[40px] h-[16px] flex justify-center items-center ml-2 rounded-full">
                      New
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-12">
                <p className="text-[16px] text-center font-semibold">Company</p>
                <div className="mt-[20px] space-y-6">
                  <p className="text-[14px] text-center font-normal">
                    About us
                  </p>
                  <p className="text-[14px] text-center font-normal">
                    Platform
                  </p>
                  <p className="text-[14px] text-center font-normal flex justify-center items-center">
                    Solution
                    <span className="text-[12px] font-normal bg-[#2244FF] w-[43px] h-[20px] flex justify-center items-center ml-2 rounded-full">
                      New
                    </span>
                  </p>
                  <p className="text-[14px] text-center font-normal">
                    Customer
                  </p>
                  <p className="text-[14px] text-center font-normal">Pricing</p>
                </div>
              </div>
              <div className="mt-12">
                <p className="text-[16px] text-center font-semibold">
                  Resources
                </p>
                <div className="mt-[20px] space-y-6">
                  <p className="text-[14px] text-center font-normal">Blog</p>
                  <p className="text-[14px] text-center font-normal">
                    Help center
                  </p>
                  <p className="text-[14px] text-center font-normal">Webinar</p>
                  <p className="text-[14px] text-center font-normal">FAQs</p>
                  <p className="text-[14px] text-center font-normal">Status</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col lg:flex-row lg:justify-between gap-28 items-start">
          <div>
            <p className="text-xl font-semibold">Platform</p>
            <div className="mt-[42px] space-y-10">
              <p className="text-[18px] font-normal">Why WebFusionX</p>
              <p className="text-[18px] font-normal">Ecommerce solution</p>
              <p className="text-[18px] font-normal">AI content generation</p>
              <p className="text-[18px] font-normal">Integration</p>
              <p className="text-[18px] font-normal flex justify-normal items-center">
                Services{" "}
                <span className="text-[12px] font-normal bg-[#2244FF] w-[43px] h-[20px] flex justify-center items-center ml-2 rounded-full">
                  New
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold">Company</p>
            <div className="mt-[42px] space-y-10">
              <p className="text-[18px] font-normal">About us</p>
              <p className="text-[18px] font-normal">Platform</p>
              <p className="text-[18px] font-normal flex justify-normal items-center">
                Solution
                <span className="text-[12px] font-normal bg-[#2244FF] w-[43px] h-[20px] flex justify-center items-center ml-2 rounded-full">
                  New
                </span>
              </p>
              <p className="text-[18px] font-normal">Customer</p>
              <p className="text-[18px] font-normal">Pricing</p>
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold">Resources</p>
            <div className="mt-[42px] space-y-10">
              <p className="text-[18px] font-normal">Blog</p>
              <p className="text-[18px] font-normal">Help center</p>
              <p className="text-[18px] font-normal">Webinar</p>
              <p className="text-[18px] font-normal">FAQs</p>
              <p className="text-[18px] font-normal">Status</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="max-w-[1560px] mx-auto h-[2px] border border-[#39393A] mt-[70px] mb-[40px] lg:block hidden"></div>
      <div className="max-w-[1560px] mx-auto hidden lg:flex flex-row justify-between items-center mb-12 pb-5">
        <p className="text-[14px] font-normal text-nowrap lg:hidden">
          © 2024 Codelane
        </p>
        <div className="text-[#888888] flex justify-normal items-start gap-6 lg:my-0 my-3">
          <p className="text-[14px] font-normal text-nowrap lg:flex hidden">
            © 2024 Codelane
          </p>
          <p className="text-[14px] font-normal text-nowrap">
            Terms of Service
          </p>
          <p className="text-[14px] font-normal text-nowrap">
            Privacy & Cookies policy
          </p>
        </div>
        <div className="flex justify-normal items-start gap-[10px] mt-4 lg:mt-0">
          <FaTwitterSquare className="text-2xl" />
          <RiInstagramFill className="text-2xl" />
          <FaFacebookSquare className="text-2xl" />
        </div>
      </div>
      {/* small device */}
      <MobileFooter />
    </div>
  );
};

export default Footer;
