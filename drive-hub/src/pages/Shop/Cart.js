import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
const cx = classNames.bind(styles);
const Cart = ({ handleClose, handleDelete,handleIncrease,handleDecrease,cartList }) => {
  const [open, setOpen] = useState(true);
  const handleOff = () => {
    handleClose(false);
  };

  const [total, setTotal] = useState(0);

  return (
    <div className={cx("container")}>
      <div className={cx("cart-head")}>
        <div className={cx("cart-title")}>Shopping Bag (6)</div>
        <div
          className={cx("cart-arrow")}
          onClick={handleOff}
          style={{ cursor: "pointer" }}
        >
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </div>
      </div>
      <hr></hr>
      <div className={cx("cart-products")}>
        {cartList.map((cartItem) => (
          <div key={cartItem.id}>
            <div className={cx("cart-product")}>
              <div style={{ display: "flex" }}>
                <img src={cartItem.imgUrl}></img>
                <div className={cx("product-detail")}>
                  <div
                    className={cx("product-name")}
                    style={{ fontSize: "16px", fontWeight: "500" }}
                  >
                    {cartItem.name}
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div style={{ cursor: "pointer" }} onClick={()=>handleDecrease(cartItem)}>-</div>
                    <div className={cx("product-quantity")}>
                      {cartItem.quantity}
                    </div>
                    <div style={{ cursor: "pointer" }} onClick={()=>handleIncrease(cartItem)}>+</div>
                  </div>
                  <div className={cx("product-price")}>{cartItem.price}</div>
                </div>
              </div>
              <div
                className={cx("delete-product")}
                style={{ cursor: "pointer" }}
              >
                <AiOutlineClose
                  onClick={() => {
                    handleDelete(cartItem);
                  }}
                ></AiOutlineClose>
              </div>
            </div>
            <hr></hr>
          </div>
        ))}

        <div className={cx("total")}>
          <div
            className={cx("total-title")}
            style={{ fontSize: "17px", fontWeight: "600" }}
          >
            TOTAL:{" "}
          </div>
          <div className={cx("total-amount")}>
            $
            {cartList.reduce(function (accumulator, currentValue) {
              var priceStr = currentValue.price;
              var priceNum = parseFloat(
                priceStr.replace(/\./g, "").replace("₫", "")
              );
              var quantity = currentValue.quantity;
              return accumulator + priceNum * quantity;
            }, 0)}
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Cart;
