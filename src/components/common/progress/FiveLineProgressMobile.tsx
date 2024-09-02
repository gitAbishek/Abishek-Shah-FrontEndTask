import React from "react";

interface VerticalLineProps {
  percentage: number; // Percentage of the line to be filled with a different color
  color: string; // Color of the filled portion
  defaultColor: string; // Default color for the rest of the line
  height: number; // Total height of the line
  strokeWidth: number; // Stroke width of the line
}

const RenderLine: React.FC<VerticalLineProps> = ({
  percentage,
  color,
  defaultColor,
  height,
  strokeWidth,
}) => {
  const filledHeight = (percentage / 100) * height; // Calculate the filled portion based on the percentage
  const radius = strokeWidth / 2; // Border radius

  return (
    <svg width={strokeWidth} height={height}>
      {/* Default color line with rounded corners */}
      <rect
        x={0}
        y={0}
        width={strokeWidth}
        height={height}
        fill={defaultColor}
        rx={radius} // Rounded corners
        ry={radius} // Rounded corners
      />
      {/* Filled portion line with rounded corners */}
      <rect
        x={0}
        y={height - filledHeight} // Start from the filled height
        width={strokeWidth}
        height={filledHeight} // Fill height based on percentage
        fill={color}
        rx={radius} // Rounded corners
        ry={radius} // Rounded corners
      />
    </svg>
  );
};

const FiveLineProgressMobile: React.FC = () => {
  return (
    <div className="flex space-x-1 items-start">
      {/* Line 1 */}
      <RenderLine
        percentage={90}
        color="#0097FE"
        defaultColor="#E9EDF7"
        height={25}
        strokeWidth={4}
      />

      {/* Line 2 */}
      <RenderLine
        percentage={40}
        color="#0097FE"
        defaultColor="#E9EDF7"
        height={25}
        strokeWidth={4}
      />

      <RenderLine
        percentage={70}
        color="#0097FE"
        defaultColor="#E9EDF7"
        height={25}
        strokeWidth={4}
      />

      <RenderLine
        percentage={95}
        color="#0097FE"
        defaultColor="#E9EDF7"
        height={25}
        strokeWidth={4}
      />

      {/* Line 3 */}
      <RenderLine
        percentage={20}
        color="#0097FE"
        defaultColor="#E9EDF7"
        height={25}
        strokeWidth={4}
      />
    </div>
  );
};

export default FiveLineProgressMobile;
