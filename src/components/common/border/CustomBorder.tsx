import React from "react";

interface CustomBorderProps {
  width?: string;
  height?: string;
  borderWidth?: string;
  borderColor?: string;
  skewDegree?: number;
  showTopBorder?: boolean;
  showBottomBorder?: boolean;
  showLeftBorder?: boolean;
  showRightBorder?: boolean;
  styles?: string;
}

const CustomBorder: React.FC<CustomBorderProps> = ({
  width = "150px",
  height = "20px",
  borderWidth = "1px",
  borderColor = "#0097FE",
  skewDegree = 10,
  showTopBorder = true,
  showBottomBorder = true,
  showLeftBorder = true,
  showRightBorder = true,
  styles,
}) => {
  const borderStyles = {
    borderTop: showTopBorder ? `${borderWidth} solid ${borderColor}` : "none",
    borderBottom: showBottomBorder
      ? `${borderWidth} solid ${borderColor}`
      : "none",
    borderLeft: showLeftBorder ? `${borderWidth} solid ${borderColor}` : "none",
    borderRight: showRightBorder
      ? `${borderWidth} solid ${borderColor}`
      : "none",
  };

  return (
    <div className={`${styles}`} style={{ width, height }}>
      <div
        style={{
          ...borderStyles,
          transform: `skewY(-${skewDegree}deg)`,
          transformOrigin: "top left",
          width: `calc(100% / cos(${skewDegree}deg))`,
          height: `calc(100% * cos(${skewDegree}deg))`,
        }}
      ></div>
    </div>
  );
};

export default CustomBorder;
