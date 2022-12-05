import React from "react";
import s from "./index.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Product({ title, price, description, images }) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={s.product_card}>
      <Slider {...settings}>
        <div>
          <img src={images[0]} alt="im1" />
        </div>
        <div>
          <img src={images[1]} alt="im2" />
        </div>
        <div>
          <img src={images[2]} alt="im3" />
        </div>
      </Slider>
      <p>Title: {title}</p> 
      <p>Description: {description}</p>
      <p>Price: {price}</p>
    </div>
  );
}
