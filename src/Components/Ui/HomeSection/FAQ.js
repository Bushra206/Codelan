import React,{useState} from "react";
import gradientBg from "../../../assets/gradientbg.png";
import SectionHeader from "../../Common/Wrapper/SectionHeader";
import { faqData } from "../../Common/DamyData/Data";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
const FAQ = () => {
  const [accordians, setAccordians] = useState(
    faqData.map((item) => ({ open: false }))
  );

  const handleToggle = (index) => {
    setAccordians(
      accordians.map((item, i) => (i === index ? { open: !item.open } : item))
    );
  };
  return (
    <div className="w-[345px] pl-[3px] lg:w-[1036px] mx-auto">
      <SectionHeader
        title="frequently asked your question"
        subTitle="Let’s know your questions"
        mainTag="FAQs"
      />
      <div className="w-[345px] pl-[3px] lg:w-[1034px] mx-auto mt-[80px] relative">
        <div
          className="absolute -top-[54%] left-[60%] w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[9%] hidden lg:block"
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
        <div className="join join-vertical w-full ">
          {faqData.map?.((e, i) => {
            return (
              // <div className="collapse collapse-arrow join-item border-0 border-b border-base-300 pb-2">
              //   <input type="radio" name="my-accordion-4" defaultChecked />
              //   <div className="collapse-title text-[18px] font-semibold">
              //     {e?.question}
              //   </div>
              //   <div className="collapse-content">
              //     <p className="pl-[7px]">{e?.answer}</p>
              //   </div>
              // </div>
              <div className=" py-3 border-b-[1px] z-50">
              <div className="flex justify-between items-center  ">
                <p className="font-bold text-[18px]">{e?.question}</p>
                {accordians[i].open ? (
                  <RiArrowUpSLine size={25} onClick={() => handleToggle(i)} />
                ) : (
                  <RiArrowDropDownLine
                    size={25}
                    onClick={() => handleToggle(i)}
                  />
                )}
              </div>

              {accordians[i].open && (
                <p className="pt-3 text-[15px]">{e?.answer}</p>
              )}
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
