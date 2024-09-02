import React from "react";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";

interface CircularProgressProps {
  percentage: number;
}

interface RenderCircleProps {
  color: string;
  strokeWidth: number;
  dashOffset: number;
  size: string;
  radius: number;
  circumference: number;
}

const RenderCircle: React.FC<RenderCircleProps> = ({
  color,
  strokeWidth,
  dashOffset,
  size,
  radius,
  circumference,
}) => (
  <svg
    className={`absolute top-0 left-0 w-${size} h-${size}`}
    width="100%"
    height="100%"
    viewBox="0 0 120 120"
  >
    <circle
      cx="60"
      cy="60"
      r={radius}
      stroke="#E5E7EB" // Light gray for the background circle
      strokeWidth={strokeWidth}
      fill="transparent"
    />
    <circle
      cx="60"
      cy="60"
      r={radius}
      stroke={color}
      strokeWidth={strokeWidth}
      fill="transparent"
      strokeDasharray={circumference}
      strokeDashoffset={dashOffset}
      strokeLinecap="round"
      className="transition-stroke duration-300 ease-out"
      transform="rotate(90 60 60)" // Rotate to start from the bottom
    />
  </svg>
);

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-56 h-56 flex items-center justify-center">
        <RenderCircle
          color="#0097FE"
          strokeWidth={4}
          dashOffset={circumference - (60 / 100) * circumference}
          size="full"
          radius={radius}
          circumference={circumference}
        />

        <div className="relative w-44 h-44 flex items-center justify-center">
          <RenderCircle
            color="#AC5FE6"
            strokeWidth={5}
            dashOffset={circumference - (65 / 100) * circumference}
            size="full"
            radius={radius}
            circumference={circumference}
          />

          <div className="relative w-32 h-32 flex items-center justify-center">
            <RenderCircle
              color="#FFAE00"
              strokeWidth={6}
              dashOffset={circumference - (80 / 100) * circumference}
              size="full"
              radius={radius}
              circumference={circumference}
            />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <div className="flex justify-center items-center h-5 w-5 bg-[#EBF7FF] rounded-full p-1 ">
                <HiMiniArrowTrendingUp className="text-[#0097FE]" />
              </div>
              <div className="text-[#03133D] text-[9px]">Traffic Growth</div>
              <div className="font-bold text-[26px] text-[#03133D]">{percentage}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
