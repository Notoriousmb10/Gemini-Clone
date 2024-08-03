import React from "react";
import "./Sidebar.css";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <button className="slidebtn ">
          <IoMenuSharp />
        </button>
        <button className="newchatbtn">
          <IoMdAdd /> New Chat
        </button>
        <div className="bottombtns">
          <button className="helpbtn">
            <IoIosHelpCircleOutline className="helpicon"/><p className="helptext">Help</p>
          </button>
          <button className="historybtn">
          <FaHistory className="historyicon"/><p className="historytext">Activity</p>
          </button>
          <button className="settingbtn">
          <IoIosSettings className="settingicon"/><p className="settingtext">Settings</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
