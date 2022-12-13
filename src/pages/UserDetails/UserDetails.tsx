import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import "./userDetails.scss";
import BackButton from "../../assets/images/BackButton.png";
import FilledStar from "../../assets/images/FilledStar.png";
import EmptyStar from "../../assets/images/EmptyStar.png";
import { UserDetail } from "../../types/types";
import Currency from "react-currency-formatter";
import MobileNav from "../../components/MobileNav/MobileNav";
import { saveDataInIndexDB } from "../../utilities/indexedDbUtility";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../indexedDB";

function UserDetails() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState<UserDetail | any>({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        saveDataInIndexDB(data);
      });
  }, [id]);

  const allItems = useLiveQuery(() => db.userData.toArray(), []);

  useEffect(() => {
    setUserDetails(allItems ? allItems[0].data : {});
  }, [allItems]);

  return (
    <div className="user-details">
      <NavBar open={open} setOpen={setOpen} />
      <div className="user-details-container">
        {open && <MobileNav />}
        <SideBar />
        <div className="user-details-page">
          <div onClick={() => navigate(-1)} className="go-back">
            <img src={BackButton} alt="" />
            <span>Back to Users</span>
          </div>
          <div className="header-text-with-buttons">
            <h1 className="header-text">User Details</h1>
            <div className="buttons">
              <button className="button-1">BLACKLIST USER</button>
              <button className="button-2">ACTIVATE USER</button>
            </div>
          </div>
          <div className="user-details-wrapper">
            <div className="user-details-top">
              <div className="user-details-top-upper">
                <div className="profile-image">
                  <img src={userDetails?.profile?.avatar} alt="pic" />
                  <div>
                    <h1>
                      {userDetails?.profile?.firstName}{" "}
                      {userDetails?.profile?.lastName}
                    </h1>
                    <p>LSQFf587g90</p>
                  </div>
                </div>
                <div className="user-tier">
                  <p>User's Tier</p>
                  <div>
                    <img src={FilledStar} alt="pic" />
                    <img src={EmptyStar} alt="pic" />
                    <img src={EmptyStar} alt="pic" />
                  </div>
                </div>
                <div className="bank-details">
                  <p>
                    <Currency
                      quantity={parseInt(userDetails?.accountBalance)}
                      currency={userDetails?.profile?.currency}
                    />
                  </p>
                  <span>{userDetails?.accountNumber}/Providus Bank</span>
                </div>
              </div>
              <div className="tabs">
                <span className="selected">General Details</span>
                <span>Documents</span>
                <span>Bank Details</span>
                <span>Loans</span>
                <span>Savings</span>
                <span>App and System</span>
              </div>
            </div>
            <div className="user-details-bottom">
              <div className="personal-info">
                <h1>Personal Information</h1>
                <div className="information">
                  <div className="full-name">
                    <p>FULL NAME</p>
                    <span>
                      {userDetails?.profile?.firstName}{" "}
                      {userDetails?.profile?.lastName}
                    </span>
                  </div>
                  <div className="phone-number">
                    <p>PHONE NUMBER</p>
                    <span>{userDetails?.phoneNumber}</span>
                  </div>
                  <div className="email-address">
                    <p>EMAIL ADDRESS</p>
                    <span>{userDetails?.email}</span>
                  </div>
                  <div className="bvn">
                    <p>BVN</p>
                    <span>{userDetails?.profile?.bvn}</span>
                  </div>
                  <div className="gender">
                    <p>GENDER</p>
                    <span>{userDetails?.profile?.gender}</span>
                  </div>
                  <div className="marital-status">
                    <p>MARITAL STATUS</p>
                    <span>Single</span>
                  </div>
                  <div className="children">
                    <p>CHILDREN</p>
                    <span>None</span>
                  </div>
                  <div className="type-of-residence">
                    <p>TYPE OF RESIDENCE</p>
                    <span>{userDetails?.profile?.address}</span>
                  </div>
                </div>
              </div>
              <div className="education-employment">
                <h1>Education and Employment</h1>
                <div className="information">
                  <div className="level-of-edu">
                    <p>LEVEL OF EDUCATION</p>
                    <span>{userDetails?.education?.level}</span>
                  </div>
                  <div className="employment-status">
                    <p>EMPLOYMENT STATUS</p>
                    <span>{userDetails?.education?.employmentStatus}</span>
                  </div>
                  <div className="sector-of-emp">
                    <p>SECTOR OF EMPLOYMENT</p>
                    <span>{userDetails?.education?.sector}</span>
                  </div>
                  <div className="duration-of-emp">
                    <p>DURATION OF EMPLOYMENT</p>
                    <span>{userDetails?.education?.duration}</span>
                  </div>
                  <div className="office-mail">
                    <p>OFFICE MAIL</p>
                    <span>{userDetails?.education?.officeEmail}</span>
                  </div>
                  <div className="monthly-income">
                    <p>MONTHLY INCOME</p>
                    <span>
                      <Currency
                        quantity={parseInt(
                          userDetails?.education?.monthlyIncome[0]
                        )}
                        currency={userDetails?.profile?.currency}
                      />{" "}
                      -{" "}
                      <Currency
                        quantity={parseInt(
                          userDetails?.education?.monthlyIncome[1]
                        )}
                        currency={userDetails?.profile?.currency}
                      />{" "}
                    </span>
                  </div>
                  <div className="loan-repayment">
                    <p>LOAN REPAYMENT</p>
                    <span>
                      <Currency
                        quantity={parseInt(
                          userDetails?.education?.loanRepayment
                        )}
                        currency={userDetails?.profile?.currency}
                      />{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="socials">
                <h1>Socials</h1>
                <div className="information">
                  <div className="twitter">
                    <p>TWITTER</p>
                    <span>{userDetails?.socials?.twitter}</span>
                  </div>
                  <div className="facebook">
                    <p>FACEBOOK</p>
                    <span>{userDetails?.socials?.facebook}</span>
                  </div>
                  <div className="instagram">
                    <p>INSTAGRAM</p>
                    <span>{userDetails?.socials?.instagram}</span>
                  </div>
                </div>
              </div>
              <div className="guarantor">
                <h1>Guarantor</h1>
                <div className="information">
                  <div className="full-name">
                    <p>FULL NAME</p>
                    <span>
                      {userDetails?.guarantor?.firstName}{" "}
                      {userDetails?.guarantor?.lastName}
                    </span>
                  </div>
                  <div className="phone-number">
                    <p>PHONE NUMBER</p>
                    <span>{userDetails?.guarantor?.phoneNumber}</span>
                  </div>
                  <div className="email-address">
                    <p>EMAIL ADDRESS</p>
                    <span>{userDetails?.guarantor?.address}</span>
                  </div>
                  <div className="relationship">
                    <p>RELATIONSHIP</p>
                    <span>Sister</span>
                  </div>
                </div>
              </div>
              <div className="guarantor-2">
                <div className="information">
                  <div className="full-name">
                    <p>FULL NAME</p>
                    <span>
                      {userDetails?.guarantor?.firstName}{" "}
                      {userDetails?.guarantor?.lastName}
                    </span>
                  </div>
                  <div className="phone-number">
                    <p>PHONE NUMBER</p>
                    <span>{userDetails?.guarantor?.phoneNumber}</span>
                  </div>
                  <div className="email-address">
                    <p>EMAIL ADDRESS</p>
                    <span>{userDetails?.guarantor?.address}</span>
                  </div>
                  <div className="relationship">
                    <p>RELATIONSHIP</p>
                    <span>Sister</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
