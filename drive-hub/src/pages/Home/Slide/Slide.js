import React from 'react';
import styles from './Slide.module.scss'
import classNames from "classnames/bind";
import Carousel from 'react-bootstrap/Carousel';
import { LazyLoadImage } from "react-lazy-load-image-component";
const cx=classNames.bind(styles)

const Slide = () => {
    return (
        <div className={cx('slide')}>
             <Carousel>
      <Carousel.Item>
        <LazyLoadImage className="d-block w-100" src="https://4kwallpapers.com/images/wallpapers/mclaren-artura-trophy-race-cars-dark-background-2022-5k-8k-3840x2160-8444.jpg"      
       alt="First slide"
      />
        <Carousel.Caption>
          <h3>Unleash Your Inner Speed Demon</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
        <LazyLoadImage className="d-block w-100" src="https://wallpaperaccess.com/full/939064.jpg"      
       alt="First slide"
      />
        <Carousel.Caption>
          <h3>Where Power Meets Elegance</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    
<LazyLoadImage className="d-block w-100" src="https://cdn.wallpapersafari.com/81/95/ve3pgN.jpg"   
     alt="Third slide"
      />
        <Carousel.Caption>
          <h3>Where Luxury Meets Performance</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Slide;
