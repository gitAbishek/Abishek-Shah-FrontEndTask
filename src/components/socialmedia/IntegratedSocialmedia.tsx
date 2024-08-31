import { BsTwitterX } from "react-icons/bs";
import CustomSocialMediaBox from "../common/socialMedia/CustomSocialMediaBox";
import { FaFacebookF } from "react-icons/fa6";
import { GrGoogle } from "react-icons/gr";
import CustomBorder from "../common/border/CustomBorder";

const IntegratedSocialMedia = () => {
  return (
    <div className="mt-20">
      <div className="h-20"></div>
      <div className="separator-bottomTopRightSocialMedia"></div>
      <div className="relative bg-[#14358A] py-20 px-6 md:px-[120px] z-10">
        <CustomBorder
          width="200px"
          height="80px"
          borderWidth="1px"
          borderColor="#0097FE"
          skewDegree={5}
          showTopBorder={true}
          showBottomBorder={true}
          showLeftBorder={false}
          showRightBorder={true}
          styles="z-10 absolute left-0 -top-12 opacity-40 "
        />
        <div className="absolute bg-[#0097FE] w-28 h-14 clip-path-polygon-mobile  md:clip-path-polygon opacity-30 left-0 bottom-0 hidden md:block "></div>
        <div className="text-center font-bold text-[32px] md:text-[48px]  text-white mb-12">
          Integrated with Social Media
        </div>
        <div className="relative w-full flex flex-col md:flex-row justify-between  gap-5 px-0  md:px-20 mb-10 md:mb-0 ">
          <CustomBorder
            width="50px"
            height="100px"
            borderWidth="1px"
            borderColor="#0097FE"
            skewDegree={8}
            showTopBorder={true}
            showBottomBorder={true}
            showLeftBorder={false}
            showRightBorder={true}
            styles="z-10 absolute right-10 top-0 opacity-40 hidden md:block "
          />
          <CustomSocialMediaBox
            icon={<FaFacebookF />}
            title="Facebook"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisrisus dui faucibus eu."
          />
          <CustomSocialMediaBox
            icon={<BsTwitterX />}
            title="Twitter"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisrisus dui faucibus eu."
          />
          <CustomSocialMediaBox
            icon={<GrGoogle />}
            title="Google"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisrisus dui faucibus eu."
          />
        </div>
        <div className="hidden md:block absolute bg-[#0097FE] w-[200px] md:w-40 h-16 clip-path-polygon-mobile  md:clip-path-polygon  right-0 top-[129px]  "></div>
      </div>
      <div className="separator-bottomTopRightBottomSocialMedia"></div>
      <div className="h-20"></div>
    </div>
  );
};

export default IntegratedSocialMedia;
