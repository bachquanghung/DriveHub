import React from "react";
import classNames from "classnames/bind";
import styles from "./Testimonials.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Slider from "react-slick";
import { themeContext } from "../../../App";
import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MDBContainer } from "mdb-react-ui-kit";
const cx = classNames.bind(styles);
const Card = ({ img }) => {
  return (
    <div className={cx("card")}>
      <MDBContainer className="my-5 d-flex justify-content-center">
        <LazyLoadImage
          className="rounded-circle shadow-4"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
          style={{ width: "150px", border: "2px solid gray" }}
          alt="Avatar"
        />
      </MDBContainer>
      <p style={{ color: "gray" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontStyle: "italic",
        }}
      >
        <span style={{ fontWeight: "600", color: "#fd9644" }}>
          PAULA WILSON
        </span>
        , Media Analyst
      </p>
    </div>
  );
};
const Testimonials = () => {
  const value = useContext(themeContext);
  const theme = value.theme;
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <div className={cx(`testimonials${theme}`)}>
        <div className={cx("title")}>
          <div className={cx("small-title")}>// TESTIMONIAL //</div>
          <div className={cx("big-title")}>Our Clients Say!</div>
        </div>

        <div style={{ width: "65%" }}>
          <Slider {...settings}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
