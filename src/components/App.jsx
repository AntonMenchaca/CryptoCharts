import React, {Component} from 'react';
import ChartContainer from '../containers/ChartContainer';
import ChartInfoContainer from '../containers/ChartInfoContainer';
import Header from './Header';
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="view">
        <Header />
        <div id='chart'><ChartContainer /></div>
        <ChartInfoContainer />
      <Footer />
      </div>
    )
  }
}

export default App;