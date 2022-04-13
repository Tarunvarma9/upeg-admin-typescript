import React from "react";
import "./index.css";
import { AiFillHome } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
export default function Navbar() {
  return (
    <div className="Navbar-container">
      <div>
        <img src="https://photos.angel.co/startups/i/8793744-dff74eda0f628a72984edb31a1a2a070-medium_jpg.jpg?buster=1647611143" />
      </div>
      <div className="navbar-items">
        <div>
          <AiFillHome className="navbar-icons" />
          <FiLogOut className="navbar-icons" />
        </div>
        <div>
          <p>welcome Admin UAT</p>
        </div>
        <div>
          <img src="https://photos.angel.co/startups/i/8793744-dff74eda0f628a72984edb31a1a2a070-medium_jpg.jpg?buster=1647611143" />
        </div>
      </div>
    </div>
  );
}
