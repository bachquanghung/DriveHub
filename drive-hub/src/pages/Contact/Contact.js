import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import ContactForm from "./ContactForm/ContactForm";
import { useContext } from "react";
import { themeContext } from "../../App";
const cx = classNames.bind(styles);
const Contact = () => {
  const value = useContext(themeContext);
  const theme = value.theme;
  const user = {
    name: "she-hulk",
    email: "jen@lhk.com",
    country: "usa",
  };
  const handleSave = (value) => {
    console.log({ value });
  };
  const dataList = [
    {
      id: 1,
      img: "https://static.automotor.vn/images/upload/2022/08/28/bugatti-chay-hang-autonews.jpeg",
      title: "Bugatti",
      content:
        "Bugatti is a completely new line of high-class supercars from the French supercar company Bugatti.",
    },
    {
      id: 2,
      img: "https://xehay.vn/uploads/images/2015/08/4/xehay-10sieuxe-240815-1.jpg",
      title: "Ferrari",
      content:
        "Ferrari is a mid-engined and rear-wheel drive long-distance sports car from the Italian car manufacturer Ferrari.",
    },
    {
      id: 3,
      img: "https://asb.vn/wp-content/uploads/2021/03/top-sieu-xe-lam-nen-ten-tuoi-tren-thi-truong-chau-my-1.jpg",
      title: "Lamborghini",
      content:
        "Automobili Lamborghini S.p.A is an Italian manufacturer of high-end super sports cars",
    },
  ];
  return (
    <div className={cx(`wrapper${theme}`)}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.3391816052476!2d105.7834574153847!3d20.97903669484882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accd88c1276b%3A0xc7ec85c744d8874e!2zSOG7kyBHxrDGoW0gUGxhemE!5e0!3m2!1svi!2s!4v1679021566383!5m2!1svi!2s"
        width="100%"
        height="450"
        title="map"
        style={{
          border: "1px  blue solid  ",
          margin: "0 0",
          borderRadius: "5px",
        }}
        loading="lazy"
      />
      <Container>
        <Row className={cx("figure")}>
          <h1 style={{ marginTop: "30px" }}>Contatti & Info</h1>

          <Col
            xs={12}
            md={7}
            style={{
              border: "none",
              alignItems: "center",
            }}
          >
            <Card style={{ margin: "0 5%" }} className={cx("card-prev")}>
              <Card.Body>
                <h3>Info & Cars</h3>
                <p>
                  Chào mừng quý khách đến với chúng tôi! Chúng tôi đang cung cấp
                  những dòng xe ô tô sang trọng và đẳng cấp, đáp ứng nhu cầu di
                  chuyển của quý khách hàng.
                </p>
              </Card.Body>
            </Card>
            <br />
            <Card style={{ margin: "0 5%" }} className={cx("card-prev")}>
              <Card.Body>
                <h3>Location</h3>
                <p> 500 Terry Francois Street San Francisco, CA 94158</p>
                <p>Phone: 123 - 456 - 7890</p>
                <p> Email: info@mysite.com</p>
              </Card.Body>
            </Card>

            <div className={cx("fill")}></div>
          </Col>
          <Col
            xs={12}
            md={5}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Card className={cx("card-support")}>
              <Card.Header style={{ background: "violet" }} as="h3">
                Support team
              </Card.Header>
              <Card.Body>
                <p> Phone: 123 - 456 - 7890</p>
                <p>Email: info@mysite.com</p>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>

            <ContactForm onSave={handleSave} {...{ user }} />
          </Col>
        </Row>
        <Row xs={1} md={1} lg={1} style={{ marginTop: "50px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginBottom: "30px",
            }}
          >
            <div className={cx("manufacturers-intro")}>
              Perchè partire con Surfcamp?
            </div>
            <div className={cx("manufacturers")}>
              {dataList.map((item, index) => (
                <div className={cx("manufacturer")}>
                  <LazyLoadImage
                    src={item.img}
                    className={cx("manufacturer-img")}
                    alt="Image Alt"
                  />
                  <Link to="/shop" style={{ textDecoration: "none",color:'black' }}>
                    <div className={cx("manufacturer-title")}>{item.title}</div>
                  </Link>
                  <Link to="/shop" style={{ textDecoration: "none",color:'black' }}>
                    <div className={cx("manufacturer-text")}>
                      {item.content}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
