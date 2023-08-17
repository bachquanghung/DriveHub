import React from "react";
import classNames from "classnames/bind";
import styles from "./Booking.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import DatePicker from 'react-datepicker';


const cx = classNames.bind(styles);
const Booking = () => {
  return (
    <div>
      <div className={cx("container")}>
        <Row lg='2' sm='1'>
          <Col>
            <div className={cx("detail")}>
              <div className={cx("title")}>
                Certified and Award Winning Car Repair Service Provider
              </div>
              <div className={cx("content")}>
                Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
                ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
                rebum sea invidunt voluptua. Eos vero eos vero ea et dolore
                eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores
                magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus
                sed.
              </div>
            </div>
          </Col>
          <Col>
            <div className={cx("book-section")}>
            <div className={cx("book-title")}>Book For A Service</div>
            <div style={{padding:'30px'}}>
              <div style={{display:'flex',justifyContent:'center'}}> 
               <Row xs={2}>
                <Col><input type="text" placeholder="Your Name" className={cx('input-field')}></input></Col>
                <Col><input type="email" placeholder="Your Email" className={cx('input-field')}></input></Col>
                <Col><select className={cx('select-field')}>
                  <option selected>Select A service</option>
                  <option value={1}>Service 1</option>
                  <option value={2}>Service 2</option>
                  <option value={3}>Service 3</option>
                </select></Col>
                <Col><input type="date" className={cx('input-field')}></input></Col>
                
               </Row>
         
              </div>

              <textarea className={cx('request-field')} placeholder="Special Request"></textarea>
               <span className={cx('book-btn')}> <button style={{borderRadius:'10px'}}>Book Now</button></span>
                </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Booking;
