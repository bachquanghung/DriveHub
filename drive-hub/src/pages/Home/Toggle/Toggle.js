import React, { useState } from 'react';
import classNames from "classnames/bind";
import styles from "./Toggle.module.scss";
import { themeContext } from '../../../App';
import { useContext } from "react";

const cx=classNames.bind(styles)

const Toggle = () => {
    const value=useContext(themeContext)
    const themeToggle=value.toggleTheme
    const theme=value.theme
   
    return (
        <div>
            <div className={cx(`background${theme}`)} onClick={themeToggle}>
                <div className={cx(`spinner${theme}`)}></div>
            </div>
        </div>
    );
};

export default Toggle;