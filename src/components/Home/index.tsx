import React from "react";
import Navbar from "../Navbar";
import "./index.css";
import { FaUsers } from "react-icons/fa";
import { MdOutlineLocationCity } from "react-icons/md";
import { AiFillFolderOpen } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { GoFileSubmodule } from "react-icons/go";
export default function Home() {
  return (
    <>
      <div className="home-container">
        <div>
          {" "}
          <Navbar />
        </div>
        <div className="common-container">
          <h1 className="title">Common Masters</h1>
          <hr className="hr-style" />
          <ul className="common-card-items">
            <li className="icons-card">
              <GoFileSubmodule className="icons" />
              <p className="paragraph">Work Flow Modules</p>
            </li>

            <li className="icons-card">
              <FaUsers className="icons" />
              <p className="paragraph">UOM</p>
            </li>

            <li className="icons-card">
              <FaUsers className="icons" />
              <p className="paragraph">View Country,State & City</p>
            </li>

            <li className="icons-card">
              <MdOutlineLocationCity className="icons" />
              <p className="paragraph">Country Master</p>
            </li>

            <li className="icons-card">
              <MdOutlineLocationCity className="icons" />
              <p className="paragraph">State Master</p>
            </li>

            <li className="icons-card">
              <MdOutlineLocationCity className="icons" />
              <p className="paragraph">City Master</p>
            </li>

            <li className="icons-card">
              <AiFillFolderOpen className="icons" />
              <p className="paragraph">Multi-Currecy</p>
            </li>

            <li className="icons-card">
              <FaUsers className="icons" />
              <p className="paragraph">View Supplier Categories</p>
            </li>

            <li className="icons-card">
              <BiMailSend className="icons" />
              <p className="paragraph">View MailFormat</p>
            </li>

            <li className="icons-card">
              <MdOutlineLocationCity className="icons" />
              <p className="paragraph">Locatiom Master</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
