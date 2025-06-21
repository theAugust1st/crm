import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { TbSearch, TbDots,TbUserHexagon } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";
import { LuCopyCheck } from "react-icons/lu";
import { PiSealCheck } from "react-icons/pi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { BiTask } from "react-icons/bi";
import "./CRM.css";
function CRM() {
  return (
    <div
      className="sidebar-container"
      style={{
        minWidth: "240px",
        height: "100%",
        backgroundColor: "white",
        margin: "4px",
        padding: " 0 0 24px 24px",
      }}
    >
      <div className="crm-header">
        <div className="crm-title-icon">
          <p className="crm-title">CRM</p>
          <IoChevronDown />
        </div>
        <div className="icon-div">
          <IoIosArrowBack />
        </div>
      </div>
      <div className="search-box">
        <div className="search-icon-box">
          <TbSearch />
          <input className="search-input" placeholder="search"></input>
        </div>
        <TbDots />
      </div>
      <div className="menu">
        <div className="menu-option active">
          <div className="icon-name">
          <MdOutlineSpaceDashboard className="icon"/>
            <p>Dashboard</p>
          </div>
          <TbDots className="icon" />
        </div>

        <div className="menu-option">
          <div className="icon-name">
            <RiHome3Line className="icon"/>
            <p>Office Check-in</p>
          </div>
          <TbDots className="icon" />
        </div>
        <div className="menu-option">
          <div className="icon-name">
            <LuCopyCheck className="icon" />
            <p>Enquiries</p>
          </div>
          <TbDots className="icon" />
        </div>
        <div className="menu-option">
          <div className="icon-name">
            <TbUserHexagon  className="icon"/>
            <p>Clients</p>
          </div>
          <TbDots className="icon" />
        </div>
        <div className="menu-option">
          <div className="icon-name">
            <PiSealCheck className="icon"/>
            <p>Services</p>
          </div>
          <TbDots className="icon" />
        </div>
        <div className="menu-option">
          <div className="icon-name">
            <HiOutlineNewspaper  className="icon"/>
            <p>Quotation</p>
          </div>
          <TbDots className="icon" />
        </div>
                <div className="menu-option">
          <div className="icon-name">
            <BiTask  className="icon"/>
            <p>Tasks</p>
          </div>
          <TbDots className="icon" />
        </div>
      </div>
    </div>
  );  
}

export default CRM;
