import { useState } from "react";
import { useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {

    const [articles,setArticles]=useState([]);

    useEffect(()=>{
      
        let url=`https://newsdata.io/api/1/latest?apikey="your_api_key"&category=${category}&language=en`;
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.results)).catch(error => console.error('Error fetching the articles:', error));
        console.log(articles);

    },[category])
  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      
        {articles && articles.map((news,index)=>{
           return <NewsItem key={news.article_id} title={news.title} description={news.description} src={news.image_url} url={news.source_url}/>
        })}
    </div>
  )
}

export default NewsBoard
