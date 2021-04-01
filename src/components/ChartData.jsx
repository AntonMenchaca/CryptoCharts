import React, {Component, useEffect} from 'react';

let ChartData = ({currentData}) => {

  useEffect(() => {
    getCoinData(currentData)
  }, [currentData]);

  var lowestPrice;
  var highestPrice;
  var lowestDay;
  var highestDay;
  var avgPrice;

  let getCoinData = (data) => {
    if (data) {
    lowestPrice= data?.price[0][1];
    console.log(lowestPrice)
    highestPrice= data?.price[0][1];
    console.log(highestPrice)
    data?.price?.map((data, i) => {
      if (lowestPrice > data[1]) {
        lowestPrice = data[1];
        lowestDay = i;
      }
      if (highestPrice < data[1]) {
        highestPrice = data[1];
        highestDay = i;
      }
      avgPrice += data[1];
    });
   avgPrice = avgPrice/data?.price?.length - 1;
   highestDay = data?.price[highestDay][0];
   lowestDay = data?.price[lowestDay][0];
    }

  }

  return (
    <div>
      <h1>{highestPrice}</h1>
    </div>
  )
}

export default ChartData;