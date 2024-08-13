import React from "react";
import "./App.css";
import { FaChevronLeft } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="page9">
        <FaChevronLeft className="arrow" />
        <div className="hader">
          <b className="heading">
            <center>Betting Bonus</center>
          </b>
        </div>
        <div className="middleP">
          <div className="middle">
            <div className="mdlup">
              <p style={{ fontSize: "20px" }}> Yesterday's Betting Bonus</p>
              <b style={{ fontSize: "30px" }}>0.000</b>
            </div>
            <div className="mdldn">
              <ul>
                <li>
                  The higher the VIP level, the higher the betting bonus,
                  <span style={{ color: "#00ff67" }}>
                    {" "}
                    Check the betting bonus ratio
                  </span>
                </li>
                <li>
                  Daily betting bonus will be uniformly distributed to the
                  player's wallet the next day
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="last">
          <ul>
            <li>Bonous record</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
