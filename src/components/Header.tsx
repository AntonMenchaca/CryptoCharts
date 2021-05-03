import React from 'react';

var Header = ({ethPrice, bitcoinPrice, litecoinPrice, ripplePrice}) => {

  return (
    <div id="header">
    <div className= 'logo-header'>
    <img src="../../../images/logo.png"></img>
     <h1>CryptoCharts</h1></div>

     {ethPrice ? <div className="prices-header">
     <div id="BTC">
     <h2>BTC:</h2>
     <h3>${bitcoinPrice?.usd}</h3>
     <h3>{bitcoinPrice?.usd_24h_change?.toFixed(4) }%</h3>
     </div>
     <div id="ETH">
     <h2>ETH:</h2>
     <h3>${ethPrice?.usd }</h3>
     <h3>{ethPrice?.usd_24h_change?.toFixed(4) }%</h3>
      </div>
     <div id="LTC">
     <h2>LTC:</h2>
     <h3>${litecoinPrice?.usd }</h3>
     <h3>{litecoinPrice?.usd_24h_change?.toFixed(4) }%</h3></div>
     <div id="XRP">
     <h2>XRP:</h2>
     <h3>${ripplePrice?.usd }</h3>
     <h3>{ripplePrice?.usd_24h_change?.toFixed(4) }%</h3>
     </div>
     </div> : <div>hi</div>}


    </div>
  )
}

export default Header;