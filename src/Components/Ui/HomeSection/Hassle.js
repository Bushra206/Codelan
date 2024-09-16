import React, { useState } from "react";
import hassleBg from "../../../assets/hasslebg.png";
import SectionHeader from "../../Common/Wrapper/SectionHeader";
import SectionWrapper from "../../Common/Wrapper/SectionWrapper";
import gradientBg from "../../../assets/gradientbg.png";
const Hassle = () => {
  const [expandedItem, setExpandedItem] = useState(0);

  const handleAccordionClick = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  return (
    <SectionWrapper>
      <SectionHeader
        title="Core feature"
        subTitle="Kickstart Your First Store with Zero "
        mainTag="Hassle"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-normal items-center mt-[60px]">
        <div className="w-[360px] lg:w-[502px] space-y-7">
          <div
            className={`collapse py-0 border-0 border-l-2 border-[#2244FF] rounded-none ${
              expandedItem === 0 ? "open" : ""
            }`}
            onClick={() => handleAccordionClick(0)}>
            <input type="radio" name="my-accordion-1" defaultChecked />
            <p
              className={`collapse-title text-[22px] lg:text-[32px] font-semibold p-0 pl-[25px] min-h-0 ${
                expandedItem === 0 ? "text-white" : "text-[#39393A]"
              }`}>
              Ecommerce Solution
            </p>
            <div className="collapse-content !p-0 mt-[-4px]">
              <p className="text-[14px] lg:text-[18px] font-normal pl-[25px] pb-0">
              
Revolutionize your business with our all-in-one eCommerce solution. Simplify operations, boost sales, and scale effortlessly with intuitive tools designed for growth. From product listing to secure checkout, we handle the details so you can focus on what matters most—your customers.
              </p>
              <div className="pl-5 mt-2 lg:hidden">
                {" "}
                <div
                  className="border bottom-[#FFFFFF26] rounded-[16px] flex justify-center items-center mx-auto"
                  style={{
                    background:
                      "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                    border: "1px solid #FFFFFF26",
                  }}>
                  <img
                    src={hassleBg}
                    alt=""
                    className="h-full w-full object-fill"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`collapse py-0 border-0 border-l-2 border-[#2244FF] rounded-none ${
              expandedItem === 1 ? "open" : ""
            }`}
            onClick={() => handleAccordionClick(1)}>
            <input type="radio" name="my-accordion-1" />
            <div
              className={`collapse-title text-[22px] lg:text-[32px] font-semibold p-0 pl-[25px]  min-h-0 ${
                expandedItem === 1 ? "text-white" : "text-[#39393A]"
              }`}>
              Affiliate Program
            </div>
            <div className="collapse-content !p-0">
              <p className="text-[14px] lg:text-[18px] font-normal pl-[25px] pb-0">
              Boost your earnings with our affiliate program! Partner with us to turn your influence into income. Enjoy competitive commissions, real-time tracking, and top-notch support. Whether you're a blogger or influencer, start earning today and grow with us!
              </p>
              <div className="pl-5 mt-2 lg:hidden">
                <div
                  className="border bottom-[#FFFFFF26] rounded-[16px] flex justify-center items-center mx-auto"
                  style={{
                    background:
                      "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                    border: "1px solid #FFFFFF26",
                  }}>
                  <img
                    src={hassleBg}
                    alt=""
                    className="h-full w-full object-fill"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`collapse py-0 border-0 border-l-2 border-[#2244FF] rounded-none ${
              expandedItem === 2 ? "open" : ""
            }`}
            onClick={() => handleAccordionClick(2)}>
            <input type="radio" name="my-accordion-1" />
            <div
              className={`collapse-title text-[22px] lg:text-[32px] font-semibold p-0 pl-[25px] min-h-0 ${
                expandedItem === 2 ? "text-white" : "text-[#39393A]"
              }`}>
              Drop Shipping Service
            </div>
            <div className="collapse-content !p-0 ">
              <p className="text-[14px] lg:text-[18px] font-normal pl-[25px] pb-0">
              Revolutionize your online store with our dropshipping service! Enjoy hassle-free selling with no inventory costs. Connect with reliable suppliers, track orders in real-time, and get unmatched support to grow your business. Start dropshipping today and maximize your profits with ease!
              </p>
              <div className="pl-5 mt-2 lg:hidden">
                <div
                  className="border bottom-[#FFFFFF26] rounded-[16px] flex justify-center items-center mx-auto"
                  style={{
                    background:
                      "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                    border: "1px solid #FFFFFF26",
                  }}>
                  <img
                    src={hassleBg}
                    alt=""
                    className="h-full w-full object-fill"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex relative">
          <div
            className="absolute -top-[54%] left-[55%] w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:top-0 z-[-1] hidden lg:block"
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
              height={1800}
              width={1440}
            />
          </div>
          {expandedItem === 0 && (
            <div
              className="border bottom-[#FFFFFF26] rounded-[16px] flex justify-center items-center mx-auto"
              style={{
                background:
                  "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                border: "1px solid #FFFFFF26",
              }}>
              <img
                src={hassleBg}
                alt=""
                className="h-full w-full object-fill"
              />
            </div>
          )}
          {expandedItem === 1 && (
            <div
              className="border bottom-[#FFFFFF26] rounded-[16px] flex justify-center items-center mx-auto"
              style={{
                background:
                  "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                border: "1px solid #FFFFFF26",
              }}>
              <img
                src={hassleBg}
                alt=""
                className="h-full w-full object-fill"
              />
            </div>
          )}
          {expandedItem === 2 && (
            <div
              className="border bottom-[#FFFFFF26] rounded-[16px] flex justify-center items-center mx-auto"
              style={{
                background:
                  "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                border: "1px solid #FFFFFF26",
              }}>
              <img
                src={hassleBg}
                alt=""
                className="h-full w-full object-fill"
              />
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hassle;
