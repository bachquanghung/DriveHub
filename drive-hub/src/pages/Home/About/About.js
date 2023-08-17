import React from "react";
import classNames from "classnames/bind";
import styles from "./About.module.scss";

import { Col, Container, Row } from "react-bootstrap";
import { themeContext } from "../../../App";
import { useContext } from "react";

const cx = classNames.bind(styles);

const About = () => {
  const value=useContext(themeContext)
  const theme=value.theme
    const features =[
        {
            title:'Professional & Expert',
            content:'Diam dolor diam ipsum sit amet diam et eos'
        },
        {
            title:'Quality Servicing Center',
            content:'Diam dolor diam ipsum sit amet diam et eos'
        },
        {
            title:'Awards Winning Workers',
            content:'Diam dolor diam ipsum sit amet diam et eos'
        },
    ]
  return (
    <div className={cx(`${theme}`)}>
      <Container>
      <Row md="1" lg="2">
      <Col>
          <div className={cx('image')}>
          <div className={cx('experience')}>
                <div className={cx('experience-number')}>15</div>
                <div className={cx('experience-content')}>Years Experience</div>
            </div>
          </div>
         
          </Col>
          <Col>
          <div className={cx("about-detail")}>
            <div className={cx("about-us")}>// ABOUT US //</div>
            <div className={cx("about-title")}>
              DRIVEHUB Is The Best Place To Buy Your Dream Car
            </div>
            <div className={cx("about-content")}>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </div>
           <div className={cx("about-feature")}>
            {features.map((feature,index)=>(
                <div className={cx('feature')} key={index}>
                    <div className={cx('feature-number')}>{index+1}</div>
                    <div className={cx('feature-detail')}>
                    <div className={cx('feature-title')}>{feature.title}</div>
                    <div className={cx('feature-content')}>{feature.content}</div>
                    </div>
                    
                </div>
            ))}
           </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
