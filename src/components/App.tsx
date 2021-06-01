import React from 'react';
import ChartContainer from '../containers/ChartContainer';
import ChartInfoContainer from '../containers/ChartInfoContainer';
import HeaderContainer from '../containers/HeaderContainer';
import Footer from './Footer';
import { Router, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NewsCarouselContainer from '../containers/NewsCarouselContainer';
const history = createBrowserHistory();

const App: React.FC = () =>
{
  return (
    <Router  history={history}>
      <div id="view">
        <HeaderContainer />
        <Route exact path="/">
          <div id='chart'><ChartContainer /></div>
          <ChartInfoContainer />
        </Route>
        <Route exact path ='/allNews'>
          <NewsCarouselContainer />
        </Route>
        <Footer />
      </div>


    </Router>

  )

}


export default App;