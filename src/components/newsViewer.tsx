import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'





let NewsCarousel: React.FC<T> = ({allNews}): T => {

    return (
        <Carousel indicators={false}>

            {
                allNews?.map((news: number[], i: number) => <Item key={i} allNews={news} /> )
            }
        </Carousel>
    )
}

let Item:React.FC<AllNews> = ({news}) =>
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