import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import imagenes from '../assets/carouselImages/imagenes'
import '../styles/carousel.css';
export default function App() {
  
  return (
    <div className="divcarousel">
      <div>
        <h1 className="hcarousel">Popular MyTineraries</h1>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
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
            slidesPerView: 3,
            slidesPerGroup: 2,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
          <SwiperSlide>
            <div className="card-carousel">
              <img src={imagenes.sonic} alt="img" className="image"/>
              <h3 className="titulocarousel">alo polisia</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-carousel">
              <img src={imagenes.kirby} alt="img"className="image"/>
              <h3 className="titulocarousel">alo polisia</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-carousel">
              <img  src={imagenes.pikachu} alt="img"className="image"/>
              <h3 className="titulocarousel">alo polisia</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-carousel">
              <img  src={imagenes.waluigi} alt="img" className="image"/>
              <h3 className="titulocarousel">alo polisia</h3>
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
  );
}
