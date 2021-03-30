import React from 'react';
import {Line} from 'react-chartjs-2';


const Chart = ({coinName}) => {
    return (
      <Line

      data={{ labels:  [0],
          datasets: [{
              label: `Price of ${coinName}`,
              data:  [0],
              backgroundColor:'rgba(255, 99, 132, 0.2)',
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,

          }]}}
          height={500}
      width={800}
      />
    )


  }

  export default Chart;