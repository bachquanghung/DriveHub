import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { useContext } from "react";
import { themeContext } from "../../App";

const cx = classNames.bind(styles);
const Sidebar = ({filterValues,filterName,inputValue}) => {
  const value=useContext(themeContext)
  const theme=value.theme
  const [values, setValues] = useState([0, 100000000]);
  const handleInput = (e) => {
    setValues([e.minValue, e.maxValue]);
  };

  const handleFilterName=(e)=>{
      filterName(e.target.value)
    
  }
  const handleValues=()=>{
    filterValues(values[0],values[1])
  }
  return (
    <div style={{ height: "100%" }} className={cx(`container${theme}`)}>
      <form>
        <input
          className={cx("search")}
          type="search"
          placeholder="Search Products..."
          value={inputValue}
          onChange={handleFilterName}
        />
      </form>
      <div className={cx("prive-filter")}>
        <div className={cx("price-filter-title")}>Filter by Price</div>
        <div className={cx("slider")}>
          <MultiRangeSlider
            min={0}
            max={100000000}
            minValue={values[0]}
            maxValue={values[1]}
            step={1000}
            ruler="false"
            barLeftColor="black"
            barRightColor="black"
            barInnerColor="#fd9644"
            thumbLeftColor="#fd9644"
            thumbRightColor="#fd9644"
            style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
            onInput={(e) => {
              handleInput(e);
            }}
          ></MultiRangeSlider>
        </div>
        <div className={cx("slider-action")}>
          <button onClick={handleValues}>FILTER</button>
          <div>
            <span style={{ fontSize: "16px" }}>Price: </span>
            <span style={{ fontSize: "18px", fontWeight: "600" }}>
              ${values[0].toLocaleString('en-US')} - ${values[1].toLocaleString('en-US')}
            </span>
          </div>
        </div>
      </div>
      <div className={cx("categories")}>
        <div className={cx("categories-title")}>Categories</div>
        <div className={cx("category")}>
          <div className={cx("category-name")}>Accessories</div>
          <div className={cx("category-quantity")}>({7})</div>
        </div>
        <div className={cx("category")}>
          <div className={cx("category-name")}>Men</div>
          <div className={cx("category-quantity")}>({14})</div>
        </div>
        <div className={cx("category")}>
          <div className={cx("category-name")}>Women</div>
          <div className={cx("category-quantity")}>({17})</div>
        </div>
      </div>

      <div className={cx("best-sellers")}>
        <div className={cx("best-sellers-title")}>Our Best Sellers</div>
        <div className={cx("best-seller")}>
          <div style={{ display: "flex"}}>
           <div>
              <img src="https://giaxemercedes.vn/wp-content/uploads/2021/09/mercedes-AMG-g63-gia-xe-mercedes-vn-min.jpg"  style={{borderRadius:'10px'}}></img>
              </div>
          <div style={{marginLeft:'20px'}}>
            <div className={cx("best-seller-name")}>Product 1</div>
            <div className={cx("best-seller-rate")}></div>
            <div className={cx("best-seller-price")}>$150.00</div>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className={cx("best-seller")}>
          <div style={{ display: "flex"}}>
           <div>
              <img src="https://giaxemercedes.vn/wp-content/uploads/2021/10/bang-gia-mercedes-g-class-giaxemercedes-vn-1.jpg"  style={{borderRadius:'10px'}}></img>
              </div>
          <div style={{marginLeft:'20px'}}>
            <div className={cx("best-seller-name")}>Product 2</div>
            <div className={cx("best-seller-rate")}></div>
            <div className={cx("best-seller-price")}>$150.00</div>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className={cx("best-seller")}>
          <div style={{ display: "flex"}}>
           <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALVEWOLn6dXCS4zDFzfsJpY7x_Nrt2LIuOw&usqp=CAU"  style={{borderRadius:'10px'}}></img>
              </div>
          <div style={{marginLeft:'20px'}}>
            <div className={cx("best-seller-name")}>Product 3</div>
            <div className={cx("best-seller-rate")}></div>
            <div className={cx("best-seller-price")}>$150.00</div>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className={cx("best-seller")}>
          <div style={{ display: "flex"}}>
           <div>
              <img src="https://assets.nst.com.my/images/articles/Mercedes-Benz_Best_7_1668024100.jpg"  style={{borderRadius:'10px'}}></img>
              </div>
          <div style={{marginLeft:'20px'}}>
            <div className={cx("best-seller-name")}>Product 4</div>
            <div className={cx("best-seller-rate")}></div>
            <div className={cx("best-seller-price")}>$150.00</div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Sidebar;
