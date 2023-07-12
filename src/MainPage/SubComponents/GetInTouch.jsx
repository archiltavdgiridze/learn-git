import React from "react";
import "./SubCompCSS/getintouch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faP, faPhone } from "@fortawesome/free-solid-svg-icons";



const GetInTouch = () => {
  return (
    <div className="main_div">
      <h1>Get in touch</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nulla.
      </p>
      <div className="info_cards">
        <div className="info_card_single">
          <div className="card_icon_div">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <h2>Chat to us</h2>
          <p>Our team is here to help you</p>
          <p>hi@ourcompany@mail.com</p>
        </div>
        <div className="info_card_single">
          <div className="card_icon_div">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <h2>Office</h2>
          <p>Come say hello at our office HQ.</p>
          <p>some street adres #420</p>
        </div>
        <div className="info_card_single">
          <div className="card_icon_div">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <h2>Phone</h2>
          <p>only on monday</p>
          <p>+995 512 345 678</p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
