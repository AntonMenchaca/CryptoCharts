import { connect } from 'react-redux';
import NewsCarousel from '../components/NewsViewer';
import {State} from '../type/State';

var mapStoreToProps = (state: State) => ({
  allNews: state.news
});

var NewsCarouselContainer = connect(mapStoreToProps)(NewsCarousel);

export default NewsCarouselContainer;