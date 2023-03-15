import React from "react";
import "../css/Complete.css";
import backImg from "../images/backImg.png";
import myty_logo from "../images/myty_logo.svg";

export default function HeaderComponent(props) {
  return (
    <div className="HeaderComponentContainer">
      <div className="topHead">
        <div className="nameAndBack">
          <img src={backImg} alt="" />
          <h2>{props.headContent}</h2>
        </div>
        <div className="logoBox">
          <img src={myty_logo} alt="" />
        </div>
      </div>
      <hr />
    </div>
  );
}
