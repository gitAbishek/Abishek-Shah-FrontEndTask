interface Props {
  title: string;
  icon: any;
  amount: string;
  reverse?: boolean;
}

const CustomAnalyticBox: React.FC<Props> = ({
  title,
  icon,
  amount,
  reverse,
}) => {
  return (
    <div
      className={`flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } gap-2 md:gap-5 border-[0.1px] p-1 md:p-3 rounded-md `}
    >
      <div className=" flex justify-center items-center rounded-full h-8 md:h-[56px] w-8 md:w-[56px] bg-[#F6F7FE]">
        {icon}
      </div>
      <div className="flex flex-col justify-center ">
        <div className="text-[5px] md:text-xs text-[#CDD0D8] font-medium">{title}</div>
        <h1 className="font-bold text-[8px] md:text-[24px]">{amount}</h1>
      </div>
    </div>
  );
};

export default CustomAnalyticBox;
