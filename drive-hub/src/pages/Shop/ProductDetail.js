import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import logo from "../../asset/logo.png";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const ProductDetail = ({ modal, handleClose }) => {
  return (
    <div>
      {modal && (
        <div className={cx("modal")}>
          <div
            className={cx("overlay")}
            onClick={() => handleClose(false)}
          ></div>
          <div className={cx("modal-content")}>
          <div className={cx('modal-header')}>
          <div className={cx("header-logo")}>
          <Link  to="/">
            <img src={logo} className={cx("logo")}></img>
          </Link>

          <Link className={cx("title")} to="/">
            DRIVEHUB
          </Link>
        </div>
          <div
              onClick={() => {
                handleClose(false);
              }}

              style={{fontSize:'23px',cursor:'pointer'}}
            >
              <AiOutlineClose></AiOutlineClose>
            </div>
          </div>

            <div className={cx("product-overall")}>
              <div>
                <img
                  className={cx("product-img")}
                  src="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/mercedes-benz-glc-coupe-driving-front-3_4.jpg"
                ></img>
              </div>
              <div className={cx("product-description")}>
                <div className={cx("product-title")}>Product 1</div>
                <div className={cx("product-rating")}>******</div>
                <div className={cx("product-manufacture")}>
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    Manufacturer:{" "}
                  </span>
                  Ferrari
                </div>
                <div className={cx("product-detail")}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
                <div className={cx("action")}>
                  <div className={cx("product-price")}>
                    <span style={{ fontSize: "18px", fontWeight: "500" }}>
                      Price:{" "}
                    </span>
                    $300.000
                  </div>
                  <button className={cx("add-btn")}>ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className={cx("modal-footer")}>
              <div className={cx("modal-footer-title")}>
                Delivered to Your Door
              </div>
              <div className={cx("modal-footer-content")}>
                Whether you're a car enthusiast or simply in need of reliable
                transportation, we've got you covered. Discover a wide selection
                of top-quality cars, parts, and accessories, all in one
                convenient place. Get ready to hit the road with Drive Hub!
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
