interface Props {
  title: string;
  icon: any;
  amount: string;
  price: string;
  iconStyle?: string;
}

const CustomSocialMediaBox: React.FC<Props> = ({
  title,
  icon,
  amount,
  price,
  iconStyle,
}) => {
  return (
    <div className={`flex justify-between items-center  rounded-md `}>
      <div className="flex  gap-2">
        <div
          className={`flex justify-center items-center rounded-full h-7 md:h-12 w-7  md:w-12 bg-[#F6F7FE] text-xs md:text-xl  ${iconStyle}`}
        >
          {icon}
        </div>
        <div className="flex flex-col justify-center ">
          <div className="text-[5px] md:text-[14px]  font-bold ">{title}</div>
          <h1 className=" text-[#CDD0D8] text-[5px] md:text-[14px] font-medium">{amount}</h1>
        </div>
      </div>

      <div className="font-bold text-[5px] md:text-[14px] text-[#1B2559]">{price}</div>
    </div>
  );
};

export default CustomSocialMediaBox;
