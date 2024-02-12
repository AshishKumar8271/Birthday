import React, { useState } from "react";
import Slider from "react-slick";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);
  const settings = {
    accessibility: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    autoplay: true,
    focusOnSelect: true,
    pauseOnFocus: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          slidesPerRow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container px-2 md:px-12">
      <div className="text-center mb-6">
        <h2
          className="text-4xl font-bold text-purple-600 font-courg"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Let's Celebrate, King of the Day!
        </h2>
        <p
          className="text-lg text-gray-600 font-courg mt-1"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Get ready for a day filled with fun, surprises, and lots of cake!
        </p>
      </div>
      <Slider {...settings}>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/2189696/pexels-photo-2189696.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/2189696/pexels-photo-2189696.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/2189696/pexels-photo-2189696.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/2189696/pexels-photo-2189696.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/2189696/pexels-photo-2189696.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/2189696/pexels-photo-2189696.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="p-2">
          <img src="https://images.pexels.com/photos/2189696/pexels-photo-2189696.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
