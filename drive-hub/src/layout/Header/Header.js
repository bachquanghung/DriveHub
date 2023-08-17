import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Canvas from "./OffCanvas/Offcanvas.js";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaExchangeAlt } from "react-icons/fa";
import { BiUser, BiLogIn, BiRegistered, BiLogOut } from "react-icons/bi";
import Searching from "./Searching/Searching";
import logo from "../../asset/logo.png";
const cx = classNames.bind(styles);
const Header = () => {
  const [chosen, setChosen] = useState("Home");
  const [localUserName, setLocalUserName] = useState(localStorage.getItem("localUserName"));
 
 const handleLogOut =()=>{
    setLocalUserName('')
 }
 const callbackFunction = (childData) => {
  setChosen(childData)
}
  const items = [
    {
      id: 1,
      to: "/",
      name: "Home",
      text: false,
    },
    {
      id: 2,
      to: "/shop",
      name: "Shop",
      text: false,
    },
    {
      id: 3,
      to: "/checkout",
      name: "Check Out",
      text: false,
    },

    {
      id: 4,
      to: "/blog",
      name: "Blog",
      text: false,
    },
    {
      id: 5,
      to: "/contact",
      name: "Contact",
      text: false,
    },
  ];
  return (
    <div className={cx("wrapper")}>
    <Container>
      <div className={cx("header")}>
        <div className={cx("header-logo")}>
          <Link  to="/">
            <img src={logo} className={cx("logo")}></img>
          </Link>

          <Link className={cx("title")} to="/">
            DRIVEHUB
          </Link>
        </div>
        <div className={cx("header-after")}>
        <div className={cx("header-items")}>
          {items.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className={cx("item")}
              style={
                chosen == item.name
                  ? {
                      borderBottom: "2px solid #ff9950",
                      borderRadius: "3px",
                      color: "#ff9950",
                    }
                  : {}
              }
              onClick={() => {
                setChosen(item.name);
              }}
            >
              {item.name}
            </Link>
          ))}
          
        </div>
        <div className={cx('searching')}>
        <Searching></Searching>
        </div>

        <div className={cx('btn-log')}>
            <BiUser></BiUser>

            <div className={cx('user')}>
            {localUserName?
            (<>
               <Link className={cx("user-login")}>
                <span>
                        <BiUser />
                      </span>
                {localUserName}
               </Link>
               <Link onClick={handleLogOut} className={cx("btn-log")}>
                      <span>
                        <BiLogOut />
                      </span>
                      Log out
                    </Link>
                    <Link className={cx("btn-change")} style={{display:'flex'}} to='/change-password'>
                      <span>
                        <FaExchangeAlt></FaExchangeAlt>
                      </span>
                      Change Password
                    </Link>
            </>):
            (<>
                <Link className={cx("user-login")} to="/login">
                      <span>
                        <BiLogIn />
                      </span>
                      Login
                    </Link>
                    <Link className={cx("user-register")} to="/register">
                      <span>
                        <BiRegistered />
                      </span>
                      Register
                    </Link>
            </>)}
            </div>
        </div>
        </div>
        <div className={cx('offCanvas')}>
        <div className={cx('offCanvas-search')}>
            <Searching></Searching>
        </div>
        <Canvas></Canvas>
        </div>
      </div>
</Container>
    </div>
  );
};

export default Header;
