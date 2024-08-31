import {  FaFacebookF } from "react-icons/fa6";
import Button from "../button/CustomButton";
import CustomBorder from "../common/border/CustomBorder";
import { FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative   text-white pt-12  overflow-hidden bg-[#EBF7FF] z-50">
      <div className=" flex flex-col justify-center items-center text-center mb-24 md:mb-32 relative z-10 px-6 md:px-[120px] bg-[#EBF7FF]">
        <div className=" absolute bg-[#0097FE] w-48 h-24 clip-path-polygon-mobile  md:clip-path-polygon opacity-10 left-0 -bottom-24 md:-bottom-28 "></div>

        <h2 className="text-[32px] md:text-[48px] font-bold mb-4 text-[#14358A]">
          Let's start growing your business
        </h2>
        <p className="text-[#68718B] text-[18px] mb-6 max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id
          nisl tellus rhoncus, imperdiet.
        </p>
        <div className="w-full flex flex-col justify-center md:flex-row gap-5">
          <Button
            title="Register Now"
            styles="w-full md:w-[140px] py-3 text-white font-bold text-[18px] bg-gradient-to-br from-[#6A36FF] to-[#AC5FE6]"
          />
          <Button
            title="Contact Us"
            styles="w-full md:w-[140px] font-bold text-[18px] py-3 text-[#6A36FF] border border-[#6A36FF] border-md"
          />
        </div>
        <div className="hidden md:block absolute bg-[#0097FE] w-48 h-20 clip-path-polygon-mobile  md:clip-path-polygon  right-0 -bottom-24 md:-bottom-16 "></div>
      </div>
      <div className=" separator-bottomTopRight"></div>
      <div className="relative px-6 md:px-[120px] bg-gradient-to-br from-[#1B45B4] to-[#1B45B4]  ">
        <div className="absolute bg-[#0097FE] w-24 md:w-20 h-10 clip-path-polygon-mobile md:clip-path-polygon left-0  bottom-[507px] md:bottom-32 opacity-30 md:opacity-100"></div>

        <CustomBorder
          width="120px"
          height="60px"
          borderWidth="1px"
          borderColor="#0097FE"
          skewDegree={5}
          showTopBorder={true}
          showBottomBorder={true}
          showLeftBorder={true}
          showRightBorder={true}
          styles="z-10 absolute right-0 bottom-[200px] opacity-40 "
        />

        <CustomBorder
          width="250px"
          height="40px"
          borderWidth="1px"
          borderColor="#0097FE"
          skewDegree={5}
          showTopBorder={true}
          showBottomBorder={false}
          showLeftBorder={true}
          showRightBorder={true}
          styles="z-10 absolute left-10 -top-[42px] opacity-10 "
        />

        <div className="w-full flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/3">
            <h3 className="text-[32px] font-bold mb-4">Saasly</h3>
            <p className="max-w-xs text-gray-300 mb-6 text-4 text-center md:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut
              id nisl tellus rhoncus, imperdiet.
            </p>
            <div className="flex space-x-3">
              <div className="flex justify-center items-center rounded-md text-center bg-[#006EEA] h-10 w-10 text-white hover:border-[1px] border-white hover:bg-transparent cursor-pointer">
                🌐
              </div>
              <div className="flex justify-center items-center rounded-md text-center bg-[#006EEA] h-10 w-10 text-white hover:border-[1px] border-white hover:bg-transparent cursor-pointer">
                {" "}
                <FaFacebookF />
              </div>
              <div className="flex justify-center items-center rounded-md text-center bg-[#006EEA] h-10 w-10 text-white hover:border-[1px] border-white hover:bg-transparent cursor-pointer">
                {" "}
                <FaTwitter />
              </div>
              <div className="flex justify-center items-center rounded-md text-center bg-[#006EEA] h-10 w-10 text-white hover:border-[1px] border-white hover:bg-transparent cursor-pointer">
                {" "}
                <FaGoogle />
              </div>
              <div className="flex justify-center items-center rounded-md text-center bg-[#006EEA] h-10 w-10 text-white hover:border-[1px] border-white hover:bg-transparent cursor-pointer">
                {" "}
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[18px] font-bold mb-4">Pages</h3>
              <ul className="space-y-2 text-white text-[16px]">
                <li>Home V1</li>
                <li>Home V2</li>
                <li>Home V3</li>
                <li>About 1</li>
                <li>About 2</li>
                <li>Blog 1</li>
                <li>Blog 2</li>
                <li>Blog Single</li>
                <li>Job 1</li>
                <li>Job 2</li>
                <li>Job Single</li>
                <li>Pricing 1</li>
                <li>Pricing 2</li>
                <li>Help Center 1</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[18px] font-bold mb-4">Help Center</h3>
              <ul className="space-y-2 text-white text-[16px]">
                <li>Help Center V2</li>
                <li>FAQ V1</li>
                <li>FAQ V2</li>
                <li>FAQ Detail</li>
                <li>Contact V1</li>
                <li>Contact V2</li>
                <li>Checkout</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[18px] font-bold mb-4">Utility Pages</h3>
              <ul className="space-y-2 text-white text-[16px]">
                <li>Sign In</li>
                <li>Sign Up</li>
                <li>Forgot Password</li>
                <li>Reset Password</li>
                <li>Email Confirmation</li>
                <li>404 Page</li>
                <li>Coming Soon</li>
                <li>Style Guide</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400  border-t-[1px] py-5 mt-10  ">
          Copyright Stairs | Designed by Design Mate - Powered by Webflow
        </div>
      </div>
    </footer>
  );
};

export default Footer;
