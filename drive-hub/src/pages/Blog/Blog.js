import React, { useEffect, useState, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames/bind";
import styles from "./Blog.module.scss";
import BlogHeader from "./BlogHeader.js";
import Posts from "./Posts.js";
import Sidebar from "./Sidebar.js";
import { themeContext } from "../../App";
import { useContext } from "react";
const cx = classNames.bind(styles);

const Blog = () => {
  const value=useContext(themeContext)
  const theme=value.theme
  return (
    <div className={cx(`${theme}`)}>
      <div>
        <BlogHeader></BlogHeader>
      </div>

      <div className={cx('blogTitle')}>
        <span>Our Blog</span>
      </div>
      
      <div className={cx('home')}>
      <Posts></Posts>
      
        <Sidebar></Sidebar>
     
        
      </div>
      {/* <Container>
        <br />
        <br />
        <Row className={cx("comment")}>
          <h1>Bình Luận</h1>
          <div className={cx("comment-form")}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwttmJ8hKA9m__MNyYn7WghUocb2Gu9Uoow&usqp=CAU"
              alt=""
              width="50px"
              height="50px"
            />
            <input
              type="text"
              value={newComment}
              placeholder="Viết bình luận"
              onChange={(e) => {
                {
                  setNewComment(e.target.value);
                }
              }}
            />
            <div className={cx("commentBtnHolder")}>
              <button
                className={cx("commentBtn")}
                onClick={(e) => postHandle(e)}
              >
                Bình luận
              </button>
            </div>
          </div>
          <ul className={cx("list-comment")}>
            {comments.map((comment) => {
              return (
                <li key={comment._id} className={cx("comment-box")}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwttmJ8hKA9m__MNyYn7WghUocb2Gu9Uoow&usqp=CAU"
                    alt=""
                    width="50px"
                    height="50px"
                  />
                  <div className={cx("comment-info")}>
                    <h5 style={{ marginTop: "18px" }}>{comment.username}</h5>
                    <p>{comment.comment}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Row>
      </Container> */}
    </div>
  );
};
export default Blog;