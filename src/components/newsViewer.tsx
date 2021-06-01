import React, {useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './ItemNews';
import Pagination from '@material-ui/lab/Pagination';


type newsArr = any[] | undefined;


let NewsCarousel = ({allNews}: {allNews: newsArr}) => {
    const [page, setPage] = useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      setTimeout(function(){ window.scrollTo({top: 0, behavior: 'smooth'}) }, 300);
  };
    return (
        <>
        {  window.location.pathname !== '/'  ? <div className="news-list"> {

                allNews?.slice((page - 1) * 5, page*5).map((news, i) => <Item key={i} allNews={news} /> )
            }
            <Pagination  count={10} page={page} onChange={handleChange} shape="rounded" color="primary" size="large"/>

        </div> :
            <Carousel indicators={false}>
            {
                allNews?.map((news, i) => <Item key={i} allNews={news} /> )
            }
        </Carousel> }
        </>

    )
}


export default NewsCarousel;
