import React from 'react';
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { useContext } from 'react';
import { themeContext } from "../../App";
import { LazyLoadImage } from "react-lazy-load-image-component";
const cx = classNames.bind(styles);
const Sidebar = () => {
    const value=useContext(themeContext)
    const theme=value.theme
    return (
        <div className={cx(`sidebar${theme}`)}>
            <div className={cx('sidebarItem')}>
                <span className={cx('sidebarTitle')}>About me</span>
                <LazyLoadImage src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80'
       
        alt="Image Alt"
      />
                <p>Customer satisfaction is our top priority, don’t hesitate to contact us using the contact form on our profile page if you require any assistance. Will try to reply within 48 hour.</p>
            </div>
            <div className={cx('sidebarItem')}>
                <span className={cx('sidebarTitle')}>CATEGORIES</span>
                <ul className={cx('sidebarListItem')}>
                    <li className={cx('sidebarListItem')}>Car</li>
                    <li className={cx('sidebarListItem')}>Lifestyle</li>
                    <li className={cx('sidebarListItem')}>Trend</li>
                    <li className={cx('sidebarListItem')}>Tutorial</li>
                    <li className={cx('sidebarListItem')}>Brand</li>
                </ul>
            </div>
            <div className={cx('sidebarItem')}>
            <div className={cx('sidebarTitle')}></div>
                <span className='sidebarSocial'>

                </span>
            </div>
        </div>
    );
};

export default Sidebar;