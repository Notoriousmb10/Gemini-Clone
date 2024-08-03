import React from "react";
import "./HomePage.css";
import { MdMicNone } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import { VscSend } from "react-icons/vsc";


const HomePage = () => {
  return (
    <>
      <div className="homecontainer">
        <div className="title">
          <p>
            <span>Hello, Yash!</span>
          </p>
          <p>How Can I Help You Today!</p>
        </div>

        <div className="cards">
          <div className="card1">
            <p>What is React Js?</p>
          </div>
          <div className="card2">
            <p>Come up with a complex word riddle, including hints</p>
          </div>
          <div className="card3">
            <p>Give me a beginner's guide to an activity</p>
          </div>
          <div className="card4">
            <p>Find hotels in Phuket for a week, and suggest a packing list</p>
          </div>
        </div>
        <input
          type="text"
          placeholder="Enter a prompt here"
          className="searchfield"
        />
        <div className="inputbtns">
        <button className="image"><LuImagePlus className="imageicon"/></button>
        <button className="mic"><MdMicNone className="micicon"/></button>
        <button className="image"><VscSend className="sendicon"/></button>
        </div>
        <p className="alert">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </>
  );
};

export default HomePage;
