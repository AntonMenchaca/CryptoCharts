import React, {useState} from 'react';

let ChartInfo = ({updateGraph, currentData}) => {
// lets pull up current news on a crypto currency to be put on the second panel
const [state, setState] = useState({
  coinName: "",
  from: "",
  to: ""
  })

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
    console.log(state.from)
  }

  function handleSubmit(evt) {
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
          onChange={handleChange}
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
    </form>
    <button type="submit" form="searchCoin" value="Submit">Submit</button>
    </div>
    <div id="CoinNews"></div>
    </div>
  )
}

export default ChartInfo;