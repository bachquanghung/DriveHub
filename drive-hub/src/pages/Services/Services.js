import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./Services.module.scss";
import { Link } from "react-router-dom";
import { FaCarSide } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { TbReplaceFilled } from "react-icons/tb";
import { FaOilCan } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { themeContext } from "../../App";
import { useContext } from "react";
const cx = classNames.bind(styles);

const Services = () => {
  const value = useContext(themeContext);
  const theme = value.theme;
  const [chosen, setChosen] = useState("Diagnostic");
  const [chosenDetail, setChosenDetail] = useState("");
  const services = [
    {
      id: 1,
      name: "Diagnostic",
      icon: FaCarSide,
      content:
        "At DRIVEHUB, we understand that automotive issues can be frustrating and unpredictable. Our Diagnostic Service is designed to pinpoint the root cause of any problem your vehicle might be experiencing. Our team of skilled technicians uses state-of-the-art diagnostic tools and equipment to quickly and accurately identify issues, allowing us to provide you with an informed and transparent assessment. What to expect from our Diagnostic Service: ",
        list:['Comprehensive Vehicle Inspection: We will inspect your vehicle major systems, including the engine, transmission, brakes, electrical components, and more','Error Code Analysis: Our advanced diagnostic tools will read and interpret error codes from your vehicle onboard computer.','Expert Recommendations: Once we identify the problem, our technicians will explain the issue and provide you with the best possible solutions.'],
    },
    {
      id: 2,
      name: "Engine Servicing",
      icon: FaCar,
      content:
        "Your vehicle engine is its heart, and proper maintenance is vital to ensure its longevity and performance. At DRIVEHUB, our Engine Servicing is tailored to meet the specific needs of your engine, regardless of its make or model. Our certified technicians have the expertise and experience to handle a wide range of engine-related tasks. What our Engine Servicing includes: ",
        list:['Oil and Filter Change: Regular oil changes are essential for maintaining engine health and efficiency.','SparkPlug Inspection and Replacement: We will ensure your spark plugs are in optimal condition for proper ignition.','Air and Fuel Filter Replacement: Clean filters promote better airflow and fuel efficiency.','Timing Belt/Chain Inspection and Replacement: Preventative maintenance of these components can save you from costly repairs.'],
      },
    {
      id: 3,
      name: "Tires Replacement",
      icon: TbReplaceFilled,
      content:
        "Your tires are the only point of contact between your vehicle and the road, making them a crucial component for safety and performance. At DRIVEHUB, we offer professional Tires Replacement services to ensure your vehicle stability and handling are at their best. What we provide for Tires Replacement: ",
        list:['Extensive Tire Selection: Choose from a wide range of top-quality tires that suit your vehicle needs and driving preferences.','Professional Installation: Our skilled technicians will mount and balance your new tires with precision.','Wheel Alignment: We ensure proper wheel alignment to prevent uneven tire wear and improve handling.'],
      },
    {
      id: 4,
      name: "Oil Changing",
      icon: FaOilCan,
      content:
        "Regular oil changes are the cornerstone of effective vehicle maintenance, and at DRIVEHUB, we make this essential service  quick and convenient. Our Oil Changing service is designed to keep your engine running smoothly and efficiently, preventing premature wear and tear. Why choose our Oil Changing service: ",
        list:['High-Quality Oil: We use premium-grade oil that meets or exceeds your vehicle manufacturer recommendations.','Expert Technicians: Our certified technicians are skilled in performing oil changes for all car makes and models.','Filter Replacement: Along with the oil change, we replace the oil filter to ensure optimal filtration.'],
      },
  ];
  return (
    <div className={cx(`${theme}`)}>
      <Container>
        <div className={cx("title")}>
          <div className={cx("small-title")}>// OUR SERVICES //</div>
          <div className={cx("big-title")}>Explore Our Services</div>
        </div>
        <div className={cx("services-field")}>
          <Row>
            <Col>
              <div className={cx("services")}>
                {services.map((service, index) => (
                  <div
                    className={cx("service")}
                    key={index}
                    style={
                      chosen == service.name
                        ? { backgroundColor: "#fd9644" }
                        : {}
                    }
                    onClick={() => {
                      setChosen(service.name);
                    }}
                  >
                    <span className={cx("icon")}>
                      <service.icon></service.icon>
                    </span>
                    <span className={cx("name")}>{service.name}</span>
                  </div>
                ))}
              </div>
            </Col>
            <Col>
              <div className={cx("service-background")}>
                <div
                  className={
                    chosen == "Diagnostic"
                      ? cx("Diagnostic-img-active")
                      : cx("Diagnostic-img")
                  }
                ></div>
                <div
                  className={
                    chosen == "Engine Servicing"
                      ? cx("EngineImg-img-active")
                      : cx("EngineImg-img")
                  }
                ></div>
                <div
                  className={
                    chosen == "Tires Replacement"
                      ? cx("TiresImg-img-active")
                      : cx("TiresImg-img")
                  }
                ></div>
                <div
                  className={
                    chosen == "Oil Changing"
                      ? cx("OilImg-img-active")
                      : cx("OilImg-img")
                  }
                ></div>
              </div>
            </Col>
            <Col>
              <div className={cx("service-detail")}>
                <div className={cx("services-about")}>
                  <div className={cx("services-about-title")}>
                    15 Years Of Experience In Auto Servicing
                  </div>
                  <div className={cx("services-about-content")}>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </div>
                  <div className={cx("services-about-items")}>
                    <div className={cx("services-about-item")}>
                      <div className={cx("services-about-icon")}>
                        <AiFillCheckCircle></AiFillCheckCircle>
                      </div>
                      <div className={cx("services-about-detail")}>
                        Quality Servicing
                      </div>
                    </div>
                    <div className={cx("services-about-item")}>
                      <div className={cx("services-about-icon")}>
                        <AiFillCheckCircle></AiFillCheckCircle>
                      </div>
                      <div className={cx("services-about-detail")}>
                        Expert Workers
                      </div>
                    </div>
                    <div className={cx("services-about-item")}>
                      <div className={cx("services-about-icon")}>
                        <AiFillCheckCircle></AiFillCheckCircle>
                      </div>
                      <div className={cx("services-about-detail")}>
                        Modern Equipment
                      </div>
                    </div>
                  </div>
                  <Link to="/services">
                    <button className={cx("services-btn")}>
                      Read more{" "}
                      <span>
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
        <div className={cx("services-detail-under")}>
          <div
            className={cx("services-detail-img")}
            onClick={() => setChosenDetail("")}
          >
            <div className={cx("services-detail-img-title")}>DRIVEHUB</div>
          </div>
          <div className={cx("service-detail-under")}>
            {services.map((service, index) => (
              <div
                key={index}
                className={
                  chosenDetail == service.name
                    ? cx(`service-${service.id}-active`)
                    : cx(`service-${service.id}`)
                }
                onClick={() => setChosenDetail(service.name)}
                style={
                  (chosenDetail !== "" && chosenDetail !== `${service.name}`)
                    ? { display: "none" }
                    : {}
                }
              >
                <div className={cx("service-detail-under-icon")}>
                  <span className={cx("icon-span")}>
                    <service.icon></service.icon>
                  </span>
                </div>
                <div className={cx("service-detail-title")}>{service.name}</div>
                <div className={cx("service-detail-content")}>
                  {service.content}
                  <div>{service.list.map((item,index)=>(
                    <li key={index} style={{marginTop:'20px'}}>{item}</li>
                  ))}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
