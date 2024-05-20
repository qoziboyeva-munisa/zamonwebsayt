
import "./Location.css"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import swap1 from "../../assets/img/swap1.png"
import swap15 from "../../assets/img/swap15.jpg"
import swap01 from "../../assets/img/swap01.avif"
import swap02 from "../../assets/img/swap02.jpg"
import swap10 from "../../assets/img/swap10.jpg"
import swap14 from "../../assets/img/swap14.jpg"
import swap12 from "../../assets/img/swap12.jpg"
import swap13 from "../../assets/img/swap13.jpg"

function Location(){

    return(
        <>
        <div className="location">
            <div className="container location__container">
                 <h1 className="location__title">Best Locations</h1>
                 <p className="location__text">Discover the best offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.</p>
                 <Swiper
                 loop={true}
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
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