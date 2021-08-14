import React, {memo} from "react";
import {Bar} from "react-chartjs-2";

const Graph = ({top3}) => {
  const labels = top3.map(v => v[0]);
  const values = top3.map(v => v[1]);

  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'HISTOGRAM TOP 3 WORDS'
      },
      legend: {
        display: false,
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 1,
        },
      }],
    },
  };

  return (
    <Bar data={data} options={options} height={100} className="mb-3"/>
  )
}

export default memo(Graph);
