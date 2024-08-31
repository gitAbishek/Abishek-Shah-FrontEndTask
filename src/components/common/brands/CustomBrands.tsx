import React from "react";

interface BrandsProps {
  image: string;
  title: string;
}

const CustomBrands: React.FC<BrandsProps> = ({ image, title }) => {
  return (
    <div className="flex items-center gap-2 ">
      <img src={image} alt="trusted brands" className="h-auto w-auto" />
      <div className="text-secondary font-bold">{title}</div>
    </div>
  );
};

export default CustomBrands;
