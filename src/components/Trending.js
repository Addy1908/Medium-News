import React, { useState, useEffect } from 'react'
import axios from "axios";
import '../css/index.css'
export default function Trending() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=c3908227b0e3453688d69e73902ab5ac`
      )
      .then((res) => {
        console.table(res.data);

        let genders = Object.values(res.data);
        let newsdata = genders[2];
        // console.log(newsdata[0].author)
        setNews(newsdata);

      
      });
  }, []);
  // // console.log(news.articles.author)
    
  return (
    <>
    <div className='trend-head'>Trending News</div>
    <div className='trending'>
      
      {

        news.slice(2,7).map((response)=>(
      <div className='one'>
        <div className='trend-one-head'>{response.publishedAt}</div>
        <a href={response.url}><div className='trend-one'>{response.title}</div></a>
        {/* <div className='card-btn'>
        <button className="but">Programming</button>
        
        </div> */}
     
      </div>
      ))
      }





    </div>
    <div style={{ borderTop: "1px solid #d4cccc ", marginLeft: 10, marginRight: 10,marginTop: 20 }}></div>

    </>
  )
}
