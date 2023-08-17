import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from './Layout.module.scss'
import classNames from "classnames/bind";
const cx=classNames.bind(styles)
const Layout = ({children}) => {
    return (
        <div>
            <div className={cx('header')}>
                <Header></Header>
            </div>
            <div className={cx('content')}>
        
        {children}
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Layout;