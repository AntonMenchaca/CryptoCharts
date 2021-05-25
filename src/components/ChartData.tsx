import React from 'react';
import {arrayOfNumArrays} from '../type/State';

interface CoinData {
  currentData: arrayOfNumArrays
}

let ChartData: React.FC<CoinData>  = ({currentData})  => {
    return (
      <div id="currentPriceInfo">
        <p>Highest Value: ${currentData?.highestPrice?.toFixed(4)}</p>
        <p>Lowest Value: ${currentData?.lowestPrice?.toFixed(4)}</p>
        <p>Highest Day: {currentData?.highestDay}</p>
        <p>Lowest Day: {currentData?.lowestDay}</p>
        <p>Average Value: ${currentData?.avgPrice?.toFixed(4)}</p>
      </div>
    )
}


export default ChartData;