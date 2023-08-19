import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { useQuery } from "react-query";
import { fetchData } from "../api";

const LineChart = () => {
  const { data, isLoading, isError, error } = useQuery("data", fetchData);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data) {
      createChart(data);
    }
  }, [data]);

  const createChart = (data) => {
    const labels = Object.keys(data.cases);
    const ctx = document.getElementById("line-chart").getContext("2d");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Cases",
            data: Object.values(data.cases),
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            tension: 0,
          },
          {
            label: "Deaths",
            data: Object.values(data.deaths),
            borderColor: "rgba(255, 0, 0, 1)",
            borderWidth: 2,
            tension: 0,
          },
          {
            label: "Recovered",
            data: Object.values(data.recovered),
            borderColor: "rgba(0, 255, 0, 1)",
            borderWidth: 2,
            tension: 0,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  return (
    <div className="line-chart">
      <h1>CHARTS AND MAPS</h1>
      <canvas id="line-chart"></canvas>
    </div>
  );
};

export default LineChart;
