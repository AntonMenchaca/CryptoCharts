import React, {Component} from 'react';
import ChartContainer from '../containers/ChartContainer';
import ChartInfoContainer from '../containers/ChartInfoContainer';
import HeaderContainer from '../containers/HeaderContainer';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div id="view">
        <HeaderContainer />
        <div id='chart'><ChartContainer /></div>
        <ChartInfoContainer />
      <Footer />
      </div>
    )
  }
}

export default App;