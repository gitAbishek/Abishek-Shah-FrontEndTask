import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import CustomAnalyticBox from "../common/box/CustomAnalyticBox";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import CustomSocialMediaBox from "../common/box/CustomSocialMediaBox";
import { FaSquareFacebook } from "react-icons/fa6";
import ShadowGraph from "../../assets/dashboard/Shadow.png";
import CreditBalance from "../common/CreditBalance";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import FiveLineProgress from "../common/progress/FiveLineProgress";
import FiveLineProgressMobile from "../common/progress/FiveLineProgressMobile";
import ThreeLineProgress from "../common/progress/ThreeLineProgress";
import ThreeLineProgressMobile from "../common/progress/ThreeLineProgressMobile";

const Analytics = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="w-full flex flex-col p-3 md:p-8  bg-gradient-combined rounded-md mt-[500px] md:mt-[600px]  mx-[20px] lg:mx-[150px] shadow-sm">
      <div className="w-full flex gap-5 items-center pr-10">
        <BsThreeDots color="white" size={40} />
        <div className="w-full">
          <input
            type="text"
            value={searchValue}
            onChange={handleChange}
            className="w-full px-2 py-[10px] rounded text-xs outline-none"
            placeholder="www.saas.com/users "
          />
        </div>
      </div>

      <div className="bg-white  rounded-md mt-2 p-2 md:p-4  shadow-sm">
        <div className="grid grid-cols-3 gap-2 md:gap-5 mb-4">
          <CustomAnalyticBox
            title="All Traffic"
            amount="347.34k"
            icon={<HiMiniArrowTrendingUp />}
          />

          <div
            className={`flex justify-between  
             gap-2 md:gap-5 border-[0.1px] p-1 md:p-3 rounded-md `}
          >
            <div className="flex flex-col justify-center ">
              <div className="text-[5px] md:text-xs text-[#CDD0D8] font-medium">
                Spent this month
              </div>
              <h1 className="font-bold text-[8px] md:text-[24px]">$682.5</h1>
            </div>
            <div className=" flex justify-center items-center rounded-full h-8 md:h-[56px] w-8 md:w-[56px]  pr-2">
              <div className="hidden md:block">
                <FiveLineProgress />
              </div>
              <div className="block md:hidden">
                <FiveLineProgressMobile />
              </div>
            </div>
          </div>

          <CustomAnalyticBox
            title="Earnings"
            amount="$350.40"
            icon={
              <>
                <div className="hidden md:block">
                  <ThreeLineProgress />
                </div>
                <div className="block md:hidden">
                  <ThreeLineProgressMobile />
                </div>{" "}
              </>
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-1 md:gap-5 mb-2 md:mb-4">
          <div className="border-[0.1px] p-2 md:p-4 rounded-md ">
            <CreditBalance />

            <div className="">
              <p className="text-[#CDD0D8] font-medium text-[5px] md:text-[14px] py-2 md:py-4">
                Recent
              </p>

              <div className="flex flex-col gap-1 md:gap-5">
                <CustomSocialMediaBox
                  title="Instagram"
                  amount="Today, 16:36"
                  icon={<FaSquareInstagram />}
                  price="120k"
                  iconStyle="text-[#395794]"
                />

                <CustomSocialMediaBox
                  title="Twitter"
                  amount="23 Jun, 13:06"
                  icon={<FaSquareXTwitter />}
                  price="100k"
                  iconStyle="text-[#395794]"
                />

                <CustomSocialMediaBox
                  title="Facebook"
                  amount="21 Jun, 19:04"
                  icon={<FaSquareFacebook />}
                  price="110k"
                  iconStyle="text-[#395794]"
                />
              </div>
            </div>
          </div>

          <div className="w-full  flex flex-col gap-2 md:gap-5 border-[0.1px]  rounded-md  ">
            <div className="relative w-full lex flex-col gap-2 text-center justify-center   p-2 md:p-5">
              <div className="text-secondary font-medium text-[6px] md:text-[16px]">
                This month Earnings
              </div>
              <div className="font-bold text-[14px] md:text-3xl">$801.5</div>

              <button className="text-center w-12 text-secondary bg-[#e3e7e6] rounded-3xl mt-1 md:mt-5 text-[6px] md:text-xs py-1">
                +2.45%
              </button>

              <div className="absolute right-2 md:right-5 top-2 md:top-5 w-auto h-auto">
                <ThreeLineProgressMobile />
              </div>
            </div>
            <div>
              <img src={ShadowGraph} alt="GraphHorizontal" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
