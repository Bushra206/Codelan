import React from "react";

const BlogCard = ({ data }) => {

  return (
    <>
      <div className="h-[600px] md:h-[550px]  lg:h-[700px] xl:h-[650px] bg-[#1F1F20] rounded-lg border-box">
        <div>
          <img
            src={data?.img}
            alt="img tag"
            className="w-[100%] h-[270px] object-fill rounded-t-[10px] border border-[#FFFFFF12]"
          />
        </div>
        <div className="px-7 pt-6 border-box">
          <div className="flex justify-between items-start gap-2">
            <p className="text-[16px] lg:text-xl font-semibold">
              {data?.title}
            </p>
            <p className="text-[14px] lg:text-[16px] font-normal text-[#D7D7D7]">
              Created: {data?.dateCreated}
            </p>
          </div>
          <p className="text-[14px] py-1 lg:text-[18px] font-normal text-[#D7D7D7] mt-[8px]">
            {data?.description}
          </p>
          <button className="mt-[21px] pb-6 text-[14px] lg:text-[16px] font-semibold text-[#EEEEEE] underline hover:text-blue-500">
            Read more
          </button>
        </div>
      </div>
    </>
  );

// BlogCard.js



};

export default BlogCard;
