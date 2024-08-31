import { TbBrandDatabricks } from "react-icons/tb";
import CustomServices from "../common/box/CustomServices";
import CustomTitle from "../common/custom/CustomTitle";
import { TfiTimer } from "react-icons/tfi";
import { FaLock, FaDesktop } from "react-icons/fa";
import TestLineChart from "../Chart/ChartTest";

const DataAnalytics = () => {
  return (
    <div className="w-full pt-16 px-10 md:px-[120px]">

      <div className="w-full flex justify-center mb-5">
        <CustomTitle
          title="We optimize marketing for business continuity"
          styles="text-[#14358A]"
        />
      </div>

      <div className="w-full flex flex-col gap-10 md:gap-10 ">
        <div className="flex flex-col md:flex-row gap-10 justify-between ">
          <CustomServices
            title="Real Time Data Analytics"
            titleStyles="max-w-full"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur  "
            icon={<TfiTimer />}
            button
          />

          <div>
            <div className="text-white bg-none text-3xl py-10  rounded-md">
              <TestLineChart />
              {/* <LineChart data={storeChartsData || []} /> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 justify-between ">
          <CustomServices
            title="Accurate Data Science"
            titleStyles="max-w-full"
            description="Cum sociis natoque penatibus et magnis dis parturient "
            icon={<TbBrandDatabricks />}
            button
          />
          <CustomServices
            title="Safely Security"
            titleStyles="max-w-full"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur  "
            icon={<FaLock />}
            button
          />
        </div>

        <div className="flex flex-col md:flex-row gap-10 justify-between ">
          <CustomServices
            title="Multiple Platform"
            titleStyles="max-w-full"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur  "
            icon={<FaDesktop />}
            button
          />
          <CustomServices
            title="Accurate Data Science"
            titleStyles="max-w-full"
            description="Cum sociis natoque penatibus et magnis dis parturient "
            icon={<TbBrandDatabricks />}
            button
          />
        </div>
      </div>
    </div>
  );
};

export default DataAnalytics;
