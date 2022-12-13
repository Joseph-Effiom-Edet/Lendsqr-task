import React, { useEffect, useState } from "react";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import Table from "../../components/Table/Table";
import "./dashboard.scss";
import { UserDetail } from "../../types/types";
import MobileNav from "../../components/MobileNav/MobileNav";

function Dashboard() {
  const [data, setData] = useState<UserDetail[]>([]);
  const [open, setOpen] = useState(false);

  //Fetch data from mock API and store in local storage.
  useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ")
      .then((response) => response.json())
      .then((data) => localStorage.setItem("data", JSON.stringify(data)));
  }, []);

  //Get data from local storage and store in State.
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data") || "");
    if (items) {
      setData(items);
    }
  }, []);

  window.scrollTo(0, 0);

  return (
    <div className="dashboard">
      <div className="dashboard-wrapper">
        <NavBar open={open} setOpen={setOpen} />
        <div className="dashboard-container">
          {open && <MobileNav />}
          <SideBar />
          <div className="page">
            <h1 className="header-text">Users</h1>
            <FeaturedInfo />
            <Table data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
