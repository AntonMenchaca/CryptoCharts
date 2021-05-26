import { connect } from 'react-redux';
import NewsCarousel from '../components/newsViewer';
import {State} from '../type/State';

var mapStoreToProps = (state: State) => ({
  allNews: state.news
});

var NewsCarouselContainer = connect(mapStoreToProps)(NewsCarousel);

export default NewsCarouselContainer;