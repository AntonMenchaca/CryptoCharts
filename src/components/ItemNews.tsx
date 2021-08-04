
import React from 'react';
import ItemNews from '../type/ItemNews';

let Item:React.FC<ItemNews> = ({allNews}) =>
{
    return (

        <div className="newsContainer">
        <h2>{allNews.title}</h2>
            <div className="newsImageContainer">
            <a className="newsImage" href={allNews.news_url}> <img src={allNews.image_url} alt="crypto news image" height="300" width="600"></img>
            </a>
            </div>

            <p>{allNews.text}</p>
        </div>


    )
}

export default Item;