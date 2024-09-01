import { FaArrowRight } from "react-icons/fa6";
import Button from "../button/CustomButton";


const Dashboard = () => {
  return (
    <>
      <div className="relative w-full px-5  md:px-[120px] pt-[1px] md:pt-[80px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center w-full md:max-w-3xl text-white font-bold text-[40px] md:text-[60px] mt-4 md:mt-0 mb-4 leading-tight">
            Advanced analytics to grow your business
          </h1>
          <h3 className="max-w-sm text-center  text-[#E6E8EC] mt-4 text-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id
            nisl tellus rhoncus, imperdiet
          </h3>

          <div className="w-full flex flex-col justify-center md:flex-row gap-5 pt-10">
            <Button
              title="Start Now"
              styles="w-full md:w-[130px] py-3 text-white font-bold text-[18px] bg-gradient-to-br from-[#6A36FF] to-[#AC5FE6]  hover:text-[#fff] hover:border hover:border-[#7C51FF] hover:bg-none "
            />
            <Button
              title="Trial"
              styles="w-full md:w-[130px] font-bold text-[18px] py-3 text-white border border-md hover:bg-gradient-to-br hover:from-[#6A36FF] hover:to-[#AC5FE6] hover:border-transparent"
              icon={<FaArrowRight />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
