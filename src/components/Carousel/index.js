import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ image1, text1, image2, text2, image3, text3 }) => {
 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false,
 };

 return (
  <Slider {...settings}>
   <div className={`h-80 rounded-md bg-${image1} bg-cover bg-center p-20`}>
    <h3>{text1}</h3>
   </div>
   <div className={`h-80 rounded-md bg-${image1} bg-cover bg-center p-20`}>
    <h3>{text2}</h3>
   </div>
   <div className={`h-80 rounded-md bg-${image1} bg-cover bg-center p-20`}>
    <h3>{text3}</h3>
   </div>
  </Slider>
 );
};

export default Carousel;
