import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import logo from "../../asset/logo.png";
import { Link } from "react-router-dom";
import { BsFacebook} from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
const cx = classNames.bind(styles);
const Login = () => {
    const [choice,setChoice]=useState(true)

  
    const handleChangeRegister=()=>{
       setChoice(choice=>!choice)
    }

  return (
    <div>
    <div className={cx('background')}></div>
    <div className={cx("container")}>
    <div className={cx('item')}>
      <div className={cx("logo")} style={{width:'fitContent'}}>
        <span className={cx('title')}>
          <Link to="/">
            <img src={logo} className={cx("logo-img")}></img>
          </Link>
          <h2>Drive Hub</h2>
        </span>
        
        <div className={cx("text-item")}>
          <h2>
            {" "}
            Welcome!<br></br>
            <span>To Our Website</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className={cx('social-icon')}>
            <a href="#"><BsFacebook></BsFacebook></a>
            <a href="#"><AiFillInstagram></AiFillInstagram></a>
            <a href="#"><AiFillTwitterCircle></AiFillTwitterCircle></a>
            <a href="#"><AiFillYoutube></AiFillYoutube></a>
            <a href="#"><BsLinkedin></BsLinkedin></a>
          </div>
        </div>
      </div>
      </div>
      <div className={cx('login-section')}>
        <div className={choice?cx('form-box-login'):cx('form-box-login-active')}>
            <form action="">
                <h2>Sign in </h2>
                <div className={cx('input-box')}>
                     <span className={('icon-img')}><AiOutlineUser></AiOutlineUser></span>
                     <input type="text" required></input>
                     <label for=''>Username</label>
                </div>
                <div className={cx('input-box')}>
                     <span className={('icon-img')}><RiLockPasswordLine></RiLockPasswordLine></span>
                     <input type="password" required></input>
                     <label for=''>Password</label>
                </div>
                <div className={cx('remember-password')}>
                <div><input type="checkbox" name="gg"></input>
                <span>Remember Me</span></div>
                
                  <div > <a href="3" style={{color:'white'}}>Forget Password</a></div>
                </div>
               <button className={cx('btn')}>Login in</button>
               <div className={cx('create-account')}>
                <p>Create A New Account?<a href="#" className={cx('register-link')} style={{color:'white'}} onClick={handleChangeRegister}>Sign up</a></p>
               </div>
            </form>
        </div>

        <div className={!choice?cx('form-box-register-active'):cx('form-box-register')}>
            <form action="">
                <h2>Sign up</h2>

                <div className={cx('input-box')}>
                     <span className={('icon-img')}><AiOutlineUser></AiOutlineUser></span>
                     <input type="text" required></input>
                     <label for=''>Username</label>
                </div>

                <div className={cx('input-box')}>
                     <span className={('icon-img')}><AiOutlineMail></AiOutlineMail></span>
                     <input type="email" required></input>
                     <label for=''>Email</label>
                </div>
                <div className={cx('input-box')}>
                     <span className={('icon-img')}><RiLockPasswordLine></RiLockPasswordLine></span>
                     <input type="password" required></input>
                     <label for=''>Password</label>
                </div>
                <div className={cx('remember-password')}>
                <div><input type="checkbox" name="gg"></input>
                <span>I Agree With All Firms</span></div>
                </div>
               <button className={cx('btn')}>Login in</button>
               <div className={cx('create-account')}>
                <p>Already Have An Account?<a href="#" className={cx('login-link')} style={{color:'white'}} onClick={handleChangeRegister}>Sign in</a></p>
               </div>
            </form>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Login;
