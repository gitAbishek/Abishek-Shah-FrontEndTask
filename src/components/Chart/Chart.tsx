import React from "react";
import { Line } from "react-chartjs-2";
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

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type LineProps = {
  name: string;
  value: number;
};

interface Props {
  data: LineProps[];
}

const LineChart: React.FC<Props> = ({ data }) => {
  const chartData = {
    labels: data.map((data: LineProps) => data.name),
    datasets: [
      {
        label: "Income",
        data: data.map((data: LineProps) => data.value),
        backgroundColor: "#064FF0",
        borderColor: "#064FF0",
        fill: false,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category" as const,
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        type: "linear" as const,
        title: {
          display: true,
          text: "Income",
        },
        ticks: {
          callback: (value) => `${value}`, // Format Y-axis as percentage
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}`, // Tooltip formatting
        },
      },
      title: {
        display: true,
        text: "Income Over Time",
        align: "start",
        // color: "#FF5733",
        font: {
          size: 18,
        },
      },
    },
  };

  return (
    <div className="text-white bg-none h-[50vh] text-center text-3xl">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
