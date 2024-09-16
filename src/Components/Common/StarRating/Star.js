import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineStar, MdStarHalf, MdStarOutline } from "react-icons/md";

const Star = ({ ratingPoint }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {ratingPoint >= index + 1 ? (
          <MdOutlineStar className="text-[#F2C94C] text-[23px] lg:text-[33px]" />
        ) : ratingPoint >= number ? (
          <MdStarHalf className="text-[#F2C94C] text-[23px] lg:text-[33px]" />
        ) : (
          <MdStarOutline className="text-[#F2C94C] text-[23px] lg:text-[33px]" />
        )}
      </span>
    );
  });
  return (
    <div>
      {ratingPoint == "NaN" ? (
        <span className="text-[0.8rem]">no reviews</span>
      ) : (
        <div className="flex gap-[3px] items-end">
          {ratingStar}
          <p className="text-[18px] font-normal"> {ratingPoint}</p>
        </div>
      )}
    </div>
  );
};

export default Star;
