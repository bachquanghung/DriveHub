import React from "react";
import classNames from "classnames/bind";
import styles from "./Features.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";
import { FaTools } from "react-icons/fa";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css"

const cx = classNames.bind(styles);
const Features = () => {
  const features = [
    {
      title: "Quality Servicing",
      content:
        "At our car showroom, we prioritize providing top-notch servicing for your vehicle. Our dedicated team of experienced technicians is committed to delivering exceptional quality in every aspect of the service. From routine maintenance to complex repairs, we use high-quality parts and follow industry-leading practices to ensure your car receives the best care possible. With our emphasis on quality servicing, you can trust that your vehicle is in safe hands.",
      icon: AiFillStar,
    },
    {
      title: "Expert Workers",
      content:
        "Our car showroom boasts a team of highly skilled and knowledgeable workers who are experts in their field. Each member of our staff undergoes rigorous training and possesses extensive experience in handling various makes and models of vehicles. Their expertise enables them to diagnose issues accurately, offer effective solutions, and perform repairs with precision. With our team of expert workers, you can expect professional and reliable service that exceeds your expectations.m",
      icon: GrUserExpert,
    },
    {
      title: "Modern Equipment",
      content:
        "We understand the importance of using advanced technology to enhance the efficiency and effectiveness of our services. That's why our car showroom is equipped with state-of-the-art tools and modern equipment. From diagnostic devices to specialized machinery, we invest in the latest technology to ensure accurate and efficient servicing. Our modern equipment, combined with the expertise of our workers, enables us to provide comprehensive solutions for all your car maintenance and repair needs.",
      icon: FaTools,
    },
  ];
  return (
    <div>
      <Container>
    
        <Row>
       
          {features.map((feature, index) => (
            <Col key={index} className={cx("feature")}>
              <div className={cx("icon")}>
                <feature.icon></feature.icon>
              </div>
              <div className={cx("detail")}>
                <div className={cx("title")}>{feature.title}</div>
                <div className={cx("content")}>{feature.content}</div>
                <div className={cx("read-more")}>Read more...</div>
              </div>
            </Col>
          ))}
         
        </Row>
       
      </Container>
    </div>
  );
};

export default Features;
