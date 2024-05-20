
import './Main.css'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination, Navigation } from 'swiper/modules';
import cart1 from "../../assets/img/cart1.jpg"
import cart2 from "../../assets/img/cart2.jpg"
import cart3 from "../../assets/img/cart3.jpg"
import cart4 from "../../assets/img/cart4.jpg"
import cart5 from "../../assets/img/cart5.jpg"
import cart6 from "../../assets/img/cart6.jpg"

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';

function Main() {
    const {t,i18n} = useTranslation();
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

  return (
    <>
        <div className="main">
          <div className="container main__container">
            <h1 className="main__title">{t("main.best")}</h1>
            <p className="main__text">{t("main.discover")}</p>
          </div>
        <Swiper
        loop={true}
        onSwiper={setSwiperRef}
        slidesPerView={3.2}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <ul className="main__list">
                <li className="main__item">
                    <img className='main__img' src={cart1} alt="" /> 
                </li>
                <li className="main__item__name">
              <div className="main__box">
              <div className="main__boxone">
                      <h2 className="main__title__name">{t("main.istanbul")}</h2>
                      <p className="main__text__name">{t("main.234")}</p>
                    </div>
                    <div className="boxtou">
                      <h3 className="main__boxtou__title">$420</h3>
                      <p className="main__text__name">{t("main.person")}</p>
                    </div>
              </div>
              <h3 className="main__item__title">{t("main.deal")} </h3>
               <p className="main__item__text">{t("main.days")} </p>
               <p className="main__item__text"> {t("main.airplan")}</p>
               <p className="main__item__text"> {t("main.daily")}</p>
               <a href="#make">
               <button className='main__btn'>{t("main.make")}</button>
               </a>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
        <ul className="main__list">
                <li className="main__item">
                <img className='main__img' src={cart2} alt="" />  
                </li>
                <li className="main__item__name">
                    <div className="main__box">
                    <div className="main__boxone">
                      <h2 className="main__title__name">{t("main.dubai")}</h2>
                      <p className="main__text__name">{t("main.300")}</p>
                    </div>
                    <div className="boxtou">
                      <h3 className="main__boxtou__title">$420</h3>
                      <p className="main__text__name">{t("main.person")}</p>
                    </div>
                    </div>
                    <h3 className="main__item__title">{t("main.deal")}  </h3>
               <p className="main__item__text">{t("main.days")}</p>
               <p className="main__item__text"> {t("main.airplan")}</p>
               <p className="main__item__text">  {t("main.daily")}</p>
               <a href="#make">
               <button className='main__btn'>{t("main.make")}</button>
               </a>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
        <ul className="main__list">
                <li className="main__item">
                <img className='main__img' src={cart3} alt="" />   
                </li>
                <li className="main__item__name">
               <div className="main__box">
               <div className="main__boxone">
                      <h2 className="main__title__name">{t("main.antaliya")}</h2>
                      <p className="main__text__name">{t("main.500")}</p>
                    </div>
                    <div className="boxtou">
                      <h3 className="main__boxtou__title">$420</h3>
                      <p className="main__text__name">{t("main.person")}</p>
                    </div>
               </div>
               <h3 className="main__item__title">{t("main.deal")} </h3>
               <p className="main__item__text">{t("main.days")}</p>
               <p className="main__item__text"> {t("main.airplan")}</p>
               <p className="main__item__text">  {t("main.daily")}</p>
               <a href="#make">
               <button className='main__btn'>{t("main.make")}</button>
               </a>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
        <ul className="main__list">
                <li className="main__item">
                <img className='main__img' src={cart4} alt="" />  
                </li>
                <li className="main__item__name">
                <div className="main__box">
                <div className="main__boxone">
                      <h2 className="main__title__name">{t("main.canada")}</h2>
                      <p className="main__text__name">{t("main.340")}</p>
                    </div>
                    <div className="boxtou">
                      <h3 className="main__boxtou__title">$420</h3>
                      <p className="main__text__name">{t("main.person")}</p>
                    </div>
                </div>
                <h3 className="main__item__title">{t("main.deal")}  </h3>
               <p className="main__item__text">{t("main.days")}</p>
               <p className="main__item__text">{t("main.airplan")}</p>
               <p className="main__item__text"> {t("main.daily")}</p>
               <a href="#make">
               <button className='main__btn'>{t("main.make")}</button>
               </a>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
        <ul className="main__list">
                <li className="main__item">
                <img className='main__img' src={cart5} alt="" />
                </li>
                <li className="main__item__name">
               <div className="main__box">
               <div className="main__boxone">
                      <h2 className="main__title__name">{t("main.european")}</h2>
                      <p className="main__text__name">{t("main.420")}</p>
                    </div>
                    <div className="boxtou">
                      <h3 className="main__boxtou__title">$420</h3>
                      <p className="main__text__name">{t("main.person")}</p>
                    </div>
               </div>
               <h3 className="main__item__title">{t("main.deal")} </h3>
               <p className="main__item__text">{t("main.days")}</p>
               <p className="main__item__text"> {t("main.airplan")}</p>
               <p className="main__item__text">  {t("main.daily")}</p>
               <a href="#make">
               <button className='main__btn'>{t("main.make")}</button>
               </a>
                </li>
            </ul>
        </SwiperSlide>
        <SwiperSlide>
        <ul className="main__list">
                <li className="main__item">
                <img className='main__img' src={cart6} alt="" />  
                </li>
                <li className="main__item__name">
                <div className="main__box">
                <div className="main__boxone">
                      <h2 className="main__title__name">{t("main.usa")}</h2>
                      <p className="main__text__name">{t("main.560")}</p>
                    </div>
                    <div className="boxtou">
                      <h3 className="main__boxtou__title">$420</h3>
                      <p className="main__text__name">{t("main.person")}</p>
                    </div>
                </div>
                <h3 className="main__item__title">{t("main.deal")}  </h3>
               <p className="main__item__text">{t("main.days")}</p>
               <p className="main__item__text"> {t("main.airplan")}</p>
               <p className="main__item__text"> {t("main.daily")}</p>
               <a href="#make">
               <button className='main__btn'>{t("main.make")}</button>
               </a>
                </li>
            </ul>
        </SwiperSlide>
      </Swiper>
        </div>
    </>
  )
}

export default Main