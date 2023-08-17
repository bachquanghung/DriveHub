import React, { useState } from "react";
import Slide from "./Slide/Slide";
import News from "./News/News";
import Services from "../Services/Services";
import Expert from "./Expert/Expert";
import Testimonials from "./Testimonials/Testimonials";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Features from "./Features/Features";
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import About from "./About/About";
import {AiOutlineCheck} from 'react-icons/ai';
import {SiExpertsexchange} from 'react-icons/si';
import {AiFillCar} from 'react-icons/ai';
import {BsFillPeopleFill} from 'react-icons/bs';
import Booking from "./Booking/Booking";
import Toggle from "./Toggle/Toggle";
import { themeContext } from "../../App";
import { useContext } from "react";
const cx = classNames.bind(styles);
const Home = () => {
  const value=useContext(themeContext)
  const theme=value.theme
 
  const statisticData=[
    {
      icon:AiOutlineCheck,
      number:15,
      name:'Years Experience'
    },
    {
      icon:SiExpertsexchange,
      number:100,
      name:'Expert Technicians'
    },
    {
      icon:BsFillPeopleFill,
      number:1200,
      name:'Completed Projects'
    },
    {
      icon:AiFillCar,
      number:600,
      name:'Satisfied Clients'
    },
  ]
const [counterOn, setCounterOn]=useState(false)

  return (
    <div className={cx(`container-${theme}`)}>
      <div className={cx("slide")}>
        <Slide></Slide>
      </div>
      <div className={cx('toggle')}>
      <div className={cx('time-day')}>Day</div>
        <Toggle></Toggle>
        <div className={cx('time-night')}>Night</div>
      </div>
      <div className={cx("features")}>
        <Features></Features>
      </div>
      <div className={cx("about")}>
        <About></About>
      </div>
      
      <div className={cx("statistics")}>
      {statisticData.map((statistic,index)=>(
        <div className={cx("statistic")} key={index}>
          <div className={cx("icon")}>
       <statistic.icon></statistic.icon>
          </div>
          <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
          <div className={cx("number")}>{counterOn&&<CountUp start={0} end={statistic.number} duration={5}></CountUp> } </div>
          </ScrollTrigger>
          <div className={cx("object")}>{statistic.name}</div>
        </div>
      ))}
       
      </div>
      
      <div className={cx('services')}><Services></Services></div>
      <div className={cx('booking')}>
        <Booking></Booking>
      </div>
      <div className={cx('expert')}>
        <Expert></Expert>
      </div>
     <div className={cx('testimonials')}>
      <Testimonials></Testimonials>
     </div>
      <div className={cx("top-car")}>
        <News></News>
      </div>
    </div>
  );
};

export default Home;
