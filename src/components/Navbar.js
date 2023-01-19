import React from "react";
import logo from "../css/logo.png";
// import noti from '../css/noti.jpg'
import "../css/index.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <nav id="navbar">
          {/* for logo */}
          <div id="logo">
            <img src={logo} alt="" />
          </div>

          <ul className="nav-list">
            <li>
              <h2 className="medium" style={{ fontSize: "42px",fontWeight:"500" }}>
                Medium
              </h2>
            </li>

            <li className="list sign ">
              
                {" "}
                <a
                  href=" #"
                  style={{ fontSize: "18px", marginTop: "10px" }}
                  className="log"
                >
                  {" "}
                  Our Story
                </a>
              
            </li>
            <li className="list log "  style={{ fontSize: "18px", marginTop: "13px" }}>
              <a href=" #"> Membership</a>
            </li>
            <li className="list help "  style={{ fontSize: "18px", marginTop: "13px" }}>
              <a href=" #"> Write</a>
            </li>
            <li className="list help "  style={{ fontSize: "18px", marginTop: "13px" }}>
              <a href=" #"> Sign In</a>
            </li>
            <li className="list help "  style={{ fontSize: "18px", marginTop: "13px" }}>
            <button className='btn-nav'>Get Started</button>
            </li>
          </ul>
        </nav>
        
      </div>
      {/* <div style={{ borderBottom: "1px solid black ",marginTop:'10px' }}></div> */}
          </>
  );
}
