import React from "react";
import "./featuredInfo.scss";
import BothGender from "../../assets/images/BothGender.png";
import ThreePeople from "../../assets/images/ThreePeople.png";
import File from "../../assets/images/File.png";
import Money from "../../assets/images/Money.png";

function FeaturedInfo() {
  return (
    <div className="featured-info-container">
      <div className="featured-wrapper">
        <div className="featured-info-wrapper">
          <div className="featured-info-item">
            <div
              style={{ backgroundColor: "#f2bbfa" }}
              className="featured-info-icon"
            >
              <img src={BothGender} alt="" />
            </div>
            <p>USERS</p>
            <span>2,453</span>
          </div>
        </div>
        <div className="featured-info-wrapper">
          <div className="featured-info-item">
            <div
              style={{ backgroundColor: "#c3adff" }}
              className="featured-info-icon"
            >
              <img src={ThreePeople} alt="" />
            </div>
            <p>ACTIVE USERS</p>
            <span>2,453</span>
          </div>
        </div>
        <div className="featured-info-wrapper">
          <div className="featured-info-item">
            <div
              style={{ backgroundColor: "#ffb9ad" }}
              className="featured-info-icon"
            >
              <img src={File} alt="" />
            </div>
            <p>USERS WITH LOANS</p>
            <span>12,453</span>
          </div>
        </div>
        <div className="featured-info-wrapper">
          <div className="featured-info-item">
            <div
              style={{ backgroundColor: "#ffb6c8" }}
              className="featured-info-icon"
            >
              <img src={Money} alt="" />
            </div>
            <p>USERS WITH SAVINGS</p>
            <span>102,453</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedInfo;
