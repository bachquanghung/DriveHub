import React, { Children } from 'react';
import { Container } from 'react-bootstrap';
import {
    AiFillFacebook,
  AiFillYoutube,
  AiOutlineGithub
} from "react-icons/ai";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx=classNames.bind(styles)

const Footer = () => {
    const datas=[
        {
            title:'Address',
            children:[
                {
                    child: "123 Street, New York, USA",
                  },
                  {
                    child: "+012 345 67890",
                  },
                  {
                    child: "mail@domain.com",
                  },
                 
            ]
        },
        {
            title:'Opening Hours',
            children:[
                {
                    child: "Monday - Friday:",
                  },
                  {
                    child: "09.00 AM - 09.00 PM",
                  },
                  {
                    child: "Saturday - Sunday:",
                  },
                  {
                    child: "09.00 AM - 12.00 PM",
                  },
            ]
        },
        {
            title:'Services',
            children:[
                {
                    child: "Diagnostic Test",
                  },
                  {
                    child: "Engine Servicing",
                  },
                  {
                    child: "Tires Replacement",
                  },
                  {
                    child: "Oil Changing",
                  },
                  {
                    child: "Vacuam Cleaning",
                  },
            ]
        }
    ]

    const socials=[
        {
            icon: <AiFillFacebook />,
            src:'https://www.facebook.com/quanghungngocnghech/',
        },
        {
            icon: <AiOutlineGithub />,
      src:'https://github.com/chuyenpro?tab=repositories'
        },
        {
            icon: <AiFillYoutube />,
        }
    ]
    return (
        <div className={cx("footer")}>
            <Container>
            <div className={cx('menu')}>
                {datas.map((data,index)=>(
                    <div key={index} className={cx("list")}>
                        <strong>{data.title}</strong>
                        <ul>
                            {data.children.map((child,index)=>(
                                <li key={index} className={cx("item")}>{child.child}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className={cx('social')}>
                <div className={cx("icons")}>
                    {socials.map((social,index)=>(
                        <a key={index} href={social.src}  className={cx("icon")}>{social.icon}</a>
                    ))}
                </div>
                </div>
                
           
              </div>
             
            <div className={cx('footer-end')}>
                <span>© All Rights Reserved </span>
                <span>@DRIVEHUB</span>
            </div>
            </Container>
        </div>
    );
};

export default Footer;