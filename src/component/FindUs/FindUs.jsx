import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Containner from "../Containner/Containner";

const FindUs = () => {
  return (
    <>
      <div className="bg-section pb-[183px]">
        <Containner>
          <div className="text-center">
            <h1 className="font-secondery font-bold text-[31px] leading-[100%] text-orange-400">
              FIND US
            </h1>
            <h2 className="font-primary font-extrabold text-[49px] leading-[100%] pt-[11px] pb-[86px]">
              Access us easily
            </h2>
          </div>
          <div className="flex gap-x-[23px]">

            <div className="left w-[760px]">
            

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1820.6493381698212!2d89.98168645131729!3d24.126146895840314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe012e787bbf77%3A0xc16dbcaf1f49dd04!2sYeasin%20ViLa!5e0!3m2!1sen!2sbd!4v1752807356235!5m2!1sen!2sbd"
                width="700"
                height="450"
                 style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>


            </div>

            <div className="right w-[536px] bg-white pt-[81px] pb-[88px] pl-[85px]">
              <h3 className="font-primary font-bold text-[20px] leading-[120%] text-[#464558]">
                Contact with us
              </h3>
              <div className="pt-[37px] pb-[51px]">
                <div className="flex gap-x-[13px]">
                  <CiLocationOn size={27} className="text-[#FFAF0F]" />
                  <p className="text-base leading-[120%]">
                    2277 Lorem Ave, San Diego, CA 22553
                  </p>
                </div>
                <div className="flex gap-x-[13px] py-[15px]">
                  <CiClock2 size={27} className="text-[#FFAF0F]" />
                  <div className="flex flex-col">
                    <p className="text-base leading-[120%]">
                      Monday - Friday: 10 am - 10pm
                    </p>
                    <p className="text-base leading-[120%]">
                      Sunday: 11 am - 9pm
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-[13px]">
                  <CiMail size={27} className="text-[#FFAF0F]" />
                  <p className="text-base leading-[120%]">info@quriarbox.com</p>
                </div>
              </div>
              <div className="flex gap-x-[24px] text-black">
                <FaFacebookSquare
                  size={22}
                  className="hover:text- cursor-pointer transition"
                />
                <RiInstagramFill
                  size={22}
                  className="hover:text- cursor-pointer transition"
                />
                <FaTwitterSquare
                  size={22}
                  className="hover:text- cursor-pointer transition"
                />
              </div>
            </div>
          </div>

          <div className=" text-center mt-[30px]">
            <div className=" bg-orange-500 font-semibold text-white rounded py-[22px] px-[113px] inline-flex gap-x-3 items-center mx-auto">
              <FaPhoneAlt />
              <a href=""> Call us to delivery 123-456789</a>
            </div>
          </div>
        </Containner>
      </div>
    </>
  );
};

export default FindUs;
