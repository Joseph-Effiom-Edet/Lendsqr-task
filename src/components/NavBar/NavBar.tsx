import React from "react";
import "./navBar.scss";
import Union from "../../assets/images/Union.png";
import LendSqr from "../../assets/images/lendsqr.png";
import Profile from "../../assets/images/image-4.png";
import Search from "../../assets/images/SearchGlass.png";
import Bell from "../../assets/images/Bell.png";
import DropdownArrow from "../../assets/images/DropdownArrow.png";

type MobileNavProp = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBar({ open, setOpen }: MobileNavProp) {
  return (
    <div className="nav-container">
      <div className="wrapper">
        <div className="logo-wrapper">
          <img className="logo-1" src={Union} alt="" />
          <img className="logo-2" src={LendSqr} alt="" />
        </div>
        <div className="search-wrapper">
          <form>
            <input type="text" placeholder="Search for anything" />
            <button>
              <img src={Search} alt="" />
            </button>
          </form>
        </div>
        <div className="info-wrapper">
          <span>Docs</span>
          <div className="bell">
            <img src={Bell} alt="" />
          </div>
          <img className="profile" src={Profile} alt="" />
          <p>Adedeji</p>
          <img src={DropdownArrow} alt="" />
        </div>
        {open ? (
          <button className="closer" onClick={() => setOpen(!open)}>
            <div className="bar"></div>
          </button>
        ) : (
          <button className="hamburger" onClick={() => setOpen(!open)}>
            <div className="bar"></div>
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
