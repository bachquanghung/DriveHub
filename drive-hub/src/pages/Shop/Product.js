import React from "react";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { AiFillEye } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
const cx = classNames.bind(styles);
const Product = ({ item, manufacture, addCart,handleOpenModal }) => {
  const handleAddCart = () => {
    addCart(item, true);
    
  };

const handleModal =()=>{
  handleOpenModal(true)
}
const name=item.name
  return (
    <div>
      <div className={cx("card")}>
        <div className={cx("parent-cover")}>
          <div className={cx("choices")}>
            <span onClick={handleAddCart}>
              <BsFillCartFill></BsFillCartFill>
            </span>
            <span >
              <AiFillEye onClick={handleModal}></AiFillEye>
            </span>
          </div>
          <div
            className={cx("children-cover")}
            style={{backgroundImage:`url(${item.imgUrl})`}}
            onClick={handleModal}
          ></div>
          
        </div>
        <div className={cx("info")} style={{cursor:'pointer'}} onClick={handleModal}>
          <div className={cx("name")}>{item.name}</div>
          <div className={cx("manufacture")}>{name.split(' ')[0]}</div>
          <div className={cx("price")}>${item.price}</div>
        </div>
        <hr style={{ width: "100%", color: "#ff9950" }}></hr>
      </div>
    </div>
  );
};

export default Product;
