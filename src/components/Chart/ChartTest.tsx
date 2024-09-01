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
  ChartOptions,
} from "chart.js";

// Extend the ChartOptions with annotation options
interface ExtendedChartOptions extends ChartOptions<"line"> {
  plugins?: {
    legend?: {
      display: boolean;
    };
    tooltip?: {
      enabled: boolean;
    };
    annotation?: {
      annotations: {
        [key: string]: any;
      };
    };
  };
}

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
      pointRadius: function (context: { dataIndex: number }) {
        const index = context.dataIndex;
        return index === 4 ? 6 : 0; // Highlight the point at index 4 (12:30 AM)
      },
      pointHoverRadius: 8,
      tension: 0.4,
      fill: true,
      backgroundColor: "rgba(0, 88, 255, 0.1)",
    },
  ],
};

// Type the options object properly
const options: ExtendedChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
    annotation: {
      annotations: {
        verticalLine: {
          type: "line",
          xMin: "12:30 AM",
          xMax: "12:30 AM",
          yMin: 0,
          yMax: 58,
          borderColor: "#E6E8EC",
          borderWidth: 1,
        },
        point1: {
          type: "point",
          xValue: "12:30 AM",
          yValue: 12,
          backgroundColor: "#FFFFFF",
          radius: 4,
          borderWidth: 2,
          borderColor: "#0097FE",
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: true,
        color: "#ccc",
      },
      ticks: {
        callback: function (value: string | number) {
          // Correct typing for callback function
          const index = Number(value);
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
        display: false,
      },
      grid: {
        color: "transparent",
      },
      border: {
        display: true,
        color: "#ccc",
      },
    },
  },
};

const CustomLineChart: React.FC = () => {
  return (
    <div
      style={{ position: "relative" }}
      className="right-3 z-10 h-[200px] md:h-[225px] w-[330px] md:w-[330px] lg:w-[500px]"
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default CustomLineChart;
