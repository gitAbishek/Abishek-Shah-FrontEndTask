import Button from "../../button/CustomButton";
import CustomBorder from "../border/CustomBorder";

interface SocialMediaProps {
  icon: any;
  title: string;
  description: string;
}

const CustomSocialMediaBox: React.FC<SocialMediaProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <>
      <div className="relative w-full flex flex-col justify-center bg-white   items-center  rounded-md h-full z-20 ">
        <div className="relative flex w-full justify-center items-center bg-[#EAF7FF]  py-16 social-media-bg rounded-md"></div>

        <div className="relative flex  justify-center text-center w-full  bg-white rounded-b-md p-5 ">
          <div className="absolute  -top-[72px] flex justify-center items-center rounded-md text-center bg-[#006EEA] h-14 w-14 text-white">
            {icon}
          </div>
          <CustomBorder
            width="100px"
            height="60px"
            borderWidth="1px"
            borderColor="#0097FE"
            skewDegree={8}
            showTopBorder={true}
            showBottomBorder={true}
            showLeftBorder={true}
            showRightBorder={false}
            styles="z-50 absolute right-0 -top-16 opacity-40 "
          />
          <div>
            <div className="text-[#006FBA] font-bold text-[24] mb-2">
              {title}
            </div>
            <p className="max-w-md mb-5 text-[#68718B]  text-[16px] leading-5">
              {description}
            </p>
            <div className="flex justify-center">
              <Button
                title="Learn More"
                styles="w-full md:w-[100px] py-2 text-white font-bold text-sm bg-gradient-to-br from-[#6A36FF] to-[#AC5FE6]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomSocialMediaBox;
