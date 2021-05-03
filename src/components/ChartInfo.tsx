import React, {useState, useEffect} from 'react';
import ChartDataContainer from '../containers/ChartDataContainer';
import { Button } from '@material-ui/core';
import NewsCarouselContainer from '../containers/NewsCarousel';

interface PriceRange {
  name: string;
  to: string;
  from: string;
}

interface Graph {
   updateGraph: (priceObj: PriceRange) => void
   currentData: any
}

let ChartInfo = ({updateGraph, currentData}: Graph) => {
const [state, setState] = useState({
  coinName: "",
  from: "",
  to: ""
  })


  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
    console.log(state.from)
  }

  function handleSubmit(evt: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    return updateGraph({name: state.coinName.toLowerCase(), from: state.from, to:state.to});
  }

  return (
    <div id="chartInfo">
    <div id="coinData">
    <form id="searchCoin" onSubmit={handleSubmit}>
    <label>
        Coin:
        <input
          type="text"
          name="coinName"
          value={state.coinName}
          onChange={handleSubmit}
          placeholder="Bitcoin"
          required={true}
        />
      </label>
      <label>
        From:
        <input
          type="date"
          name="from"
          value={state.from}
          onChange={handleChange}
          placeholder="DD-MM-YYY"
          required= {true}
        />
      </label>
      <label>
        To:
        <input
          type="date"
          name="to"
          value={state.to}
          onChange={handleChange}
          placeholder="DD-MM-YYY"
          required= {true}
        />
      </label>
      <Button type="submit" form="searchCoin" value="Submit" variant="contained" color="primary">Submit</Button>
    </form>

    <div>
      {currentData ? <ChartDataContainer /> : <h1>none</h1>}
    </div>
    </div>
    <div id="coinNews">
      <NewsCarouselContainer />
    </div>
    </div>
  )
}

export default ChartInfo;