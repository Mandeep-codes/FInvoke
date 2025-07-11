import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {
  if (
    !data ||
    !Array.isArray(data.labels) ||
    !Array.isArray(data.datasets) ||
    data.datasets.length === 0 ||
    !Array.isArray(data.datasets[0].data)
  ) {
    return <p>No chart data available</p>;
  }

  return <Doughnut data={data} />;
}
