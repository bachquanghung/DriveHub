import React, { useState } from "react";
import styles from "./Offcanvas.module.scss";
import classNames from "classnames/bind";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiUser, BiLogIn, BiRegistered, BiLogOut } from "react-icons/bi";
import { FaExchangeAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const cx = classNames.bind(styles);

const Canvas = ({ userName=undefined, handleLogOut }) => {
  const items = [
    {
      id: 1,
      to: "/",
      name: "Home",
    },
    {
      id: 2,
      to: "/shop",
      name: "Shop",
    },
    {
      id: 3,
      to: "/services",
      name: "Services",
    },
    {
      id: 4,
      to: "/blog",
      name: "Blog",
    },
    {
      id: 5,
      to: "/contact",
      name: "Contact",
    },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button className={cx("btn-canvas")} onClick={handleShow}>
        <RxHamburgerMenu />
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>DRIVEHUB</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <>
            {items.map((item, index) => (
              <div key={index} className={cx("items")}>
                <Link className={cx("item")} to={item.to}>
                  {" "}
                  {item.name}
                </Link>
              </div>
            ))}
          </>

          <div className={cx("user-field")}>
          <div className={cx("btn-log")}>
              <BiUser />
              <div className={cx("user")}>
                {userName ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <Link className={cx("btn-user")}>
                      <span>
                        <BiUser />
                      </span>
                      {userName}
                    </Link>
                    <Link onClick={handleLogOut} className={cx("btn-logout")}>
                      <span>
                        <BiLogOut />
                      </span>
                      Log out
                    </Link>
                    <Link className={cx("btn-logout")} to='/change-password'>
                      <span>
                        <FaExchangeAlt></FaExchangeAlt>
                      </span>
                     Change Password
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className={cx("nav")}>
                <Link to='/checkout' style={{ position: "relative", cursor: "pointer" }}>
                <AiOutlineShoppingCart className={cx("icon-nav")} />
                </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Canvas;
