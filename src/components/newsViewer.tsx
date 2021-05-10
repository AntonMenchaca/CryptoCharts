import React, {useEffect} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

// interface News {
//     title: string;
//     news_url: string;
//     image_url: string;
// }

let NewsCarousel = ({allNews}) => {

    return (
        <Carousel indicators={false}>

            {
                allNews?.map((news, i) => <Item key={i} news={news} /> )
            }
        </Carousel>
    )
}

function Item({news})
{
    return (
        <Paper>
        <div className="newsContainer">
        <h2>{news.title}</h2>
            <div className="newsImageContainer">
            <a className="newsImage" href={news.news_url}> <img src={news.image_url}></img>
            </a>
            </div>

            <p>{news.text}</p>
        </div>

        </Paper>
    )
}

export default NewsCarousel;