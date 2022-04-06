import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import "../../styles/comingSoon.css";

const ComingSoon = () => {
  return (
    <div className="comingSoonContainer">
      <div>
        <h1 className="comingSoonTitle">COMING SOON</h1>
      </div>
      <Swiper
        className="comingSoonCardDisplay"
        slidesPerView={3}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <h1 className="comingSoonStar"> ⭐ </h1>
          <div className="comingSoonCard">
            <div className="cardImg"></div>
            <div className="cardInformation">
              <h3> Aftermath </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="comingSoonStar"> ⭐ </h1>
          <div className="comingSoonCard">
            <div className="cardImg"></div>
            <div className="cardInformation">
              <h3> Evil Dead: The game </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="comingSoonStar"> ⭐ </h1>
          <div className="comingSoonCard">
            <div className="cardImg"></div>
            <div className="cardInformation">
              <h3> Sniper Elite 5 Deluxe Edition </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="comingSoonStar"> ⭐ </h1>
          <div className="comingSoonCard">
            <div className="cardImg"></div>
            <div className="cardInformation">
              <h3> Stalker 2: Heart of Chernobyl </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="comingSoonStar"> ⭐ </h1>
          <div className="comingSoonCard">
            <div className="cardImg"></div>
            <div className="cardInformation">
              <h3> Chrono Cross: the radical dreamers </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="comingSoonStar"> ⭐ </h1>
          <div className="comingSoonCard">
            <div className="cardImg"></div>
            <div className="cardInformation">
              <h3> Against the Storm</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ComingSoon;
