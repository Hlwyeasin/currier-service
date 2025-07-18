import React from "react";
import Containner from "../Containner/Containner";
import raginh01 from "../../assets/ratings1.svg";
import rating02 from "../../assets/ratings2.svg";
import rating03 from "../../assets/ratings3.svg";
import rating04 from "../../assets/ratings4.svg";
import raging05 from "../../assets/ratings5.svg";

const Ratings = () => {
  const ratingData = [
    {
      img: raginh01,
      title: "26+",
      text: "Awards  won",
    },
    {
      img: rating02,
      title: "65+",
      text: "States covered",
    },
    {
      img: rating03,
      title: "689K+",
      text: "Happy clients",
    },
    {
      img: rating04,
      title: "130M+",
      text: "Goods delivered",
    },
    {
      img: raging05,
      title: "130M+",
      text: "Business hours",
    },
  ];
  return (
    <>
      <div className="bg-section pb-[162px]">
        <Containner>
          <div className="flex justify-between items-center">
            {ratingData.map((index) => (
              <div className="text-center">
                <img src={index.img} alt="" className="mx-auto" />
                <h1 className="font-extrabold text-[39px] leading-[44px] text-orange-500 pt-[28px] pb-[18px]">
                  {index.title}
                </h1>
                <p className="font-primary font-bold text-[20px] leading-[120%] text-[#464558]">
                  {index.text}
                </p>
              </div>
            ))}
          </div>
        </Containner>
      </div>
    </>
  );
};

export default Ratings;
