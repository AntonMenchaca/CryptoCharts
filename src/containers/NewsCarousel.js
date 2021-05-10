import { connect } from 'react-redux';
import NewsCarousel from '../components/NewsViewer';
import State from "../interface/State"


var mapStoreToProps = (state) => ({
  allNews: state.news
});

var NewsCarouselContainer = connect(mapStoreToProps, null)(NewsCarousel);

export default NewsCarouselContainer;