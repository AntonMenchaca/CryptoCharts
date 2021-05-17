import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './ItemNews'
import ItemNews from '../type/ItemNews';


// type individualNews = {
//     key: number;
//     allNews: ItemNews;
// }
type newsArr = any[] | undefined;

// interface news {
//     allNews: individualNews[]
// }
// : React.FC<news> : number

let NewsCarousel = ({allNews}: {allNews: newsArr}) => {

    return (
        <Carousel indicators={false}>

            {
                allNews?.map((news, i) => <Item key={i} allNews={news} /> )
            }
        </Carousel>
    )
}


export default NewsCarousel;

//what are you going to do when opening a new codebase