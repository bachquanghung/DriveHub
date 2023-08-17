import React from 'react';
import styles from './Searching.module.scss'
import classNames from "classnames/bind";
const cx=classNames.bind(styles)
const Searching = () => {
    return (
        <div className={cx('wrapper')}>
             <form >
        <input
          className={cx("search")}
          type="search"
          
         
        />
      </form>
        </div>
    );
};

export default Searching;