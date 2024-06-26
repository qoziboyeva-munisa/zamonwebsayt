
import "./Location.css"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import swap1 from "../../assets/img/swap1.png"
import swap15 from "../../assets/img/swap15.jpg"
import swap01 from "../../assets/img/swap01.avif"
import swap02 from "../../assets/img/swap02.jpg"
import swap10 from "../../assets/img/swap10.jpg"
import swap14 from "../../assets/img/swap14.jpg"
import swap12 from "../../assets/img/swap12.jpg"
import swap13 from "../../assets/img/swap13.jpg"
import { useTranslation } from "react-i18next";

function Location(){
 
  const {t, i18n }= useTranslation();
    return(
        <>
        <div className="location">
            <div className="container location__container">
                 <h1 className="location__title">{t("location.location")}</h1>
                 <p className="location__text">{t("location.discover")}</p>
                 <Swiper
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                 loop={true}
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1020: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          920: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          820: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          720: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          620: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
          520: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          420: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          220: {
            slidesPerView: 1,
            spaceBetween: 40,
          },


        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swipper1">
            <img className="swipper__img" src={swap1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swipper1">
            <img className="swipper__img" src={swap15} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swipper1">
        <img className="swipper__img" src={swap01} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swipper1">
        <img className="swipper__img" src={swap02} alt="" /> 
        </SwiperSlide>
        <SwiperSlide className="swipper1">
        <img className="swipper__img" src={swap10} alt="" /> 
        </SwiperSlide>
        <SwiperSlide className="swipper1">
        <img className="swipper__img" src={swap14} alt="" /> 
        </SwiperSlide>
        <SwiperSlide className="swipper1">
        <img className="swipper__img" src={swap12} alt="" /> 
        </SwiperSlide>
        <SwiperSlide className="swipper1">
        <img className="swipper__img" src={swap13} alt="" />
        </SwiperSlide>
    
      </Swiper>
            </div>
         
        </div>
        </>
    )
}
export default Location