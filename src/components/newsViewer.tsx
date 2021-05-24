import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './ItemNews'
import ItemNews from '../type/ItemNews';


type newsArr = any[] | undefined;

let NewsCarousel = ({allNews}: {allNews: newsArr}) => {

    return (
        <Carousel>
            {
                allNews?.map((news, i) => <Item key={i} allNews={news} /> )
            }
        </Carousel>
    )
}


export default NewsCarousel;

//what are you going to do when opening a new codebase