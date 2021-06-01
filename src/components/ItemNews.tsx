
import React from 'react';
import { Paper } from '@material-ui/core';
import ItemNews from '../type/ItemNews';

let Item:React.FC<ItemNews> = ({allNews}) =>
{
    return (

        <div className="newsContainer">
        <h2>{allNews.title}</h2>
            <div className="newsImageContainer">
            <a className="newsImage" href={allNews.news_url}> <img src={allNews.image_url}></img>
            </a>
            </div>

            <p>{allNews.text}</p>
        </div>


    )
}

export default Item;