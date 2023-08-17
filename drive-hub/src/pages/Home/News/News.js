import React from 'react';
import styles from "./News.module.scss";
import classNames from "classnames/bind";
import { Col, Container, Row } from "react-bootstrap";
import ferrari from "../../../asset/ferrari.gif";
import lamborghini from "../../../asset/Lamborghini.gif";
import mclaren from "../../../asset/Mclaren.gif";
import { AiOutlineCalendar } from "react-icons/ai";
import { useContext } from 'react';
import {themeContext} from '../../../App'

const cx=classNames.bind(styles)
const News = () => {
    const value= useContext(themeContext)
    const theme=value.theme

    const newsList=[{
        title: 'Audi A8 Razor',
        src:lamborghini, 
    },
    {
        title: 'Ferrari',
        src:ferrari, 
    },
    {
        title: 'McLaren 570GT',
        src:mclaren, 
    },]
    const date = new Date();
    let day=date.getDate()
    let month=date.getMonth()+1; 
    let year= date.getFullYear(); 
    return (
        <div className={cx(`${theme}`)}>
            <Container>
            <div className={cx("title")}>
        <h5 className={cx("small-title")}>Car of The Week</h5>
        <h2 className={cx("big-title")}>New Trends</h2>
      </div>
     
                <Row sm="12" md="3" lg="3">
                {newsList.map((gif,index)=>(
                    <Col key={index}>
                    <div
              className={cx("gif")}
              style={{ backgroundImage: `url(${gif.src})` }}
            ></div>
            <div className={cx("type")}>
              <p className={cx("calendar")}>
              <AiOutlineCalendar className={cx("icon-calendar")}></AiOutlineCalendar>
             
            {`${day}/${month}/${year}`}
              </p>
              <p className={cx("title-ctt")}>{gif.title}</p>
            </div>
                    </Col>
                ))}
              
                </Row>
               
            </Container>
        </div>
    );
};

export default News;