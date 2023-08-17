import { React, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames/bind";
import styles from "./Checkout.module.scss";
import { Container, Col, Row } from "react-bootstrap";
const cx = classNames.bind(styles);

const Checkout = () => {
  const [stage, setStage] = useState("customerInfo");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => console.log(data);

  const vietnamProvinces = [
    "Hanoi",
    "Ho Chi Minh City",
    "Da Nang",
    "Hai Phong",
    "Can Tho",
    "An Giang",
    "Bac Giang",
    "Bac Kan",
    "Bac Lieu",
    "Bac Ninh",
    "Ba Ria - Vung Tau",
    "Ben Tre",
    "Binh Dinh",
    "Binh Duong",
    "Binh Phuoc",
    "Binh Thuan",
    "Ca Mau",
    "Cao Bang",
    "Dak Lak",
    "Dak Nong",
    "Dien Bien",
    "Dong Nai",
    "Dong Thap",
    "Gia Lai",
    "Ha Giang",
    "Ha Nam",
    "Ha Tinh",
    "Hai Duong",
    "Hau Giang",
    "Hoa Binh",
    "Hung Yen",
    "Khanh Hoa",
    "Kien Giang",
    "Kon Tum",
    "Lai Chau",
    "Lam Dong",
    "Lang Son",
    "Lao Cai",
    "Long An",
    "Nam Dinh",
    "Nghe An",
    "Ninh Binh",
    "Ninh Thuan",
    "Phu Tho",
    "Phu Yen",
    "Quang Binh",
    "Quang Nam",
    "Quang Ngai",
    "Quang Ninh",
    "Quang Tri",
    "Soc Trang",
    "Son La",
    "Tay Ninh",
    "Thai Binh",
    "Thai Nguyen",
    "Thanh Hoa",
    "Thua Thien - Hue",
    "Tien Giang",
    "Tra Vinh",
    "Tuyen Quang",
    "Vinh Long",
    "Vinh Phuc",
    "Yen Bai",
  ];
  return (
    <div>
      <Container>
        <div className={cx("header")}>
          <span className={cx("logo")}></span>
          <span className={cx("brand")}>DRIVEHUB</span>
        </div>
        <Row>
          <Col>
            <div style={{ display: "flex", margin: "20px 0px" }}>
              <div
                onClick={() => {
                  setStage("customerInfo");
                }}
                style={{ cursor: "pointer" }}
              >
                01 Customer Info &gt;
              </div>
              <div
                onClick={() => {
                  setStage("payment");
                }}
                style={{ cursor: "pointer" }}
              >
                {" "}
                02 Payment &gt;
              </div>
              <div
                onClick={() => {
                  setStage("shipping");
                }}
                style={{ cursor: "pointer" }}
              >
                {" "}
                03 Shipping
              </div>
            </div>
            <div className={cx("stage-field")}>
              <div className={stage=='customerInfo'?cx('stage-active'):cx('stage')}>
                <div className={cx("express")}>
                  <div className={cx("express-detail")}>
                    <button className="google-pay">Buy with Google Pay</button>
                  </div>
                </div>
                <div className={cx("another-choice")}>
                  <hr></hr>
                  <div className={cx("another-choice-text")}>OR</div>
                  <hr></hr>
                </div>
                <div className={cx("customer-detail-field")}>
                  <div className={cx("customer-detail-title")}>
                    <h2>Customer Details</h2>
                  </div>
                  <div className="customer-detail-inputs">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className={cx("inputs-small")}>
                   
                        <input
                          className={cx("input-detail")}
                          {...register("firstName", {
                            required: "This input is required.",
                            minLength: {
                              value: 8,
                              message: "This input must exceed 7 characters",
                            },
                            maxLength: {
                              value: 24,
                              message:
                                "This input must be less than 24 characters",
                            },
                          })}
                          placeholder="First name..."
                        ></input>
                      
                        {errors.firstName && (
                          <p style={{ color: "red" }}>
                            {errors.firstName.message}
                          </p>
                        )}
                        
                       
                        <input
                          className={cx("input-detail")}
                          {...register("lastName", {
                            required: "This input is required.",
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/,
                              message:
                                "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character.",
                            },
                            minLength: {
                              value: 8,
                              message: "This input must exceed 7 characters",
                            },
                            maxLength: {
                              value: 24,
                              message:
                                "This input must be less than 24 characters",
                            },
                          })}
                          style={{ marginLeft: "10px" }}
                          placeholder="Last name..."
                        
                        ></input>
                        {errors.lastName && (
                          <p style={{ color: "red" }}>
                            {errors.lastName.message}
                          </p>
                        )}
                        </div>
                     
                      <input
                        className={cx("input-detail")}
                        {...register("emailAddress", {
                          required: "Email address is required.",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Please enter a valid email address.",
                          },
                        })}
                        placeholder="Email..."
                      ></input>
                      {errors.emailAddress && (
                        <p style={{ color: "red" }}>
                          {errors.emailAddress.message}
                        </p>
                      )}
                      <input
                        className={cx("input-detail")}
                        {...register("phone", {
                          required: "Phone number is required.",
                          pattern: {
                            value: /^[0-9]+$/,
                            message: "Please enter a valid phone number.",
                          },
                          minLength: {
                            value: 10,
                            message:
                              "Phone number must be at least 10 digits long.",
                          },
                        })}
                        placeholder="Phone..."
                      ></input>

                      {errors.phone && (
                        <p style={{ color: "red" }}>
                          {errors.lastName.message}
                        </p>
                      )}
                      <input type="submit" className={cx("button-submit")} />
                    </form>
                  </div>
                </div>
               
              </div>
              <div className={stage=='shipping'?cx('stage-active'):cx('stage')}>
                  <h2>Ship To</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      className={cx("input-detail")}
                      {...register("address", {
                        required: "Address is required.",
                      })}
                      placeholder="Address..."
                    ></input>
                    <div className={cx("inputs-small")}>
                      <input
                        className={cx("input-detail")}
                        {...register("postalCode", {
                          required: "Postal Code is required",
                          pattern: {
                            value: /^[0-9]*$/,
                            message: "Please enter a valid postal code number.",
                          },
                          minLength: {
                            value: 5,
                            message: "Postal Cost must have at least 5 digits",
                          },
                          maxLength: {
                            value: 5,
                            message: "Postal Cost must have 6 digits at max",
                          },
                        })}
                        placeholder="Postal Code..."
                      ></input>
                      {errors.postalCode && (
                        <p style={{ color: "red" }}>
                          {errors.postalCode.message}
                        </p>
                      )}
                      <input
                        className={cx("input-detail")}
                        {...register("city", {
                          required: "Town/City name is required",
                          pattern: {
                            value: /^[A-Za-z\s]+$/,
                            message: "Please enter a valid city name.",
                          },
                        })}
                        style={{ marginLeft: "10px" }}
                        placeholder="Town/City..."
                      ></input>
                      {errors.city && (
                        <p style={{ color: "red" }}>
                          {errors.city.message}
                        </p>
                      )}
                    </div>

                    <select
                      className={cx("select-input")}
                      {...register("province", {
                        required: "Province selection is required",
                      })}
                    >
                      <option value="">Select a province</option>
                      {vietnamProvinces.map((province, index) => (
                        <option key={index} value={province}>
                          {province}
                        </option>
                      ))}
                    </select>
                    {errors.province && (
                      <p style={{ color: "red" }}>{errors.province.message}</p>
                    )}
                    <input type="submit" className={cx("button-submit")} />
                  </form>
                </div>
            </div>
          </Col>

          <Col>
            <div className={cx("shopping-cart-field")}>
              <div className={cx("shopping-cart-title")}></div>
              <div className={cx("shopping-cart-quantity")}></div>
            </div>
            <div className={cx("shopping-cart-items")}>
              <div className={cx("shopping-cart-item")}>
                <img></img>
              </div>
              <div className={cx("shopping-cart-item-info")}>
                <div className={cx("shopping-cart-item-name")}></div>
                <div className={cx("shopping-cart-item-price")}></div>
              </div>
            </div>
            <div className={cx("vouchers")}></div>
            <div className={cx("before-total")}>
              <div className={cx("subtotal")}>
                <div className={cx("before-total-component")}>
                  <div className={cx("before-total-component-name")}>
                    Subtotal
                  </div>
                  <div className={cx("before-total-component-price")}></div>
                </div>
                <div className={cx("before-total-component")}>
                  <div className={cx("before-total-component-name")}>
                    Shipping
                  </div>
                  <div className={cx("before-total-component-price")}></div>
                </div>
              </div>
            </div>
            <div className={cx("total")}>
              <div className={cx("total-name")}>Total</div>
              <div className={cx("total-price")}></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
