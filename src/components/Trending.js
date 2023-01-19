import React, { useState, useEffect } from 'react'
import axios from "axios";
import '../css/index.css'
// import logo from "../css/logo.png"
// import { Oval } from "react-loader-spinner";
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
        news.length===0?
        (<div class="lds-hourglass"></div>)
          :

       ( news.slice(13,18).map((response)=>(
      <div className='one hover:scale-110
      ease-out duration-300
      relative' style={{border:'1px solid black',borderRadius:'10px'}}>
        <img className="trend-img" src={response.urlToImage} alt="" />
        <div className='trend-one-head'>{response.publishedAt}</div>
        <a href={response.url}><div className='trend-one'>{response.title}</div></a>
        
     
      </div>
      ))
       )
      }
    





    </div>
    <div style={{ borderTop: "1px solid #d4cccc ", marginLeft: 10, marginRight: 10,marginTop: 110 }}></div>

    </>
  )
}

