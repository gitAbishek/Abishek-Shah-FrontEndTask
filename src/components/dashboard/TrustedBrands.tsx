import LayersImage from "../../assets/companieslogo/layer.png";
import QuotientImage from "../../assets/companieslogo/quotient.png";
import Circooles from "../../assets/companieslogo/circooles.png";
import HourGlass from "../../assets/companieslogo/hourglass.png";
import CommandPlusR from "../../assets/companieslogo/command.png";
import CustomBrands from "../common/brands/CustomBrands";

const TrustedBrands = () => {
  return (
    <div className="flex gap-5 flex-wrap justify-between w-full px-5  md:px-[120px] py-10">
      <CustomBrands image={LayersImage} title="Layers" />
      <CustomBrands image={QuotientImage} title="Quotient" />
      <CustomBrands image={Circooles} title="Circooles" />
      <CustomBrands image={HourGlass} title="Hourglass" />
      <div className="hidden md:block">
        <CustomBrands image={CommandPlusR} title="Command+R" />
      </div>
    </div>
  );
};

export default TrustedBrands;
