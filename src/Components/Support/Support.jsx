

import "./Support.css"
import cart12 from "../../assets/img/cart12.jpg"
import cart13 from "../../assets/img/cart13.jpg"
import cart14 from "../../assets/img/cart14.jpg"
import cart15 from "../../assets/img/cart15.jpg"
import cart16 from "../../assets/img/cart16.jpg"
import cart17 from "../../assets/img/cart17.jpg"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslation } from "react-i18next"
function Support(){
  const {t , i18n} = useTranslation();
    const [swiperRef, setSwiperRef] = useState(null);
    
    let appendNumber = 6;
    let prependNumber = 3;
  
    const prepend2 = () => {
      swiperRef.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      ]);
    };
    const prepend = () => {
        swiperRef.prependSlide(
          '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
      };
    
      const append = () => {
        swiperRef.appendSlide(
          '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
      };
      const append2 = () => {
        swiperRef.appendSlide([
          '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
          '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
      };

    return(
        <>
          <div className="support">
            <div className="container support__container">
               <h1 className="support__title">{t("support.visa")}</h1>
               <p className="support__text">{t("support.free")}</p>

            </div>
            <Swiper
             autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
        loop={true}
        onSwiper={setSwiperRef}
        slidesPerView={3.2}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        breakpoints={{
          1020: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          920: {
            slidesPerView: 2.6,
            spaceBetween: 30,
          },
          820: {
            slidesPerView: 2.6,
            spaceBetween: 30,
          },
         720: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          620: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          520: {
            slidesPerView: 1.8,
            spaceBetween: 30,
          },
          420: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <ul className="support__list">
                <li className="support__item">
                    <img className="support__img" src={cart12} alt="" />
                </li>
                <li className="support__item__name">
                     <h2 className="support__title__name">{t("support.india")}</h2>
                     <p className="support__text__name">{t("support.234")}</p>
                     <hr className="" />
                      <h3 className="support__title__name1">{t("support.benefits")}</h3>
                      <p className="support__text__name"> {t("support.best")}</p>
                      <p className="support__text__name"> {t("support.short")}</p>
                      <p className="support__text__name">{t("support.trus")}</p>
                      <a href="#make">
                      <button className="support__btn">{t("support.make")}</button>
                      </a>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
        <ul className="support__list">
                <li className="support__item">
                    <img className="support__img" src={cart13} alt="" />
                </li>
                <li className="support__item__name">
                     <h2 className="support__title__name">{t("support.japan")}</h2>
                     <p className="support__text__name">{t("support.234")}</p>
                     <hr className="" />
                      <h3 className="support__title__name1">{t("support.benefits")}</h3>
                      <p className="support__text__name"> {t("support.best")}</p>
                      <p className="support__text__name">{t("support.short")}</p>
                      <p className="support__text__name"> {t("support.trus")}</p>
                      <a href="#make">
                      <button className="support__btn">{t("support.make")}</button>
                      </a>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
        <ul className="support__list">
                <li className="support__item">
                    <img className="support__img" src={cart14} alt="" />
                </li>
                <li className="support__item__name">
                     <h2 className="support__title__name">{t("support.arabia")}</h2>
                     <p className="support__text__name">{t("support.234")}</p>
                     <hr className="" />
                      <h3 className="support__title__name1">{t("support.benefits")}</h3>
                      <p className="support__text__name">{t("support.best")}</p>
                      <p className="support__text__name"> {t("support.short")}</p>
                      <p className="support__text__name"> {t("support.trus")}</p>
                      <a href="#make">
                      <button className="support__btn">{t("support.make")}</button>
                      </a>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
        <ul className="support__list">
                <li className="support__item">
                    <img className="support__img" src={cart15} alt="" />
                </li>
                <li className="support__item__name">
                     <h2 className="support__title__name">{t("support.oman")}</h2>
                     <p className="support__text__name">{t("support.234")}</p>
                     <hr className="" />
                      <h3 className="support__title__name1">{t("support.benefits")}</h3>
                      <p className="support__text__name"> {t("support.best")}</p>
                      <p className="support__text__name"> {t("support.short")}</p>
                      <p className="support__text__name"> {t("support.trus")}</p>
                      <a href="#make">
                      <button className="support__btn">{t("support.make")}</button>
                      </a>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
        <ul className="support__list">
                <li className="support__item">
                    <img className="support__img" src={cart16} alt="" />
                </li>
                <li className="support__item__name">
                     <h2 className="support__title__name">{t("support.china")}</h2>
                     <p className="support__text__name">{t("support.234")}</p>
                     <hr className="" />
                      <h3 className="support__title__name1">{t("support.benefits")}</h3>
                      <p className="support__text__name"> {t("support.best")}</p>
                      <p className="support__text__name"> {t("support.short")}</p>
                      <p className="support__text__name"> {t("support.trus")}</p>
                      <a href="#make">
                      <button className="support__btn">{t("support.make")}</button>
                      </a>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
        <ul className="support__list">
                <li className="support__item">
                    <img className="support__img" src={cart17} alt="" />
                </li>
                <li className="support__item__name">
                     <h2 className="support__title__name">{t("support.hong")}</h2>
                     <p className="support__text__name">{t("support.234")}</p>
                     <hr className="" />
                      <h3 className="support__title__name1">{t("support.benefits")}</h3>
                      <p className="support__text__name"> {t("support.best")}</p>
                      <p className="support__text__name"> {t("support.short")}</p>
                      <p className="support__text__name"> {t("support.trus")}</p>
                      <a href="#make">
                      <button className="support__btn">{t("support.make")}</button>
                      </a>
                </li>
            </ul>
        </SwiperSlide>
      </Swiper>
          </div>
        </>
    )
}

export default Support