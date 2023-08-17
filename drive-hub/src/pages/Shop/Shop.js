import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Shop.module.scss";
import Product from "./Product";
import Sidebar from "./Sidebar.js";
import ProductDetail from "./ProductDetail.js";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cart from "./Cart";
import axios from "axios";
import { useContext } from "react";
import { themeContext } from "../../App";
import { LazyLoadImage } from "react-lazy-load-image-component";
const cx = classNames.bind(styles);
const Shop = () => {
  const value = useContext(themeContext);
  const theme = value.theme;
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  console.log(theme);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState([0, 100000000]);
  const [nameFind, setNameFind] = useState("");

  const handleOpenModal = (p) => {
    setModal(p);
  };
  const handleOpen = (variant) => {
    setOpen(variant);
  };

  const handleAddItem = (p, variant) => {
    setOpen(variant);
    setCartItems((prev) => {
      let exist = prev.find((item) => item.id === p.id);

      if (exist) {
        return prev.map((item) =>
          item.id === p.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...p, quantity: 1 }];
    });
  };

  const deleteItem = (p) => {
    setCartItems((prev) => {
      const filteredArray = prev.filter((item) => item.id !== p.id);

      return [...filteredArray];
    });
  };

  const increaseQuantity = (p) => {
    setCartItems((prev) => {
      return prev.map((item) =>
        item.id === p.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decreaseQuantity = (p) => {
    if (p.quantity == 1) {
      return deleteItem(p);
    }
    setCartItems((prev) => {
      return prev.map((item) =>
        item.id === p.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const filterValues = (a, b) => {
    setValues([a, b]);
  };

  const filterName = (input) => {
    setNameFind(input.toLowerCase());
  };

  useEffect(() => {
    axios
      .get(`https://63ac465834c46cd7ae7cca9f.mockapi.io/products`)
      .then((res) => {
        const productList = res.data;
        setProducts(productList);
      })
      .catch((error) => console.log(error));
  }, []);
  const prices = products.filter((item) => {
    const price = Number(item.price.replace(/₫/g, "").replace(/\./g, ""));
    return price > values[0] && price < values[1];
  });
  return (
    <div className={cx(`${theme}`)}>
      <div className={cx("slide")}>
        <div className={cx("slide-detail")}>
          <span className={cx("small-title")}>
            <p>NEW COLLECTION</p>
          </span>
          <span className={cx("big-title")}>
            <h2>THE NEW RING SENSATION</h2>
          </span>
          <span
            className={cx("slide-content")}
            style={{ wordWrap: "break-word", width: "100%" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </span>
          <span className={cx("slide-btn")}>
            <button>SHOP NOW</button>
          </span>
        </div>
      </div>
      <div className={cx("slider")}>
        <Slider {...settings}>
          <div className={cx("logo")}>
            <LazyLoadImage src="https://i.postimg.cc/QxPJ8hXy/brand-1.png" />
          </div>
          <div className={cx("logo")}>
          
            <LazyLoadImage src="https://i.postimg.cc/pdMQjC5Q/brand-2.png" />
          </div>
          <div className={cx("logo")}>
           
            <LazyLoadImage src="https://i.postimg.cc/B6qxYvgX/brand-3.png" />
          </div>
          <div className={cx("logo")}>
         
            <LazyLoadImage src="https://i.postimg.cc/d14GzKHn/brand-4.png" />
          </div>
          <div className={cx("logo")}>
          
            <LazyLoadImage src="https://i.postimg.cc/x8ZM13Sz/brand-5.png" />
          </div>
          <div className={cx("logo")}>
            
            <LazyLoadImage src="https://i.postimg.cc/B6qxYvgX/brand-3.png" />
          </div>
        </Slider>
      </div>
      <div className={cx("shop-body")}>
        <div
          className={cx("side-bar")}
          onClick={() => {
            handleOpen(false);
          }}
        >
          <Sidebar
            filterValues={filterValues}
            filterName={filterName}
            inputValue={nameFind}
          ></Sidebar>
        </div>
        <div className={cx("shop-products-title")}>
          <div
            className={cx("navigation")}
            onClick={() => {
              handleOpen(false);
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                marginRight: "10px",
              }}
            >
              Home
            </Link>
            {">"}
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "10px",
              }}
            >
              Maserati
            </Link>
          </div>
          <div
            className={cx("shop-products-type")}
            onClick={() => {
              handleOpen(false);
            }}
          >
            Acessories
          </div>
          <div
            className={cx("shop-products-content")}
            onClick={() => {
              handleOpen(false);
            }}
          >
            Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum
            sit amet a augue. Sed non neque elit sed ut.
          </div>
          <div
            style={{ margin: "20px 0px", fontWeight: "500" }}
            onClick={() => {
              handleOpen(false);
            }}
          >
            Showing all {products.length} products
          </div>
          <div className={cx("products")} style={{ paddingLeft: "10px" }}>
            {products
              .filter((item) => {
                const price = Number(
                  item.price.replace(/₫/g, "").replace(/\./g, "")
                );
                const nameFilter = item.name.toLowerCase();
                return (
                  price > values[0] &&
                  price < values[1] &&
                  nameFilter.includes(nameFind.replace(" ", ""))
                );
              })
              .map((item) => (
                <div key={item.id}>
                  <Product
                    item={item}
                    manufacture={"Ferrari"}
                    addCart={handleAddItem}
                    handleOpenModal={handleOpenModal}
                  ></Product>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div
        className={`${
          open ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-1000 z-20 px-4 lg:w-[35vw]"`}
      >
        <Cart
          handleClose={handleOpen}
          handleDelete={deleteItem}
          handleIncrease={increaseQuantity}
          handleDecrease={decreaseQuantity}
          cartList={cartItems}
        ></Cart>
      </div>

      <div className={cx("special-offer")}>
        <div className={cx("special-offer-content")}>
          Unleash Freedom: Fuel Your Journey, 5 Years of Services On Us!
        </div>
      </div>
      <div transition-all duration-1000>
        <ProductDetail
          handleClose={handleOpenModal}
          modal={modal}
        ></ProductDetail>
      </div>
    </div>
  );
};

export default Shop;
