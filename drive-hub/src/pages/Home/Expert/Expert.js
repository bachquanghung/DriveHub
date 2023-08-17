import React, { useEffect,useState } from "react";
import classNames from "classnames/bind";
import styles from "./Expert.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import team1 from "../../../asset/team-1.jpg";
import team2 from "../../../asset/team-2.jpg";
import team3 from "../../../asset/team-3.jpg";
import team4 from "../../../asset/team-4.jpg";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { themeContext } from "../../../App";
import { useContext } from "react";
const cx = classNames.bind(styles);

const experts = [
  {
    name: "Qasim Khilji",
    field: "Technique",
    avatar: team1,
  },
  {
    name: "Aquita Shepherd",
    field: "Designation",
    avatar: team2,
  },
  {
    name: "Elliot Wise",
    field: "Examination",
    avatar: team3,
  },
  {
    name: "Hung Bach",
    field: "Developing",
    avatar: team4,
  },
];
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>;
const Expert = () => {
  const value=useContext(themeContext)
  const theme=value.theme
  return (
    <div className={cx(`${theme}`)}>
      <Container>
    
        <div className={cx("title")}>
          <div className={cx("small-title")}>// Our Technicians //</div>
          <div className={cx("big-title")}>Our Expert Technicians</div>
        </div>
        <Row md="2" lg="4">
          {experts.map((expert, index) => (
            <div className={cx("experts")}>
              <div className={cx("expert")}>
                <div
                  className={cx("avatar")}
                  style={{
                    backgroundImage: `url(${expert.avatar})`,
                    backgroundSize: "cover",
                  }}
                >
               
                  <div className={cx("socials")}>
                    <span>
                      <AiFillFacebook></AiFillFacebook>
                    </span>
                    <span>
                      <AiFillTwitterSquare></AiFillTwitterSquare>
                    </span>
                    <span>
                      <AiFillInstagram></AiFillInstagram>
                    </span>
                  </div>
                  
                </div>
                <div className={cx("infor")}>
                  <div className={cx("name")}>{expert.name}</div>
                  <div className={cx("field")}>{expert.field}</div>
                </div>
              </div>
            </div>
          ))}
        </Row>
       
      </Container>
    </div>
  );
};

export default Expert;
