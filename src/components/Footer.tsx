import React from 'react';

let Footer: React.FC = () => {

  return (
    <div id='footer'>
  <div className= 'logo'><img src="../../../images/logo.png"></img></div>

    <div id="icons"><a name='twitter share' href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false"><img width={20} height={20} src="../../../images/twitter.png" alt='twitter icon' target="_blank"/></a><script src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
</div>

    <div>
    <a id="gitURL" href="https://github.com/amenchaca100/CryptoCharts">Source Code</a>
    </div>



</div>
  )
}

export default Footer;