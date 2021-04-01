import { connect, dispatch } from 'react-redux';
import NewsCarousel from '../components/NewsViewer';


var mapStoreToProps = (state) => ({
  allNews: state.news
});

var NewsCarouselContainer = connect(mapStoreToProps, null)(NewsCarousel);

export default NewsCarouselContainer;