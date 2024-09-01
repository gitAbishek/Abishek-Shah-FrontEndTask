import CustomServices from "../common/box/CustomServices";
import CustomTitle from "../common/custom/CustomTitle";
import { TfiTimer } from "react-icons/tfi";
import { FaLock, FaDesktop, FaTwitter } from "react-icons/fa";
import TestLineChart from "../Chart/ChartTest";
import { FaSquareFacebook } from "react-icons/fa6";
import CreditBalance from "../common/CreditBalance";
import ShadowGraph from "../../assets/dashboard/Shadow.png";
import Shield from "../../assets/analytics/Shield.png";
import SalesTrend from "../../assets/continuity/salesTrend.png";
import GraphPercentage from "../../assets/continuity/data.png";
const DataAnalytics = () => {
  return (
    <div className="w-full pt-16 px-10 md:px-[120px]">
      <div className="w-full flex justify-center mb-5 md:mb-20">
        <CustomTitle
          title="We make it easy to track all data analytics"
          styles="text-[#14358A]"
        />
      </div>

      <div className="w-full flex flex-col gap-10 md:gap-10 ">
        <div className="w-full flex flex-col md:flex-row gap-16 justify-between ">
          <CustomServices
            title="Real Time Data Analytics"
            titleStyles="max-w-full"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur  "
            icon={<TfiTimer />}
            button
          />

          <div className="w-full flex justify-start">
            <div className="relative mt-32 md:mt-10 ">
              <div className="absolute -top-20 left-5 flex justify-center items-center rounded-md shadow-md  bg-[#006EEA] h-10 w-10 text-white mb-3">
                <FaSquareFacebook className="text-[#fff]" />
              </div>
              <div className="absolute top-0 left-32 flex justify-center items-center rounded-md shadow-md  bg-[#0298EB] h-10 w-10 text-white mb-3">
                <FaTwitter className="text-[#fff]" />
              </div>
              <div className="flex flex-col justify-center md:justify-start items-center absolute right-4 md:right-20 -top-28 md:-top-36 rounded-md bg-gradient-to-tl from-[#AC60E5] to-[#0C87F0] p-2 md:p-5 z-[1000]">
                <div className="font-bold text-[12px] md:text-[18px] text-white ">
                  Traffic Growth
                </div>
                <div className="text-white text-[8px] md:text-[12px]">
                  Total traffic growth of 45%
                </div>
                <div className="flex justify-center items-center mt-2 md:mt-4">
                  <div className="flex flex-col justify-center items-center rounded-full h-20  md:h-28 w-20 md:w-28 border-[10px] border-[#0397FE]">
                    <div className="text-white text-[8px] md:text-[14px]">
                      Facebook
                    </div>
                    <div className="font-bold text-[12px] md:text-[24px] text-white">
                      36%
                    </div>
                  </div>
                </div>
              </div>
              <TestLineChart />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-16 justify-between mt-0 md:mt-10 ">
          <div className="w-full  mb-20 md:mb-0">
            <div className="max-w-sm p-5">
              <CreditBalance />
            </div>
            <div className="relative">
              <img
                src={ShadowGraph}
                alt="GraphHorizontal"
                className="w-auto h-auto"
              />
              <div className="w-2/3 md:w-1/3 flex flex-col justify-center items-center gap-2 absolute top-28 left-4 bg-white custom-box-shadow rounded-md p-4 skeleton ">
                <div className="w-full border-4 rounded-md border-[#0097FE]"></div>
              </div>
              <div className="w-2/3 md:w-1/3 flex flex-col justify-center items-center gap-2 absolute top-40 left-12 bg-white custom-box-shadow rounded-md p-4 skeleton opacity-50 ">
                <div className="w-full border-4 rounded-md border-[#0097FE] opacity-10"></div>
              </div>
              <img
                src={Shield}
                alt="Shield"
                className="absolute right-4 md:right-36 bottom-4 md:bottom-[10px] w-20 md:w-32 h-20 md:h-32"
              />
            </div>
          </div>
          <CustomServices
            title="Safely Security"
            titleStyles="max-w-full"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur  "
            icon={<FaLock />}
            button
          />
        </div>

        <div className="w-full flex flex-col md:flex-row gap-16 justify-between items-end mt-10 md:mt-20 ">
          <div className="w-full mb-20 md:mb-0">
            <CustomServices
              title="Multiple Platform"
              titleStyles="max-w-full"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur  "
              icon={<FaDesktop />}
              button
            />
          </div>
          <div className=" w-full flex flex-col justify-start items-start right-0 ">
            <div className="relative w-full flex  justify-start items-end mb-5">
              <div className="flex gap-1">
                <span className="h-2 w-2 bg-[#C58DF0] rounded-full"></span>
                <span className="h-2 w-2 bg-[#FFCC5E] rounded-full"></span>
                <span className="h-2 w-2 bg-[#40E986] rounded-full"></span>
              </div>
              <div className="w-[100px] flex gap-1 flex-col    bg-gradient-to-tr from-[#AC60E5] to-[#0C87F0] p-2  rounded-md absolute right-0 md:right-1/2 ">
                <div className="w-1/2 border-2 rounded-md border-[#fff] mb-2"></div>
                <div className="w-full border-2 rounded-md border-[#fff] mb-1"></div>
                <div className="w-full border-2 rounded-md border-[#fff]"></div>
              </div>
            </div>
            <div className="flex gap-2 ">
              <div className="w-full p-2 bg-white shadow-sm">
                <div className="text-[#68718B] text-[13px]">Sales trend</div>
                <div className="text-[#03133D] text-[34px] font-bold">68%</div>
                <img src={SalesTrend} alt="graph" className="h-auto w-auto" />
                <div className="flex gap-2 flex-col mt-4">
                  <div className="w-1/2 border-[4px] rounded-md border-[#EDF1FC]"></div>
                  <div className="w-full border-[4px] rounded-md border-[#EDF1FC]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1 justify-center items-center w-full p-2 bg-white shadow-sm">
                <img
                  src={GraphPercentage}
                  alt="graph"
                  className="h-auto w-auto"
                />

                <div className="flex justify-center items-start  gap-1  mt-0">
                  <div>
                    <div className="text-[#060C3C] text-[21px] font-bold">
                      62%
                    </div>
                    <div className="text-[#68718B] text-[13px]">July</div>
                  </div>
                  <div className="border-[0.11px] h-10 mx-2 mt-2"></div>
                  <div>
                    <div className="text-[#060C3C] text-[21px] font-bold">
                      38%
                    </div>
                    <div className="text-[#68718B] text-[13px]">August</div>
                  </div>
                </div>

                <div className="w-full flex gap-2 flex-col mt-4">
                  <div className="w-full border-[4px] rounded-md border-[#EDF1FC]"></div>
                  <div className="flex gap-2 ">
                    <div className="w-full border-[4px] rounded-md border-[#EDF1FC]"></div>
                    <div className="w-full border-[4px] rounded-md border-[#EDF1FC]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalytics;
