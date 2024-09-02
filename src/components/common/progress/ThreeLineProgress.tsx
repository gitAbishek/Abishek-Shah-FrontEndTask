import React from "react";

interface VerticalLineProps {
  percentage: number; // Percentage of the line to be filled with a different color
  color: string; // Color of the filled portion
  height: number; // Total height of the line
  strokeWidth: number; // Stroke width of the line
  defaultOpacity?: number; // Opacity for the default color (0 to 1)
}

const RenderLine: React.FC<VerticalLineProps> = ({
  percentage,
  color,
  height,
  strokeWidth,
  defaultOpacity = 1,
}) => {
  const filledHeight = (percentage / 100) * height; // Calculate the filled portion based on the percentage
  const radius = strokeWidth / 2; // Border radius

  return (
    <svg width={strokeWidth} height={height}>
      {/* Default color line with rounded corners and opacity */}
      <rect
        x={0}
        y={0}
        width={strokeWidth}
        height={height}
        fill="transparent" // Set the default color to transparent
        fillOpacity={defaultOpacity} // Apply opacity to the default color
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

const ThreeLineProgress: React.FC = () => {
  return (
    <div className="flex space-x-[4px] items-start">
      {/* Line 1 */}
      <RenderLine
        percentage={70}
        color="#0097FE"
        height={30}
        strokeWidth={6}
        defaultOpacity={0.5} // Optional: Set default opacity
      />

      {/* Line 2 */}
      <RenderLine
        percentage={100}
        color="#0097FE"
        height={30}
        strokeWidth={6}
        defaultOpacity={0.5}
      />

      <RenderLine
        percentage={40}
        color="#0097FE"
        height={30}
        strokeWidth={6}
        defaultOpacity={0.5}
      />
    </div>
  );
};

export default ThreeLineProgress;
