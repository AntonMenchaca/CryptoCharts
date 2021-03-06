import React from "react";
import { Line } from "react-chartjs-2";
import { CurrentCoinProps } from "../type/State";

const Chart: React.ComponentType<CurrentCoinProps> = function ({
  coinName,
  currentData,
}) {
  var pricePerDay = currentData.price.map((data) => {
    return data[1];
  });

  var day = currentData.price.map((data) => {
    return data[0];
  });

  return (
    <Line
      data={{
        labels: day || [0],
        fontcolor: "#1d1d1d",
        datasets: [
          {
            label: `Price of ${coinName}`,
            data: pricePerDay || [0],
            backgroundColor: "rgba(133, 231, 133, 0.6)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBackroundColor: `#1d1d1d`,
            hidden: false,
            borderWidth: 1,
          },
          {
            label: `volume of ${coinName}`,
            data: currentData?.volume,
            backgroundColor: "rgba(133, 231, 133, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            hidden: true,
            borderWidth: 1,
          },
          {
            label: `market caps of ${coinName}`,
            data: currentData?.market_caps,
            backgroundColor: "rgba(133, 231, 133, 0.6)",
            borderColor: "rgba(153, 102, 255, 1)",
            hidden: true,
            borderWidth: 1,
          },
        ],
      }}
      height={600}
      width={800}
      options={{
        legend: { labels: { fontColor: "#1d1d1d" } },
        title: {
          display: true,
          text: `${coinName} Chart`,
          fontColor: "#1d1d1d",
          fontSize: 18,
        },
        elements: { line: { fontColor: "#1d1d1d" } },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "#1d1d1d",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "#1d1d1d",
              },
            },
          ],
        },
      }}
    />
  );
};

export default Chart;
