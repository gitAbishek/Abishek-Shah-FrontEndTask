import Button from "../../button/CustomButton";

interface SocialMediaProps {
  icon: any;
  title: string;
  description: string;
}

const  CustomSocialMediaBox: React.FC<SocialMediaProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center  rounded-md h-full z-20 ">
      <div className="w-full flex justify-center items-center bg-[#EAF7FF] p-5 rounded-t-md">
        <div className="flex justify-center items-center rounded-md text-center bg-[#006EEA] h-10 w-10 text-white">
          {icon}
        </div>
      </div>
      <div className="text-center w-full  bg-white rounded-b-md p-5 ">
        <div className="text-[#006FBA] font-bold text-[24] mb-2">{title}</div>
        <p className="max-w-md mb-5 text-[#68718B]  text-[16px] leading-5">
          {description}
        </p>
        <Button
          title="Learn More"
          styles="w-full md:w-[100px] py-2 text-white font-bold text-sm bg-gradient-to-br from-[#6A36FF] to-[#AC5FE6]"
        />
      </div>
    </div>
  );
};

export default CustomSocialMediaBox;
