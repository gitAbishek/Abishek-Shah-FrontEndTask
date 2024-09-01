import { BsThreeDots } from "react-icons/bs";
import GraphAnalytics from "../../assets/dashboard/Graph.png";

const CreditBalance = () => {
  return (
    <div className="w-full flex rounded-xl overflow-hidden h-[50px] md:h-[92px]">
      <div className="w-3/5 flex flex-col justify-center bg-[#7545FF] pl-3 rounded-l-xl">
        <div>
          <p className="text-white font-medium text-[7px] md:text-[16px]">
            Credit Balance
          </p>
          <p className="text-white font-bold text-[11px] md:text-[32px]">
            $25,512
          </p>
        </div>
      </div>

      <div className="relative w-2/5 flex flex-col gap-2 md:gap-5 justify-end items-end bg-[#527FED] p-1 md:p-3">
        <div className="absolute top-0 left-[-10px] md:left-[-40px] h-full w-[10px] md:w-[80px] bg-[#7545FF] transform -skew-x-[30deg] hidden md:block"></div>

        <BsThreeDots color="white" size={32} />
        <img src={GraphAnalytics} alt="Graph" className="h-5 w-16" />
      </div>
    </div>
  );
};

export default CreditBalance;
