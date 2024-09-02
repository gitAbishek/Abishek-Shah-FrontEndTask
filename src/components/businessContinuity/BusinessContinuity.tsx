import { TbBrandDatabricks, TbGridDots, TbFileReport } from "react-icons/tb";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import CustomTitle from "../common/custom/CustomTitle";
import CustomServices from "../common/box/CustomServices";
import SalesTrend from "../../assets/continuity/salesTrend.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaSquareFacebook,
  FaTwitter,
} from "react-icons/fa6";
import Button from "../button/CustomButton";
import CircularProgress from "../common/progress/CircularProgress";

const BusinessContinuity = () => {
  return (
    <div className="w-full pt-16 px-10 md:px-[120px]">
      <div className="w-full flex justify-center mb-5">
        <CustomTitle
          title="We optimize marketing for business continuity"
          styles="text-[#14358A]"
        />
      </div>
      <div className="w-full flex flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-10 w-full lg:w-3/5 py-0  md:py-16 ">
          <CustomServices
            title="Accurate Data Science"
            description="Cum sociis natoque penatibus et magnis dis parturient "
            icon={<TbBrandDatabricks />}
          />

          <CustomServices
            title="Report Automation"
            description="Montes, nascetur ridiculus mus. Donec quam felis, "
            icon={<TbFileReport />}
          />
        </div>

        <div
          className="relative w-full hidden lg:flex justify-center items-center "
          style={{
            background:
              "linear-gradient(to bottom right, rgba(254, 254, 254, 0.5), rgba(247, 247, 255, 0.5))",
          }}
        >
          <div className="absolute -top-0 -left-5 flex justify-center items-center rounded-md shadow-md  bg-[#fff] h-10 w-10 text-white mb-3">
            <FaSquareFacebook className="text-[#3B5999]" />
          </div>
          <div className="absolute -top-10 right-32 flex justify-center items-center rounded-md shadow-md  bg-[#fff] h-10 w-10 text-white mb-3">
            <FaTwitter className="text-[#3B5999]" />
          </div>
          <div className="absolute -bottom-5 -left-5 flex justify-center items-center rounded-md shadow-md  bg-[#fff] h-10 w-10 text-white mb-3">
            <FaInstagram className="text-[#3B5999]" />
          </div>
          <div className=" absolute bottom-32 right-2 flex justify-center items-center rounded-md shadow-md  bg-[#fff] h-10 w-10 text-white mb-3">
            <FaLinkedinIn className="text-[#3B5999]" />
          </div>

          <div className="relative flex flex-col justify-start right-8   max-w-sm p-10 bg-white shadow-sm  rounded-md">
            <p className="font-bold text-[23px] text-[#03133D]">
              Global Statistic
            </p>
            <CircularProgress percentage={68} />

            <div className="hidden xl:block absolute -right-24 -top-8   bg-white  custom-box-shadow rounded-md p-3 ">
              <div className="text-[12px] text-[#68718B]">Sales trend</div>
              <div className="font-bold text-[32px] text-[#03133D]">68%</div>
              <img src={SalesTrend} className="h-auto w-auto pb-5" />
              <div className="w-1/2 flex flex-col justify-center items-center gap-2 absolute bottom-10 -right-4 bg-white custom-box-shadow rounded-md p-2 skeleton ">
                <div className="w-full border-2 rounded-md border-[#0097FE]"></div>
              </div>
              <div className="mt-5"></div>
              <div className="w-full flex flex-col justify-center items-center gap-2  bg-white custom-box-shadow rounded-md p-2 skeleton ">
                <div className="w-full border-2 rounded-md border-[#EDF1FC]"></div>
              </div>
            </div>

            <div className="w-full flex gap-4 pt-4 ">
              <div className="w-[130px] flex flex-col gap-2 absolute bottom-4 left-4 bg-white custom-box-shadow p-2 skeleton rounded-md">
                <div className="w-1/2 border-2 rounded-md border-[#C4D2F6]"></div>
                <div className="w-full border-2 rounded-md border-[#EDF1FC]"></div>
                <div className="w-full border-2 rounded-md border-[#EDF1FC]"></div>
              </div>
              <div className="w-[130px] flex flex-col gap-2 absolute bottom-4 right-4 bg-white custom-box-shadow p-2 skeleton rounded-md ">
                <div className="w-1/2 border-2 rounded-md border-[#C4D2F6]"></div>
                <div className="w-full border-2 rounded-md border-[#EDF1FC]"></div>
                <div className="w-full border-2 rounded-md border-[#EDF1FC]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-10 w-full lg:w-3/5 py-0 md:py-16  ">
          <CustomServices
            title="Fully Integrations"
            description="Cum sociis natoque penatibus et magnis dis parturient "
            icon={<TbGridDots />}
          />

          <CustomServices
            title="Advanced Analytics"
            description="Montes, nascetur ridiculus mus. Donec quam felis, "
            icon={<HiMiniArrowTrendingUp />}
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-full text-center mt-10">
        <Button
          title="Learn More"
          styles="hidden md:block w-[151px] py-3 text-white font-bold text-sm bg-gradient-to-br from-[#6A36FF] to-[#AC5FE6] "
        />
      </div>
    </div>
  );
};

export default BusinessContinuity;
