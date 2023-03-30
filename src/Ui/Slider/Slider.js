import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  Navigation,
  Keyboard,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function Slider(props) {
  return (
    <div className="slider">
      <button className="arrow-left arrow">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="arrow-right arrow">
        <FontAwesomeIcon icon={faChevronRight} style={{ color: "#000000" }} />
      </button>

      <Swiper
        modules={[
          Keyboard,
          Mousewheel,
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
        ]}
        speed={150}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
        mousewheel={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        keyboard={{
          enabled: true,
        }}
      >
        {props.slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <div
              className="sliderimg"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="slide-detail">
                <div>
                  <h1>{slide.name}</h1>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMRilJSY7mWG7ByZw0FzGxF-A-nR3Cqpij6-_C1AlL4BoMyw/viewform?usp=sf_link">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
