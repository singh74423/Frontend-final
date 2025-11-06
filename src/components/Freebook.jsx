import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // desktop
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 3 } }, // large desktop
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // tablet
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // mobile
    ],
  };

  // Gap wrapper style with responsive inline style
  const getSlideStyle = () => {
    const width = window.innerWidth;
    let gap = 12; // default gap
    if (width >= 1280) gap = 90; // large desktop
    else if (width >= 1024) gap = 20; // tablet
    else gap = 8; // mobile
    return {
      padding: `0 ${gap}px`,
      boxSizing: "border-box",
    };
  };

  // Slider container negative margin to compensate wrapper padding
  const getSliderContainerStyle = () => {
    const width = window.innerWidth;
    let margin = 12; // default
    if (width >= 1280) margin = 24;
    else if (width >= 1024) margin = 16;
    else margin = 8;
    return { margin: `0 -${margin}px` };
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mb-6">
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
          corporis nulla non suscipit, iure neque earum?
        </p>
      </div>

      <div style={getSliderContainerStyle()}>
        <Slider {...settings}>
          {book.map((item) => (
            <div key={item.id} style={getSlideStyle()}>
              <div className="w-full">
                <Cards item={item} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
