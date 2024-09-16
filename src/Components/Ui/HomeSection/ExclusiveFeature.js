import React, { useState } from "react";
import exclusiveImage from "../../../assets/features/1.png";
import exclusiveImage1 from "../../../assets/features/3.png";
import exclusiveImage2 from "../../../assets/features/2.png";
import { FaCheck } from "react-icons/fa6";
import gradientBg from "../../../assets/gradientbg.png";
import SectionHeader from "../../Common/Wrapper/SectionHeader";

const ExclusiveFeature = () => {
  const [activeTab, setActiveTab] = useState("projectManagement");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-auto" id="features">
      <SectionHeader
        title="other features"
        subTitle="Explore many more WebFusionX exclusive"
        mainTag="Features"
      />
      <div
        className="lg:block hidden w-[378px] lg:w-[1297px] rounded-[10px] mx-auto mt-[80px] relative z-10 pb-5"
        style={{
          background:
            "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
          border: "1px solid #FFFFFF26",
        }}>
        <div className="flex lg:flex-row flex-col justify-normal items-center">
          <div
            className={`w-[378px] lg:w-[441px] h-[94px] text-2xl font-medium leading-[36px] flex justify-center items-center border border-[#FFFFFF26] cursor-pointer rounded-tl-[10px] ${
              activeTab === "projectManagement"
                ? "text-[#EEEEEE] bg-gradient"
                : "text-[#D7D7D7]"
            }`}
            style={{
              background:
                activeTab === "projectManagement"
                  ? " linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)"
                  : "none",
            }}
            onClick={() => handleTabClick("projectManagement")}>
            Project management
          </div>
          <div
            className={`w-[378px] lg:w-[447px] h-[94px] text-2xl font-medium leading-[36px] flex justify-center items-center border border-[#FFFFFF26] cursor-pointer  ${
              activeTab === "domainManagement"
                ? "text-[#EEEEEE] bg-gradient"
                : "text-[#D7D7D7]"
            }`}
            style={{
              zIndex: 99,
              position: "relative",
              background:
                activeTab === "domainManagement"
                  ? " linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)"
                  : "none",
            }}
            onClick={() => handleTabClick("domainManagement")}>
            Domain Management
          </div>
          <div
            className={`w-[378px] lg:w-[408px] h-[94px] text-2xl font-medium leading-[36px] flex justify-center items-center border border-[#FFFFFF26] cursor-pointer rounded-tr-[10px] ${
              activeTab === "supportSystem"
                ? "text-[#EEEEEE] bg-gradient"
                : "text-[#D7D7D7]"
            }`}
            style={{
              background:
                activeTab === "supportSystem"
                  ? " linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)"
                  : "none",
            }}
            onClick={() => handleTabClick("supportSystem")}>
            Support system
          </div>
        </div>
        <div
          className="absolute -top-[54%] left-[54%] w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:top-[8%] hidden lg:block"
          style={{
            width: "400px",
            background: "rgb(31 32 33 / 0%)",
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
        {activeTab === "projectManagement" && (
          <div className="mt-[40px] flex lg:flex-row flex-col justify-normal gap-0 lg:gap-[120px] px-[32px]">
            <div className="w-[350px] lg:w-[470px]">
              <p className="text-[24px] lg:text-[27px] font-medium">
                Stay visualized and focused
              </p>
              <div className="flex justify-normal items-start gap-2 mt-[30px] lg:mt-[57px]">
                <FaCheck className="text-[#2244FF] text-2xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">Order Tracking:</span>{" "}
                  Kanban boards provide a visual representation of customer
                  orders.{" "}
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px]">
                <FaCheck className="text-[#2244FF] text-3xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Sales Pipeline Management:{" "}
                  </span>{" "}
                  Similar to orders, leads and quotes can be visualized as cards
                  moving through stages.
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px]">
                <FaCheck className="text-[#2244FF] text-3xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Real-time Updates:{" "}
                  </span>{" "}
                  Team members can update cards with notes, assign tasks to
                  colleagues, and leave comments.
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px]">
                <FaCheck className="text-[#2244FF] text-xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Shared Responsibility:{" "}
                  </span>{" "}
                  Kanban boards are typically shared within teams.
                </p>
              </div>
            </div>
            <div className="rounded-[4px] h-[300px] lg:h-[500px] w-[370px] lg:w-[650px]">
              <img
                src={exclusiveImage}
                alt=""
                className="h-full w-full object-fill rounded-[4px]"
              />
            </div>
          </div>
        )}
        {activeTab === "domainManagement" && (
          <div className="mt-[40px] flex lg:flex-row flex-col justify-normal gap-[120px] px-[32px]">
            <div className="w-[350px] lg:w-[470px]">
              <p className="text-[24px] lg:text-[27px] font-medium">
                Stay visualized and focused
              </p>
              <div className="flex justify-normal items-start gap-2 mt-[30px] lg:mt-[57px]">
                <FaCheck className="text-[#2244FF] text-2xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">Order Tracking:</span>{" "}
                  Kanban boards provide a visual representation of customer
                  orders.{" "}
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px]">
                <FaCheck className="text-[#2244FF] text-3xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Sales Pipeline Management:{" "}
                  </span>{" "}
                  Similar to orders, leads and quotes can be visualized as cards
                  moving through stages.
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px]">
                <FaCheck className="text-[#2244FF] text-3xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Real-time Updates:{" "}
                  </span>{" "}
                  Team members can update cards with notes, assign tasks to
                  colleagues, and leave comments.
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px]">
                <FaCheck className="text-[#2244FF] text-xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Shared Responsibility:{" "}
                  </span>{" "}
                  Kanban boards are typically shared within teams.
                </p>
              </div>
            </div>
            <div className="rounded-[4px]  h-[300px] lg:h-[500px] w-[370px] lg:w-[650px]">
              <img
                src={exclusiveImage1}
                alt=""
                className="h-full w-full object-fill rounded-[4px]"
              />
            </div>
          </div>
        )}
        {activeTab === "supportSystem" && (
          <div className="mt-[40px] flex lg:flex-row flex-col justify-normal gap-[120px] px-[32px]">
            <div className="w-[350px] lg:w-[470px]">
              <p className="text-[24px] lg:text-[27px] font-medium">
                Claim Your instant support system
              </p>
              <div className="flex justify-normal items-start gap-2 mt-[30px] lg:mt-[57px]">
                <FaCheck className="text-[#2244FF] text-2xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Self-Service Options:
                  </span>{" "}
                  Kanban boards provide a visual representation of customer
                  orders.
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px]">
                <FaCheck className="text-[#2244FF] text-3xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Sales Pipeline Management:{" "}
                  </span>
                  Similar to orders, leads and quotes can be visualized as cards
                  moving through stages.
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px]">
                <FaCheck className="text-[#2244FF] text-3xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Real-time Updates:
                  </span>
                  Team members can update cards with notes, assign tasks to
                  colleagues, and leave comments.
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px]">
                <FaCheck className="text-[#2244FF] text-xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Shared Responsibility:
                  </span>
                  Kanban boards are typically shared within teams.
                </p>
              </div>
            </div>
            <div className="rounded-[4px] h-[300px] lg:h-[500px] w-[370px] lg:w-[650px]">
              <img
                src={exclusiveImage2}
                alt=""
                className="h-full w-full object-fill rounded-[4px]"
              />
            </div>
          </div>
        )}
      </div>
      <div
        className="block lg:hidden w-[360px] lg:w-[1297px] rounded-[10px] mx-auto mt-[80px] relative z-10 pb-5"
        style={{
          background:
            "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
          border: "1px solid #FFFFFF26",
        }}>
        <div className="flex lg:flex-row flex-col justify-normal items-center">
          <div
            className={`w-[360px] lg:w-[441px] h-[69px] text-xl font-medium leading-[36px] flex justify-center items-center border border-[#FFFFFF26] cursor-pointer rounded-t-[10px] ${
              activeTab === "projectManagement"
                ? "text-[#EEEEEE] bg-gradient"
                : "text-[#D7D7D7]"
            }`}
            style={{
              background:
                activeTab === "projectManagement"
                  ? " linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)"
                  : "none",
            }}
            onClick={() => handleTabClick("projectManagement")}>
            Project management
          </div>
          <div
            className={`w-[360px] lg:w-[447px] h-[69px] text-xl font-medium leading-[36px] flex justify-center items-center border border-[#FFFFFF26] cursor-pointer  ${
              activeTab === "domainManagement"
                ? "text-[#EEEEEE] bg-gradient"
                : "text-[#D7D7D7]"
            }`}
            style={{
              zIndex: 99,
              position: "relative",
              background:
                activeTab === "domainManagement"
                  ? " linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)"
                  : "none",
            }}
            onClick={() => handleTabClick("domainManagement")}>
            Domain Management
          </div>
          <div
            className={`w-[360px] lg:w-[408px] h-[69px] text-xl font-medium leading-[36px] flex justify-center items-center border border-[#FFFFFF26] cursor-pointer rounded-none ${
              activeTab === "supportSystem"
                ? "text-[#EEEEEE] bg-gradient"
                : "text-[#D7D7D7]"
            }`}
            style={{
              background:
                activeTab === "supportSystem"
                  ? " linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)"
                  : "none",
            }}
            onClick={() => handleTabClick("supportSystem")}>
            Support system
          </div>
        </div>
        <div
          className="absolute -top-[54%] left-[54%] w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:top-[8%] hidden lg:block"
          style={{
            width: "400px",
            background: "rgb(31 32 33 / 0%)",
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
        {activeTab === "projectManagement" && (
          <div className="mt-[40px] flex flex-col">
            <div className="rounded-[4px] h-[300px] w-[350px] lg:w-[650px] mx-auto">
              <img
                src={exclusiveImage}
                alt=""
                className="h-full w-full object-fill rounded-[4px]"
              />
            </div>
            <div className="w-[350px] mx-auto mt-5">
              <p className="text-[24px] text-center font-medium">
                Stay visualized and focused
              </p>
              <div className="flex justify-normal items-start gap-2 mt-[30px] px-4">
                <FaCheck className="text-[#2244FF] text-2xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">Order Tracking:</span>{" "}
                  Kanban boards provide a visual representation of customer
                  orders.
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px] px-4">
                <FaCheck className="text-[#2244FF] text-3xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Sales Pipeline Management:{" "}
                  </span>{" "}
                  Similar to orders, leads and quotes can be visualized as cards
                  moving through stages.
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px] px-4">
                <FaCheck className="text-[#2244FF] text-3xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Real-time Updates:{" "}
                  </span>{" "}
                  Team members can update cards with notes, assign tasks to
                  colleagues, and leave comments.
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px] px-4">
                <FaCheck className="text-[#2244FF] text-xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Shared Responsibility:{" "}
                  </span>{" "}
                  Kanban boards are typically shared within teams.
                </p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "domainManagement" && (
          <div className="mt-[40px] flex flex-col">
            <div className="rounded-[4px] h-[300px] w-[350px] lg:w-[650px] mx-auto">
              <img
                src={exclusiveImage1}
                alt=""
                className="h-full w-full object-fill rounded-[4px]"
              />
            </div>
            <div className="w-[350px] mx-auto mt-5">
              <p className="text-[24px] text-center font-medium">
                Stay visualized and focused
              </p>
              <div className="flex justify-normal items-start gap-2 mt-[30px] px-4">
                <FaCheck className="text-[#2244FF] text-2xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">Order Tracking:</span>{" "}
                  Kanban boards provide a visual representation of customer
                  orders.
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px] px-4">
                <FaCheck className="text-[#2244FF] text-3xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Sales Pipeline Management:{" "}
                  </span>{" "}
                  Similar to orders, leads and quotes can be visualized as cards
                  moving through stages.
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px] px-4">
                <FaCheck className="text-[#2244FF] text-3xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Real-time Updates:{" "}
                  </span>{" "}
                  Team members can update cards with notes, assign tasks to
                  colleagues, and leave comments.
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px] px-4">
                <FaCheck className="text-[#2244FF] text-xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Shared Responsibility:{" "}
                  </span>{" "}
                  Kanban boards are typically shared within teams.
                </p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "supportSystem" && (
          <div className="mt-[40px] flex flex-col">
            <div className="rounded-[4px] h-[300px] w-[350px] lg:w-[650px] mx-auto">
              <img
                src={exclusiveImage2}
                alt=""
                className="h-full w-full object-fill rounded-[4px]"
              />
            </div>
            <div className="w-[350px] mx-auto mt-5">
              <p className="text-[24px] text-center font-medium">
                Claim Your instant support system
              </p>
              <div className="flex justify-normal items-start gap-2 mt-[30px] px-4">
                <FaCheck className="text-[#2244FF] text-2xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Self-Service Options:
                  </span>{" "}
                  Kanban boards provide a visual representation of customer
                  orders.
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px] px-4">
                <FaCheck className="text-[#2244FF] text-3xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Sales Pipeline Management:{" "}
                  </span>{" "}
                  Similar to orders, leads and quotes can be visualized as cards
                  moving through stages.
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px] px-4">
                <FaCheck className="text-[#2244FF] text-3xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Real-time Updates:{" "}
                  </span>{" "}
                  Team members can update cards with notes, assign tasks to
                  colleagues, and leave comments.
                </p>
              </div>
              <div className="flex justify-normal items-start gap-2 mt-[22px] px-4">
                <FaCheck className="text-[#2244FF] text-xl font-bold" />
                <p className="text-[18px] font-normal">
                  <span className="text-[18px] font-bold">
                    Shared Responsibility:{" "}
                  </span>{" "}
                  Kanban boards are typically shared within teams.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExclusiveFeature;
