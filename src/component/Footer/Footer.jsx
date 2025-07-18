import React from "react";
import Containner from "../Containner/Containner";
import fotterimg from "../../assets/footerLogo.png";

const Footer = () => {
  const footerData = [
    {
      title: "Other links",
      ul: ["Blogs", "Movers website", "Traffic Update"],
    },
    {
      title: "Other links",
      ul: ["Blogs", "Movers website", "Traffic Update"],
    },
    {
      title: "Other links",
      ul: ["Blogs", "Movers website", "Traffic Update"],
    },
  ];
  return (
    <div className="bg-[#2F2E41]">
      <Containner>
        <div className="flex justify-between">
          <div className="left pt-[60px] pb-[68px]">
            <img src={fotterimg} alt="" />
            <p className="w-[190px] font-primary font-semibold text-base leading-[22px] text-[#9291A1] mt-3">
              The most trusted Courier company in your area.
            </p>
          </div>
          <div className="right flex gap-x-[130px] pt-[50px] pb-[49px]">
            {footerData.map((item) => (
              <div>
                <h5 className="font-secondery font-bold text-[20px] leading-[100%] text-white mb-6">
                  {item.title}
                </h5>
                {item.ul.map((demo) => (
                  <li className="font-primary font-semibold text-base leading-[22px] text-[#9291A1] mb-[7px] list-none">
                    {demo}
                  </li>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Containner>
      <div className="bg-[#222132]">
        <div className="max-w-[1320px] flex justify-between mx-auto py-[30px]">
          <p className="font-primary font-medium text-[13px] leading-[100%] text-[#DBDBE9]">
            All rights Reserved © Yeasin Chowdhriy, 2025
          </p>
          <p className="font-primary font-medium text-[13px] leading-[100%] text-[#DBDBE9]">
            Made with heart by{" "}
            <span className="font-extrabold text-orange-400">ThemeWagon</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
