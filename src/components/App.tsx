import React, {Component} from 'react';
import ChartContainer from '../containers/ChartContainer';
import ChartInfoContainer from '../containers/ChartInfoContainer';
import HeaderContainer from '../containers/HeaderContainer';
import Footer from './Footer';

const App: React.FC = () =>
   (
      <div id="view">
        <HeaderContainer />
        <div id='chart'><ChartContainer /></div>
        <ChartInfoContainer />
      <Footer />
      </div>
    )

export default App;