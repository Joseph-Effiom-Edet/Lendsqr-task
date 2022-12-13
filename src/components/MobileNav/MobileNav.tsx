import React from "react";
import "./mobileNav.scss";
import BriefCase from "../../assets/images/BriefCase.png";
import DropdownArrowOutline from "../../assets/images/DropdownArrowOutline.png";
import Home from "../../assets/images/Home.png";
import TwoUsers from "../../assets/images/TwoUsers.png";
import ThreeUsers from "../../assets/images/ThreeUsers.png";
import MoneyBag from "../../assets/images/MoneyBag.png";
import Handshake from "../../assets/images/Handshake.png";
import PiggyBank from "../../assets/images/PiggyBank.png";
import HandMoneyBag from "../../assets/images/HandMoneyBag.png";
import GoodUser from "../../assets/images/GoodUser.png";
import BadUser from "../../assets/images/BadUser.png";
import Bank from "../../assets/images/Bank.png";
import Fees from "../../assets/images/Fees.png";
import Transaction from "../../assets/images/Transaction.png";
import Galaxy from "../../assets/images/Galaxy.png";
import UserSettings from "../../assets/images/UserSettings.png";
import Scroll from "../../assets/images/Scroll.png";
import BarChart from "../../assets/images/BarChart.png";
import Options from "../../assets/images/Options.png";
import Badge from "../../assets/images/Badge.png";
import Clipboard from "../../assets/images/Clipboard.png";

function MobileNav() {
  return (
    <div className="mobile-nav">
      <div className="mobile-nav-wrapper">
        <div className="dropdown">
          <img src={BriefCase} alt="" />
          <span>Switch organization</span>
          <img src={DropdownArrowOutline} alt="" />
        </div>
        <div className="sidebar-wrapper">
          <div className="home">
            <img src={Home} alt="" />
            <span>Dashboard</span>
          </div>
          <div className="sidebar-menu">
            <h3 className="sidebar-list-title">CUSTOMERS</h3>
            <ul className="sidebar-list">
              <li className="sidebar-list-item selected">
                <img src={TwoUsers} alt="" />
                <span>Users</span>
              </li>
              <li className="sidebar-list-item">
                <img src={ThreeUsers} alt="" />
                <span>Guarantors</span>
              </li>
              <li className="sidebar-list-item">
                <img src={MoneyBag} alt="" />
                <span>Loans</span>
              </li>
              <li className="sidebar-list-item">
                <img src={Handshake} alt="" />
                <span>Decision Models</span>
              </li>
              <li className="sidebar-list-item">
                <img src={PiggyBank} alt="" />
                <span>Savings</span>
              </li>
              <li className="sidebar-list-item">
                <img src={HandMoneyBag} alt="" />
                <span>Loan Requests</span>
              </li>
              <li className="sidebar-list-item">
                <img src={GoodUser} alt="" />
                <span>WhiteList</span>
              </li>
              <li className="sidebar-list-item">
                <img src={BadUser} alt="" />
                <span>Karma</span>
              </li>
            </ul>
          </div>
          <div className="sidebar-menu">
            <h3 className="sidebar-list-title">BUSINESSES</h3>
            <ul className="sidebar-list">
              <li className="sidebar-list-item">
                <img src={BriefCase} alt="" />
                <span>Organization</span>
              </li>
              <li className="sidebar-list-item">
                <img src={HandMoneyBag} alt="" />
                <span>Loan Products</span>
              </li>
              <li className="sidebar-list-item">
                <img src={Bank} alt="" />
                <span>Savings Products</span>
              </li>
              <li className="sidebar-list-item">
                <img src={Fees} alt="" />
                <span>Fees and Charges</span>
              </li>
              <li className="sidebar-list-item">
                <img src={Transaction} alt="" />
                <span>Transactions</span>
              </li>
              <li className="sidebar-list-item">
                <img src={Galaxy} alt="" />
                <span>Services</span>
              </li>
              <li className="sidebar-list-item">
                <img src={UserSettings} alt="" />
                <span>Service Account</span>
              </li>
              <li className="sidebar-list-item">
                <img src={Scroll} alt="" />
                <span>Settlements</span>
              </li>
              <li className="sidebar-list-item">
                <img src={BarChart} alt="" />
                <span>Reports</span>
              </li>
            </ul>
          </div>
          <div className="sidebar-menu">
            <h3 className="sidebar-list-title">SETTINGS</h3>
            <ul className="sidebar-list">
              <li className="sidebar-list-item">
                <img src={Options} alt="" />
                <span>Preferences</span>
              </li>
              <li className="sidebar-list-item">
                <img src={Badge} alt="" />
                <span>Fees and Pricing</span>
              </li>
              <li className="sidebar-list-item">
                <img src={Clipboard} alt="" />
                <span>Audit Logs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
