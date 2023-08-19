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
      //   const newChartData = {
      //     data1: {
      //       labels: Object.keys(data.cases),
      //       values: Object.values(data.cases),
      //     },
      //     data2: {
      //       labels: Object.keys(data.deaths),
      //       values: Object.values(data.deaths),
      //     },
      //     data3: {
      //       labels: Object.keys(data.recovered),
      //       values: Object.values(data.recovered),
      //     },
      //   };

      //   setChartData(newChartData);
      //   createChart(newChartData); // Call createChart after setting chartData
      //   console.log("data", data);
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
          },
          {
            label: "Deaths",
            data: Object.values(data.deaths),
            borderColor: "rgba(255, 0, 0, 1)",
            borderWidth: 2,
          },
          {
            label: "Recovered",
            data: Object.values(data.recovered),
            borderColor: "rgba(0, 255, 0, 1)",
            borderWidth: 2,
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
    // new Chart(ctx, {
    //   type: "line",
    //   data: {
    //     labels: data.data1.labels,
    //     datasets: [
    //       {
    //         label: "CASES",
    //         data: data.data1.values,
    //         borderColor: "rgba(75, 192, 192, 1)",
    //         borderWidth: 2,
    //       },
    //       {
    //         label: "DEATHS",
    //         data: data.data2.values,
    //         borderColor: "rgba(255, 0, 0, 1)",
    //         borderWidth: 2,
    //       },
    //       {
    //         label: "RECOVERED",
    //         data: data.data3.values,
    //         borderColor: "#1dae3a",
    //         borderWidth: 2,
    //       },
    //     ],
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //       },
    //     },
    //   },
    // });
  };

  return (
    <div className="line-chart">
      <h1>CHARTS AND MAPS</h1>
      <canvas id="line-chart"></canvas>
    </div>
  );
};

export default LineChart;
