import React, { useState, useEffect } from "react";
// import logo from "../css/logo.png";
import axios from "axios";
import { Oval } from "react-loader-spinner";

export default function Card() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=c3908227b0e3453688d69e73902ab5ac`
      )
      .then((res) => {
        console.table(res.data);

        // generally API's returns array of objects which can be directly accessible
        // but in this API,it returns object of array,so firstly it have to find the array which contains the data
        // so i have used Object.values() method which return the value from key-value pair of the object.
        // the array which contains all the data is stored on index no 2 so I have used genders[2]
        // finally newsdata contains the array which can be traverse using map()  

        let genders = Object.values(res.data);
        let newsdata = genders[2];
        // console.log(newsdata[0].author)
        setNews(newsdata);
      });
  }, []);
  // // console.log(news.articles.author)

  return (
    <>
      <div className="big-cont">
        <div className="wrap main-cont">

          {
          news.length === 0 ?
          (<div class="lds-hourglass"></div>)
          :
         ( 
            news.map((response) => (
            <div className="container-fluid card-size">
              <div className="row">
                <div className="col-12 mt-3">
                  <div className="card">
                    <div className="card-horizontal">
                      <div className="card-body body-text">
                        <h5 className="card-title author">
                          
                          {response.author} : {response.publishedAt}

                        </h5>
                        <p className="card-text">
                        
                          Title:<br></br>
                          {response.title}
                        </p>
                        <p className="card-text text2">
                          
                          Description:<br></br>
                          {response.content}
                        </p>
                        <a href={response.url}>
                          <button className="btn">Start Reading</button>
                        </a>
                      </div>
                      <div
                        className="img-square-wrapper image-div"
                        style={{ marginLeft: "60px" }}
                      >
                        <img
                          className="image"
                          src={response.urlToImage}
                          alt="Card"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
          )
          }
          
          
          
        </div>
        

        <hr style={{ opacity: "0.1" }}></hr>
        <div className="ads">
          <div className="dispaly">
            <h6 className="adsHead">Discover more on what matters to you.</h6>
            <div className="buttons">
              <button className="but">Programming</button>
              <button className="but">Data Science</button>
              <button className="but">Technology</button>
            </div>


            <div className="buttons">
              <button className="but">Self Improvement</button>
              <button className="but">Writing</button>
              <button className="but">Relationship</button>
            </div>


            <div className="buttons">
              <button className="but" type='button' >Machine Learning</button>
              <button className="but" type='button' >Productivity</button>
              <button className="but" type='button' >Politics</button>
            </div>
          </div>
          
        <div className="foot">
          <ul>
         <a href=" /"><li>Help</li></a>
         <a href="/ "><li>Status</li></a>
         <a href=" /"><li>Writer</li></a>
         <a href="/ "><li>Blog</li></a>
         <a href="/ "><li>Careers</li></a>
         <a href="/ "><li>Privacy</li></a>
         <a href="/ "><li>Terms</li></a>
         <a href="/"><li>About</li></a>
         <a href="/ "><li>Text to speech</li></a>
          </ul>
        </div>
        </div>

        
      </div>
      {/* <div style={{ borderTop: "2px solid black ", marginLeft: 400, marginRight: 200 }}></div> */}
    </>
  );
}

