import React from "react";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

const data = {
  labels: [
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 AM",
    "12:30 AM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
  ],
  datasets: [
    {
      data: [30, 25, 50, 35, 60, 65, 80, 75, 70],
      borderColor: "#006EEA",
      borderWidth: 4,
      pointBackgroundColor: "#ffffff",
      pointBorderColor: "#0097FE",
      pointBorderWidth: 2.5,
      pointRadius: function (context) {
        const index = context.dataIndex;
        return index === 4 ? 6 : 0; // Highlight the point at index 2 (12:30 AM)
      },
      pointHoverRadius: 8,
      tension: 0.4, // Creates the smooth curve
      fill: true, // Fills the area under the curve
      backgroundColor: "rgba(0, 88, 255, 0.1)", // Light fill color under the curve
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hides the legend
    },
    tooltip: {
      enabled: true, // Enables tooltips on hover
    },
    annotation: {
      annotations: {
        verticalLine: {
          type: "line",
          xMin: "12:30 AM", // Set the x-axis label where the vertical line should be
          xMax: "12:30 AM", // Same as xMin to make it a vertical line
          yMin: 0,
          yMax: 58,
          borderColor: "#E6E8EC", // Color of the line
          borderWidth: 1, // Thickness of the line
        },
        point1: {
          type: "point",
          xValue: "12:30 AM", // X-axis label where the point should appear
          yValue: 12, // Set Y to 0 to place it on the X-axis
          backgroundColor: "#FFFFFF", // Color of the point
          radius: 4, // Size of the point
          borderWidth: 2, // Border thickness of the point
          borderColor: "#0097FE", // Border color of the point
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hides the vertical grid lines
      },
      border: {
        display: true, // Shows the X-axis border
        color: "#ccc", // Adjust border color as needed
      },
      ticks: {
        callback: function (value, index) {
          // Show only specific labels, like every second one
          return index % 2 === 0 ? data.labels[index] : "";
        },
        maxRotation: 0,
        minRotation: 0,
      },
    },
    y: {
      min: 10,
      max: 85,
      ticks: {
        display: false, // Hides Y-axis labels
      },
      grid: {
        drawBorder: true, // Shows the Y-axis border
        color: "transparent", // Makes the grid lines transparent
      },
      border: {
        display: true, // Shows the Y-axis border
        color: "#ccc", // Adjust border color as needed
      },
    },
  },
};

const CustomLineChart: React.FC = () => {
  return (
    <div style={{ position: "relative", height: "221px", width: "455px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default CustomLineChart;
