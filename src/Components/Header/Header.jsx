
import './Header.css'
import zamon1 from "../../assets/img/zamon1.webp"
import zamon2 from "../../assets/img/zamon2.jpg"
import zamon13 from "../../assets/img/zamon13.jpg"
import zaom14 from "../../assets/img/zaom14.avif"
import Border1 from "../../assets/img/Border1.png"
import Border2 from "../../assets/img/Border2.png"
import Border3 from "../../assets/img/Border3.png"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next'



function Header() {

   const {t, i18n} = useTranslation();
  return (
    <>
    
     <Swiper
     style={{height:"700px"}}
     autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
         loop={true}
         slidesPerView={1}
        spaceBetween={30}
        dir="rtl"
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Autoplay,Navigation, Pagination]}
        className="mySwiper"
      >
     

     <div className="header">
        <SwiperSlide >
            <img className='header__swip' src={zamon1} alt="" />
            <div className="container header__container">
            <div className="header__box">
                <div className="header__boxtop">
               <p className="header__text">{t("header.take")}</p>
               <h1 className="header__title">{t("header.istanbul")}</h1>
               <a href="#make">
               <button className='header__btn'>{t("header.go")}</button>
               </a>
               </div>
            <ul className="header__list">
                <li className="header__item">
                    <div className="header__img">
                    <img src={Border1} alt="" className="header__img1" />
                    </div>
                    <div className="header__itembox">
                        <p className="header__item__text">{t("header.population")}</p>
                        <h2 className="header__item__title">44.48 M</h2>
                    </div>
                </li>
                <li className="header__item">
                  <div className="header__img">
                  <img src={Border2} alt="" className="header__img1" />
                  </div>
                    <div className="header__itembox">
                        <p className="header__item__text">T{t("header.territory")}</p>
                        <h2 className="header__item__title">275.400 KM2</h2>
                    </div>
                </li>
                <li className="header__item">
                    <div className="header__img">
                    <img src={Border3} alt="" className="header__img1" />
                    </div>
                    <div className="header__itembox">
                        <p className="header__item__text">{t("header.avg")}</p>
                        <h2 className="header__item__title">$946.000</h2>
                    </div>
                </li>
            </ul>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='header__swip' src={zamon2} alt="" />
            <div className="container header__container">
            <div className="header__box">
                <div className="header__boxtop">
               <p className="header__text">{t("header.take")}</p>
               <h1 className="header__title">{t("header.antalya")}</h1>
               <a href="#make">
               <button className='header__btn'>{t("header.go")}</button>
               </a>
               </div>
            <ul className="header__list">
                <li className="header__item">
                    <div className="header__img">
                    <img src={Border1} alt="" className="header__img1" />
                    </div>
                    <div className="header__itembox">
                        <p className="header__item__text">{t("header.population")}</p>
                        <h2 className="header__item__title">67.56 M</h2>
                    </div>
                </li>
                <li className="header__item">
                   <div className="header__img">
                   <img src={Border2} alt="" className="header__img1" />
                   </div>
                    <div className="header__itembox">
                        <p className="header__item__text">T{t("header.territory")}</p>
                        <h2 className="header__item__title">263.450 KM2</h2>
                    </div>
                </li>
                <li className="header__item">
                    <div className="header__img">
                    <img src={Border3} alt="" className="header__img1" />
                    </div>
                    <div className="header__itembox">
                        <p className="header__item__text">{t("header.avg")}</p>
                        <h2 className="header__item__title">$544.620</h2>
                    </div>
                </li>
            </ul>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='header__swip' src={zamon13} alt="" />
            <div className="container header__container">
            <div className="header__box">
                <div className="header__boxtop">
               <p className="header__text">{t("header.take")}</p>
               <h1 className="header__title">{t("header.dubai")}</h1>
               <a href="#make">
               <button className='header__btn'>{t("header.go")}</button>
               </a>
               </div>
            <ul className="header__list">
                <li className="header__item">
                   <div className="header__img">
                   <img src={Border1} alt="" className="header__img1" />
                   </div>
                    <div className="header__itembox">
                        <p className="header__item__text">{t("header.population")}</p>
                        <h2 className="header__item__title">32.34 M</h2>
                    </div>
                </li>
                <li className="header__item">
                    <div className="header__img">
                    <img src={Border2} alt="" className="header__img1" />
                    </div>
                    <div className="header__itembox">
                        <p className="header__item__text">T{t("header.territory")}</p>
                        <h2 className="header__item__title">589.409 KM2</h2>
                    </div>
                </li>
                <li className="header__item">
                    <div className="header__img">
                    <img src={Border3} alt="" className="header__img1" />
                    </div>
                    <div className="header__itembox">
                        <p className="header__item__text">{t("header.avg")}</p>
                        <h2 className="header__item__title">$789.034</h2>
                    </div>
                </li>
            </ul>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='header__swip' src={zaom14} alt="" />
            <div className="container header__container">
            <div className="header__box">
                <div className="header__boxtop">
               <p className="header__text">{t("header.take")}</p>
               <h1 className="header__title">{t("header.sharm")}</h1>
               <a href="#make">
               <button className='header__btn'>{t("header.go")}</button>
               </a>
               </div>
            <ul className="header__list">
                <li className="header__item">
                    <div className="header__img">
                    <img src={Border1} alt="" className="header__img1" />
                    </div>
                    <div className="header__itembox">
                        <p className="header__item__text">{t("header.population")}</p>
                        <h2 className="header__item__title">50.18 M</h2>
                    </div>
                </li>
                <li className="header__item">
                      <div className="header__img">
                      <img src={Border2} alt="" className="header__img1" />
                      </div>
                    <div className="header__itembox">
                        <p className="header__item__text">T{t("header.territory")}</p>
                        <h2 className="header__item__title">600.400 KM2</h2>
                    </div>
                </li>
                <li className="header__item">
                      <div className="header__img">
                      <img src={Border3} alt="" className="header__img1" />
                      </div>
                    <div className="header__itembox">
                        <p className="header__item__text">{t("header.avg")}</p>
                        <h2 className="header__item__title">$248.500</h2>
                    </div>
                </li>
            </ul>
            </div>
        </div>
        </SwiperSlide>

      </div>

      </Swiper> 
        
     
     
  
    </>
  )
}

export default Header