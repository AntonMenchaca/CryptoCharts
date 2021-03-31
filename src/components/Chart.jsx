import React from 'react';
import {Line} from 'react-chartjs-2';

// i need to pass the lowest and highest as state
const Chart = ({coinName, currentData}) => {
  var pricePerDay = currentData?.price.map((data) => {
    return data[1]
  });
  var day = currentData?.price.map((data) => {
    return data[0]
  })

    return (
      <Line
      data={{ labels:  day || [0],
          datasets: [{
              label: `Price of ${coinName}`,
              data:  pricePerDay || [0],
              backgroundColor:'rgba(63, 191, 63, 0.5)',
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,

          },
          {
              label: `volume of ${coinName}`,
              data:  currentData.volume || [0],
              backgroundColor:'rgba(255, 99, 132, 0.2)',
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              hidden: true,
              borderWidth: 1,

          },
          {
              label: `market caps of ${coinName}`,
              data:  currentData.market_caps || [0],
              backgroundColor:'rgba(255, 99, 132, 0.2)',
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              hidden: true,
              borderWidth: 1,

          }
          ]}}
          height={500}
      width={800}
      />
    )


  }

  export default Chart;