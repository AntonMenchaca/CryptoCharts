import { connect } from 'react-redux';
import NewsCarousel from '../components/NewsViewer';
import {State} from '../store/store';

var mapStoreToProps = (state: State) => ({
  allNews: state.news
});

var NewsCarouselContainer = connect(mapStoreToProps, null)(NewsCarousel);

export default NewsCarouselContainer;