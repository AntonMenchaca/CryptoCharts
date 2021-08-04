import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import {CoinProps} from '../type/State'


var Header: React.FC<CoinProps> = ({ethPrice, bitcoinPrice, litecoinPrice, ripplePrice, viewNews, changePage}, ) => {
  useEffect(() => {
    if (window.location.pathname === '/' && viewNews === true) {
      changePage(!viewNews)
    } else if(window.location.pathname === '/allNews' && viewNews === false) {
      changePage(!viewNews)
    }
  }, [window.location.pathname])
  return (
    <div id="header">
    <div className= 'logo-header'>
    <img src="../../../images/logo.png" alt="bitcoin logo with rising green arrow"></img>
    <div className='viewNews' >
    <h1>CryptoCharts</h1>
    </div>
     </div>
     <div  className="route-page" >{viewNews ? <Link to='/'> <h2 onClick={()=> changePage(!viewNews)}>View Chart</h2></Link> : <Link  to='/allNews'><h2 onClick={()=> changePage(!viewNews)}>View News</h2></Link>}</div>



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
     </div> : <div>Loading...</div>}


    </div>
  )
}

export default Header;

