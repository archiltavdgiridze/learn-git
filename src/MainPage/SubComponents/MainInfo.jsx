import React from "react";
import "./SubCompCSS/maininfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faHashtag,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

const MainInfo = () => {
  return (
    <div className="container">
      <div className="overlay">
        <div className="image">
          <img src="/guy.jpg" alt="guy" className="img-guy"></img>
        </div>
        <div className="icons">
          <div className="icon-content">
            <FontAwesomeIcon icon={faLaptop} style={{ color: "#ffffff" }} />
          </div>
          <div className="icon-content">
            <FontAwesomeIcon icon={faHashtag} style={{ color: "#ffffff" }} />
          </div>
          <div className="icon-content">
            <FontAwesomeIcon icon={faCamera} style={{ color: "#ffffff" }} />
          </div>
        </div>
      </div>
      <div className="text">
        <h1>
          PREPARING FOR YOUR SUCCESS, WE PROVIDE TRULY PROMINENT IT SOLUTIONS.
        </h1>
        <p>
          Podcasting operational change management inside of workflows to
          establish a framework. Taking seamless key performance indicators
          offline to maximise the long tail. Keeping your eye on the ball while
          performing a deep dive on the start-up mentality to derive convergence
          on cross-platform integration.
        </p>
      </div>
      <button className="btn">Read More</button>
    </div>
  );
};

export default MainInfo;
