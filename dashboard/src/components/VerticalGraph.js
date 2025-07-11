import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Holdings',
    },
  },
};

export function VerticalGraph({ data }) {
  if (
    !data ||
    !Array.isArray(data.labels) ||
    !Array.isArray(data.datasets) ||
    data.datasets.length === 0 ||
    !Array.isArray(data.datasets[0].data)
  ) {
    return <p>No chart data available</p>;
  }

  return <Bar options={options} data={data} />;
}
